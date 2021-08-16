const webpack = require("webpack")
console.log(webpack.version)

module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.experiments = {
      buildHttp: true,
    }
    return config
  },
}
