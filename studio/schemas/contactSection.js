export default {
  name: 'contactSection',
  title: 'Contact Section',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'headlineLine1',
      title: 'Headline — Line 1',
      type: 'string',
      initialValue: 'NEED A flyer OR',
    },
    {
      name: 'headlineLine2',
      title: 'Headline — Line 2',
      type: 'string',
      initialValue: 'PRINT DESIGN THAT',
    },
    {
      name: 'headlineLine3',
      title: 'Headline — Line 3 (blue)',
      type: 'string',
      initialValue: 'STANDS OUT?',
    },
    {
      name: 'subtext',
      title: 'Sub Text',
      type: 'text',
      rows: 2,
      initialValue: 'Send your brief and let\'s create something bold, clean and ready to use. Every project starts with a conversation.',
    },
  ],
  preview: { prepare: () => ({ title: 'Contact Section' }) },
}
