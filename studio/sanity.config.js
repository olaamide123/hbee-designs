import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'hbee-designs',
  title: 'HBEE Designs',
  projectId: 'o7fduvas',
  dataset: 'production',
  plugins: [structureTool(), visionTool()],
  schema: { types: schemaTypes }
})
