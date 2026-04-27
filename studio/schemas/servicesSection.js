export default {
  name: 'servicesSection',
  title: 'Services Section',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      initialValue: 'WHAT I MAKE.',
    },
    {
      name: 'services',
      title: 'Service Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Service Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'string' },
            { name: 'colorTheme', title: 'Card Colour', type: 'string', options: { list: [{ title: 'Pink', value: 'srv-pink' }, { title: 'Blue', value: 'srv-blue' }, { title: 'Yellow', value: 'srv-yellow' }, { title: 'Cream', value: 'srv-cream' }] } },
          ],
          preview: { select: { title: 'title', subtitle: 'description' } },
        },
      ],
    },
  ],
  preview: { prepare: () => ({ title: 'Services Section' }) },
}
