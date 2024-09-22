import withTM from 'next-transpile-modules';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES6
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Transpile MUI modules
const transpileModules = withTM(['@mui/material', '@mui/system', '@mui/icons-material', 'framer-motion']);

// Define the Next.js config
const nextConfig = {
  webpack: (config, { defaultLoaders }) => {
    config.resolve.alias['@components'] = path.resolve(__dirname, './packages/components');


    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      include: [path.resolve(__dirname, './packages/components')],
      use: [defaultLoaders.babel],
    });

    return config;
  },
};

// Export the transpileModules-wrapped configuration
export default transpileModules(nextConfig);
