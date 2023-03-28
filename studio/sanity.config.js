import { defineConfig } from "sanity"
import {deskTool} from "sanity/desk"
import {visionTool} from "@sanity/vision"
import schemas from "./schemas/schema"

export default defineConfig({
    name: 'lmportal',
    title: 'Ludicrumedia Portal',
    projectId: 'h3o7n51z',
    dataset: 'production',
    plugins: [
      deskTool(),
      visionTool()
    ],
    schema: {
      types: schemas,
    },
  })

