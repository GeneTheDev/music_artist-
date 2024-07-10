import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION
const useCdn = process.env.NEXT_PUBLIC_SANITY_USE_CDN === 'true'

export const client = sanityClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  perspective: 'published',
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)
