const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['res.cloudinary.com', 'media.dev.to'],
  },
  webpack(config, { dev }) {
    if (!dev) {
      config.devtool = 'source-map';
    }
    return config;
  },
};
