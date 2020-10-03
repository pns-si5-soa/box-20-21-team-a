require('dotenv').config()
const webpack = require('webpack')

const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass')  // Add this declaration
// We modified the code earlier to add Sass 
module.exports = withTypescript(withSass({
  sassLoaderOptions: {},
  webpack: (config) => {
    config.plugins.push(
      new webpack.EnvironmentPlugin(process.env)
    )
    return config
  }
}))