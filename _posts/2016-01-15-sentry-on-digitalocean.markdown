---
layout: post
section-type: post
title: Installing Sentry on DigitalOcean
category: tech
tags: [ 'sentry', 'digitalocean', 'ubuntu', 'linux', 'devops', 'crash reporting', 'oss' ]
---

I'm playing around with different crash reporting utilities as of late. I'm using [Raygun]() at work, and have loved the
level of control it supplies, but the hefty pricetag attached to it makes it less than desirable for OSS projects.
Upon further digging, I found [Sentry](), which has both an (admittedly pricy) hosted version, as well as a free OSS build
that can be self hosted. This is my venture into setting that up.

I started with the basic format [found here](http://dustindavis.me/setting-up-your-own-sentry-server/), but once I hit
the installing of `pip` and `sentry`, things started to fall apart. To be fair, it was written in '13 for Ubuntu 12.10,
I kind of figured it wouldn't fly on Trusty. Here are the steps I'm taking in my attempt to get this to work.

This is built on a $5/mo DigitalOcean Droplet (512 MB Memory / 20 GB Disk), preinstalled with Ubuntu 14.04.3 x64.

```
# add non-root user
adduser sentry

# add to sudoers
adduser sentry sudo

# log out of root and log in as sentry
exit

# update the local package index
sudo apt-get update

# actually upgrade all packages that can be upgraded
sudo apt-get dist-upgrade

# remove any packages that are no longer needed
sudo apt-get autoremove

# reboot the machine, which is only necessary for some updates
sudo reboot

# install basic dependencies
sudo apt-get install git python-setuptools python-pip python-dev libxslt1-dev libxml2-dev libz-dev libffi-dev libssl-dev libpq-dev libyaml-dev

# install postgres: https://help.ubuntu.com/community/PostgreSQL
sudo apt-get install postgresql postgresql-contrib

# configure postgres
sudo -u postgres psql postgres
postgres=# \password postgres
postgres-# \quit
sudo -u postgres createdb sentrydb

# install redis on 127.0.0.1:6379: https://www.digitalocean.com/community/tutorials/how-to-install-and-use-redis
sudo apt-get install tcl8.5
wget http://download.redis.io/releases/redis-stable.tar.gz
tar xzf redis-stable.tar.gz && cd redis-stable
make && make test
sudo make install
cd utils && sudo ./install_server.sh
sudo update-rc.d redis_6379 defaults
# to start service: sudo service redis_6379 start
# to stop service: sudo service redis_6379 stop

# install nginx: https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-14-04-lts
sudo apt-get install nginx-full
sudo update-rc.d nginx defaults
```

From here, I'm pulling in part from [Sentry's on-prem instructions](https://docs.getsentry.com/on-premise/server/installation/#setting-up-an-environment), though deviating at
points (like installing npm, for example):

```
# install virtualenv
# I needed to add sudo so this command wouldn't fail
sudo pip install -U virtualenv

# set virtualenv on /www/sentry
sudo virtualenv /www/sentry/

# activate virtaulenv
source /www/sentry/bin/activate

# install nodejs/npm 0.10 from source
curl -sL https://deb.nodesource.com/setup_0.10 | sudo -E bash -
sudo apt-get install -y nodejs

# install sentry from source
sudo pip install -e git+https://github.com/getsentry/sentry.git@master#egg=sentry-dev

```

