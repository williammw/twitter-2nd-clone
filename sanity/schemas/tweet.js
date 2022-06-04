export default {
  name: 'tweet',
  title: 'Tweet',
  type: 'document',
  fields: [
    {
      name: 'text',
      title: 'Text in Tweet',
      type: 'string',
    },
    // {
    //   name: 'slug',
    //   title: 'Slug',
    //   type: 'slug',
    //   options: {
    //     source: 'title',
    //     maxLength: 96,
    //   },
    // },
    {
      name: 'blockTweet',
      title: 'Block Tweet',
      description: 'ADMIN Controls: Toogle is Tweet is deemed inapproprirate',
      type: 'boolean',
    },
    {
      name: 'username',
      title: 'Username',
      type: 'string',
      // to: {type: 'author'},
    },
    {
      name: 'profileImg',
      title: 'Profile Image',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Tweet image',
      type: 'string',
      // to: {type: 'author'},
    },
  ],
  //   {
  //     name: 'mainImage',
  //     title: 'Main image',
  //     type: 'image',
  //     options: {
  //       hotspot: true,
  //     },
  //   },
  //   {
  //     name: 'categories',
  //     title: 'Categories',
  //     type: 'array',
  //     of: [{type: 'reference', to: {type: 'category'}}],
  //   },
  //   {
  //     name: 'publishedAt',
  //     title: 'Published at',
  //     type: 'datetime',
  //   },
  //   {
  //     name: 'body',
  //     title: 'Body',
  //     type: 'blockContent',
  //   },
  // ],

  // preview: {
  //   select: {
  //     title: 'title',
  //     author: 'author.name',
  //     media: 'mainImage',
  //   },
  //   prepare(selection) {
  //     const {author} = selection
  //     return Object.assign({}, selection, {
  //       subtitle: author && `by ${author}`,
  //     })
  //   },
  // },
}
