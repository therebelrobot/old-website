module.exports = {
  entry: './src/app.js',
  presets: [
    require('poi-preset-react')()
  ],
  html: {
    title: 'theRebelRobot - Oz Haven (Trent Oswald)',
    description: 'Software, Audioware, Gardenware',
  },
  webpack(cfg) {
    console.log(cfg.plugins)
    cfg.plugins = cfg.plugins.filter(plugin => (plugin.constructor.name !== 'UglifyJsPlugin'));
    return cfg // <-- Important, must return it
  }
}
