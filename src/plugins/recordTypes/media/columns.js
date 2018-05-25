import { defineMessages } from 'react-intl';

export default () => ({
  default: {
    scientificTaxonomy: {
      messages: defineMessages({
        label: {
          id: 'column.media.default.scientificTaxonomy',
          defaultMessage: 'Scientific name',
        },
      }),
      order: 30,
      sortBy: 'media_botgarden:scientificTaxonomy',
      width: 380,
    },
    title: {
      disabled: true,
    },
  },
});

