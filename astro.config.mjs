import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  site: 'https://kuleuven-cosic.github.io',
  base: '/sok-ppml-mpc-frameworks',
  integrations: [tailwind()],
  output: 'static',
})
