var path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
    'storybook-addon-designs',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  staticDirs: ['../storybook-assets'],

  // Snipped for brevity

  // webpackFinal: async (config) => {
  //   config.module.rules.push({
  //     test: /\.css$/i,
  //     // use: [
  //     //   {
  //     //     loader: 'postcss-loader',
  //     //     options: { implementation: require.resolve('postcss') }
  //     //   }
  //     // ],
  //     include: path.resolve(__dirname, '../'),
  //   });
  //   // Return the altered config
  //   return config;
  // },
};
