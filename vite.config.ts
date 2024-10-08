import { defineConfig } from 'vite'
import aliases from './importAlias.ts';
import preact from '@preact/preset-vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  resolve: {
    alias: {
    '@': './src',
    '@config': './src/config',
    '@interface': './src/interface',
    '@lib': './src/lib',
    '@style': './src/style',
    '@types': './src/types',
    '@utils': './src/utils',
    '@app': './src/app',
    '@state': './src/app/state',
    '@comp': './src/app/components',
    '@ui': './src/app/ui'
    }
  }
// 
})
