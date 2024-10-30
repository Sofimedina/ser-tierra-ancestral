import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { static as ghPages } from 'vite-plugin-static';


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), ghPages()],
  base: '/ser-tierra-ancestral/',
})
