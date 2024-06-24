/** @type {import('next').NextConfig} */
const API_SLUG = 'v1';

const nextTranslate = require('next-translate-plugin')

const nextConfig = {
  reactStrictMode: true,
  rewrites: () => {
    return [
      {
        source: `/${ API_SLUG }/:slug*`,
        destination: `${ process.env.API_DOMAIN }/:slug*`,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/a/:slug*',
        destination: '/account/:slug*',
        permanent: true,
      },
    ]
  },
  env: {
    apiSlug: API_SLUG,
  },
  output: 'standalone',
  publicRuntimeConfig: {
    domain: process.env.DOMAIN,
    fullpageApiKey: process.env.FULLPAGE_API_KEY,
  },
  serverRuntimeConfig: {},
  // webpack(config, options) {
  //   config.module.rules.push({
  //     test: /\.(mp3)$/,
  //     use: {
  //       loader: 'file-loader',
  //       options: {
  //         publicPath: '/public/music-bg/',
  //         outputPath: 'music-bg/',
  //         name: '[name].[ext]',
  //         esModule: false,
  //       },
  //     },
  //   });
  //   return config;
  // },
}

module.exports = nextTranslate(nextConfig);
