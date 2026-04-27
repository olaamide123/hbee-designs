export default {
  name: 'portfolioItem',
  title: 'Portfolio Item',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Party Flyers', value: 'flyers' },
          { title: 'Print Design', value: 'print' },
          { title: 'Brand Design', value: 'brand' }
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'images',
      title: 'Images',
      description: 'Add multiple images for a grouped card (e.g. a product suite)',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: Rule => Rule.required().min(1)
    },
    {
      name: 'label',
      title: 'Label (e.g. PINK · FLYER)',
      type: 'string'
    },
    {
      name: 'year',
      title: 'Year',
      type: 'string'
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first'
    },
    {
      name: 'featured',
      title: 'Show in first 8',
      type: 'boolean',
      initialValue: true
    }
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }]
    }
  ],
  preview: {
    select: { title: 'title', category: 'category', media: 'images.0' },
    prepare({ title, category, media }) {
      return { title, subtitle: category, media }
    }
  }
}
