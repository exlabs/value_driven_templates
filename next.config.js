const webpack = require('webpack');

const isProd = (process.env.NODE_ENV || 'production') === 'production';

const assetPrefix = isProd ? '/value_driven_templates' : '';

const withFonts = require('next-fonts');

module.exports = withFonts({
  assetPrefix: assetPrefix,
  webpack: (config) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.ASSET_PREFIX': JSON.stringify(assetPrefix),
      })
    );

    return config;
  },
});
