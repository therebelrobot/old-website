---
layout: post
section-type: post
title: variety is good
category: tech
tags: [ 'mithril', 'react', 'browserify', 'javascript', 'mashape', 'frameworks', 'virtual-dom' ]
---

So I took on the task about six months ago to take a closer look at React. I only had had experience with Angular.js up to that point, but knew that this new-fangled view system was setting the internet on fire, and wanted in on some of the burn. That lasted for a couple of weeks before my buzz was killed by [this pretty gem](https://jaxenter.com/react-native-goes-open-source-kills-the-buzz-with-patent-license-grant-115978.html) about the Facebook `PATENT` file, listed in all of their open source repos. Needless to say I wasn't too thrilled. Though I've been told this file is just a means of protecting Facebook against frivolous lawsuit, the language contained in it could be used against *any* claim against the company, and I didn't like the idea of being the unfortunate guinea pig in a legal pissing match.

So I took a look at some alternatives. I looked at briefly [RxJs](https://github.com/ReactiveX/RxJS), and [Riot](https://github.com/riot/riot), both of which are interesting approaches to the virtual-dom-diffing methodology that makes React so fast. But then I found a slick little lib created by [Leo Horie](https://github.com/lhorie) called [Mithril](http://mithril.js.org/).

Mithril was a breath of fresh air. Unopinionated, light, and super fast according to the benchmarks I found, it seemed like the micro-powerhouse I was looking for for my apps. When I hopped onboard with Mashape in March, I suggested to the team to take a look at it, and [John Kilgore](https://github.com/nijikokun), one of their developers, took it by storm, became super active in the Mithril Gitter channel and releasing at least 5 Mithril plugins for various features. So it looked like we had chosen our framework, and as I begun building the frontend for [Galileo](http://apianalytics.com), I built the first pass on a pre-release of Mithril. It had some kinks back then, but now on v0.2.1, it is fast, clean, stable, and lets us build the app in a way almost unheard-of in the industry: the way *we* wanted to.

If you haven't taken a look at [Mithril.js](http://mithril.js.org), I highly recommend that you do. While it's userbase is still fledgling, lhorie is super supportive and active in chat, and the rest of the regulars are always happy to help answer questions.

In the framework world, variety is a good thing IMHO. It leads to competition, iteration, and innovation, and in our case, a solid frontend architecture.
