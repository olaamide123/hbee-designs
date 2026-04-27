export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'navCta',
      title: 'Nav CTA Button Text',
      type: 'string',
      initialValue: 'Book a design',
    },
    {
      name: 'footerCopyright',
      title: 'Footer Copyright Line',
      type: 'string',
      initialValue: '© 2026 HBEE Designs',
    },
    {
      name: 'footerLocation',
      title: 'Footer Location',
      type: 'string',
      initialValue: 'Lagos, NG',
    },
    {
      name: 'email',
      title: 'Email Address',
      type: 'string',
    },
    {
      name: 'instagramHandle',
      title: 'Instagram Handle (without @)',
      type: 'string',
    },
    {
      name: 'instagramUrl',
      title: 'Instagram URL',
      type: 'url',
    },
    {
      name: 'linkedinName',
      title: 'LinkedIn Display Name',
      type: 'string',
    },
    {
      name: 'linkedinUrl',
      title: 'LinkedIn URL',
      type: 'url',
    },
    {
      name: 'twitterHandle',
      title: 'Twitter / X Handle',
      type: 'string',
    },
    {
      name: 'twitterUrl',
      title: 'Twitter / X URL',
      type: 'url',
    },
  ],
  preview: { prepare: () => ({ title: 'Site Settings' }) },
}
