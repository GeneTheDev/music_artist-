// sanity.config.js

'use client'

import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemas' // Ensure this path is correct

const apiVersion = '2024-07-03' // Define the apiVersion

export default defineConfig({
  name: 'default',
  title: 'music_artist',

  projectId: 's776d4ag',
  dataset: 'production',

  basePath: '/studio',

  plugins: [
    structureTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
  ],

  schema: {
    types: schemaTypes,
  },
})
