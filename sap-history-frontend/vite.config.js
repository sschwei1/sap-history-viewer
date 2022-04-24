import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import antDarkTheme from '@ant-design/dark-theme';
const darkTheme = {
  ...antDarkTheme,
  'primary-color': '#58bf69'
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: darkTheme,
        javascriptEnabled: true
      }
    }
  }
})
