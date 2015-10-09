var m = require('mithril')

module.exports = function (vm) {
  return _view.bind({
    vm: vm
  })
}

function _view(ctrl) {
  var vm = this.vm
  return m('.internal-wrapper', [
    m('.avatar', [
      m('img[alt="Avatar"][src="img/avatar.png"]')
    ]),
    m('.content', [
      m('h1.title', [
        vm.userData().firstname,
        " ",
        m('br'),
        vm.userData().familyname
      ]),
      m('h2.sub-title', '@'+vm.userData().twitter_id),
      m('p', [
        '\n      Maker of web things @ ',
        m('a[href="'+vm.userData().bio_data.experience.items[0].website+'"]', vm.userData().bio_data.experience.items[0].organisation),
        m('br'),
        'Aficionado of Node, Angular, and french toast.\n      ',
        m('br'),
        'Orem, Utah, USA\n    '
      ]),
      m('ul.social-icons', [
        m('li', [
          m('a[href="https://github.com/therebelrobot"][title="Github"]', [
            m('i.fa.fa-github')
          ])
        ]),
        m('li', [
          m('a[href="https://www.linkedin.com/profile/view?id=62388992"][title="LinkedIn"]', [
            m('i.fa.fa-linkedin')
          ])
        ]),
        m('li', [
          m('a[href="https://twitter.com/therebelrobot"][title="Twitter"]', [
            m('i.fa.fa-twitter')
          ])
        ]),
        m('li', [
          m('a[href="https://coinbase.com/therebelrobot"][title="Coinbase"]', [
            m('i.fa.fa-bitcoin')
          ])
        ]),
        m('li', [
          m('a[href="https://gratipay.com/therebelrobot/"][title="Gratipay"]', [
            m('i.fa.fa-gratipay')
          ])
        ])
      ]),
      m('p', [
        '\n      Blog: ',
        m('a[href="http://n.ode.rocks"]', 'n.ode.rocks'),
        m('br'),
        'Projects:\n        ',
        m('a[href="https://github.com/iojs/website"]', 'iojs.org'),
        ',\n        ',
        m('a[href="http://grow.com"]', 'Grow BI Dashboards'),
        ',\n        ',
        m('a[href="http://apianalytics.com"]', 'Analytics by Mashape'),
        ',\n        ',
        m('a[href="https://www.npmjs.com/package/google-adwords"]', 'google-adwords'),
        ',\n        ',
        m('a[href="https://www.npmjs.com/package/countryjs"]', 'countryjs'),
        ',\n        ',
        m('a[href="https://www.npmjs.com/package/superagent-no-cache"]', 'superagent-no-cache'),
        ',\n        ',
        m('a[href="https://www.npmjs.com/package/superagent-params"]', 'superagent-params'),
        ',\n        ',
        m('a[href="https://github.com/therebelrobot/gpgez"]', 'gpgez'),
        m('br'),
        'Check out my\n      ',
        m('a[href="https://github.com/therebelrobot?tab=repositories"]', 'github repos'),
        '.\n      ',
        m('br'),
        m('a[href="https://twitter.com/hashtag/githubroundup?src=hash"]', ['repos I ', m('i.fa.fa-heart')])
      ]),
      m('p', [
        m('a[href="https://keybase.io/therebelrobot"]', [m('i.fa.fa-key'), ' PGP Public Key']),
        m('br'),
        'Want to send me a love letter? ',
        m('a[href="mailto:trentoswald@therebelrobot.com"]', 'Email me'),
        '.'
      ])
    ])
  ])
}

