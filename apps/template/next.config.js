const path = require('path');

module.exports = {
  // Other Next.js configurations...
  webpack: (config) => {
    // Extend module resolution paths
    config.resolve.modules = [
      path.resolve(__dirname, 'node_modules'),
      path.resolve(__dirname, '../../node_modules'),
      'node_modules',
    ];

    return config;
  },
  transpilePackages: ['@website-builder-tool/components'],
};
