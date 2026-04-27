export default {
  name: 'selectedJob',
  title: 'Selected Job',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'caseNumber',
      title: 'Case Number (e.g. CASE 01)',
      type: 'string'
    },
    {
      name: 'category',
      title: 'Category (e.g. Brand Design)',
      type: 'string'
    },
    {
      name: 'type',
      title: 'Type (e.g. Brand Campaign · Artwork Design)',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required()
    },
    {
      name: 'goal',
      title: 'Goal',
      type: 'text',
      rows: 3
    },
    {
      name: 'outcome',
      title: 'Outcome',
      type: 'text',
      rows: 3
    },
    {
      name: 'colorTheme',
      title: 'Card Colour',
      type: 'string',
      options: {
        list: [
          { title: 'Pink', value: 'case-pink' },
          { title: 'Blue', value: 'case-blue' },
          { title: 'Yellow', value: 'case-yellow' }
        ]
      }
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number'
    }
  ],
  preview: {
    select: { title: 'title', subtitle: 'category', media: 'image' }
  }
}
