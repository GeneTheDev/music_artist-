// schemas/video.js
export default {
  name: 'video',
  type: 'document',
  title: 'Video',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'youtubeUrl',
      type: 'url',
      title: 'YouTube URL',
    },
  ],
}
