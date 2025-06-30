const packageJson = require('./package.json');
const appVersion = packageJson.version || '0.0.0';

module.exports = (config) => {
  config.output.filename = `[name].${appVersion}-[contenthash].js`;
  config.output.chunkFilename = `[name].${appVersion}-[contenthash].js`;
  return config;
};
