import {createClient }from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// Initialize the sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-07-03", // use a future date to always get the latest version
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

// Initialize the URL builder with the sanity client
const builder = imageUrlBuilder(client);

// Function to generate URLs for images
export const urlFor = (source) => builder.image(source);

// Export the initialized sanity client
export { client as sanityClient };
