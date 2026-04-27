export default {
  name: 'processSection',
  title: 'Process Section',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      initialValue: 'FROM BRIEF to PRINT.',
    },
    {
      name: 'steps',
      title: 'Process Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Step Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'string' },
          ],
          preview: { select: { title: 'title', subtitle: 'description' } },
        },
      ],
    },
  ],
  preview: { prepare: () => ({ title: 'Process Section' }) },
}
