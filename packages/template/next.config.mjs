import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES6
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  transpilePackages: ['@mui/material', '@mui/system', '@mui/icons-material', 'framer-motion', 'packages/components'],
  webpack: (config, { defaultLoaders }) => {
    config.resolve.alias['@components'] = path.resolve(__dirname, '../../packages/components');
    
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      include: [
        path.resolve(__dirname, '../../packages/components'),
        /node_modules[\\/]@mui[\\/].*/,
        /node_modules[\\/]framer-motion/,
      ],
      use: [defaultLoaders.babel],
    });

    // Ensure the resolver can find packages in the root node_modules
    config.resolve.modules = [
      path.resolve(__dirname, '../../node_modules'),
      ...config.resolve.modules,
    ];

    return config;
  },
};

export default nextConfig;
