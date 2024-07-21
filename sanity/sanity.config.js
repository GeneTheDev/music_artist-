// sanity.config.js

'use client'

import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

// Assuming you have a structure definition in 'structure.js'
// import myCustomStructure from './structure'

export default defineConfig({
  name: 'default',
  title: 'music_artist',

  projectId: 's776d4ag',
  dataset: 'production',

  basePath: '/studio',

  plugins: [
    deskTool(), // Use deskTool without structureTool
    visionTool({defaultApiVersion: '2021-03-25'}),
  ],

  schema: {
    types: schemaTypes,
  },

  // If you have a custom structure, use it here
  // structure: myCustomStructure,
})
