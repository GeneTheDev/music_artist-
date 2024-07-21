// schemas/heroSchema.js

const heroSchema = {
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // Enables image cropping
      },
    },
    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'string', // Add this line
    },
  ],
}

export default heroSchema;
