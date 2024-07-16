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
        type: 'string',
      },
      {
        name: 'subtitle2',
        title: 'Subtitle2',
        type: 'string',
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