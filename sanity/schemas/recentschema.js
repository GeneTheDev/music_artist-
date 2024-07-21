const recentSchema = {
  name: 'recent',
  title: 'Recent',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
    },
    {
      name: 'subtitle2',
      title: 'Subtitle2',
      type: 'text',
    },
    {
      name: 'subtitle3',
      title: 'Subtitle3',
      type: 'text',
    },
    {
      name: 'buttonText',
      title: 'ButtonText',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}

export default recentSchema
