export default {
  name: 'aboutSection',
  title: 'About Section',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'headlineLine1',
      title: 'Headline — Line 1 (e.g. "MEET Habeeb")',
      type: 'string',
      initialValue: 'MEET Habeeb',
    },
    {
      name: 'headlineLine2',
      title: 'Headline — Line 2 (outlined text)',
      type: 'string',
      initialValue: 'DESIGNER &',
    },
    {
      name: 'headlineLine3',
      title: 'Headline — Line 3 (pink text)',
      type: 'string',
      initialValue: 'FLYER MAKER.',
    },
    {
      name: 'bio',
      title: 'Bio Paragraph',
      type: 'text',
      rows: 5,
      initialValue: 'Habeeb is a graphic designer creating bold, colorful, professional visuals for events, businesses and personal brands. From party flyers and posters to print materials and promotional designs, his work helps people communicate clearly, attract attention and leave a strong impression.',
    },
    {
      name: 'portraitTag',
      title: 'Portrait Tag (below photo)',
      type: 'string',
      initialValue: '★ THE DESIGNER ★',
    },
  ],
  preview: { prepare: () => ({ title: 'About Section' }) },
}
