const path = require('path')

module.exports = {
  lintOnSave: false,
  chainWebpack: (config) => {
    config.resolve.extensions
      .add('.styl')
    config.resolve.modules
      .add(path.join(__dirname, './src'))
  }
}
