const nextEnv = require('next-env')
const dotenvLoad = require('dotenv-load')

const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants')

dotenvLoad()

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
//   .BundleAnalyzerPlugin

const withNextEnv = nextEnv()

module.exports = withNextEnv()
