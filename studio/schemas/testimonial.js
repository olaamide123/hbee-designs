export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'clientRole',
      title: 'Role (e.g. Promoter)',
      type: 'string'
    },
    {
      name: 'clientCompany',
      title: 'Company / Event',
      type: 'string'
    },
    {
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required()
    },
    {
      name: 'colorTheme',
      title: 'Card Colour',
      type: 'string',
      options: {
        list: [
          { title: 'Pink', value: 'tst-pink' },
          { title: 'Blue', value: 'tst-blue' },
          { title: 'Yellow', value: 'tst-yellow' }
        ]
      },
      initialValue: 'tst-pink'
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number'
    }
  ],
  preview: {
    select: { title: 'clientName', subtitle: 'clientCompany' }
  }
}
