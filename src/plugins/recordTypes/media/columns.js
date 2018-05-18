import { defineMessages } from 'react-intl';

export default () => ({
  default: {
    blobCsid: {
      disabled: true,
    },
    scientificTaxonomy: {
      messages: defineMessages({
        label: {
          id: 'column.media.default.title',
          defaultMessage: 'Scientific name',
        },
      }),
      order: 30,
      sortBy: 'media_botgarden:scientificTaxonomy',
      width: 200,
    },
    title: {
      disabled: true,
    },
  },
});

