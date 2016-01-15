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

# install dependencies
