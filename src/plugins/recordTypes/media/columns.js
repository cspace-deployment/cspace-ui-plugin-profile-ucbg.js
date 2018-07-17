import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    formatRefName,
  } = configContext.formatHelpers;

  return {
    default: {
      scientificTaxonomy: {
        formatValue: formatRefName,
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
      imageNumber: {
        // This column is used only for sorting related media snapshots.
        // It is disabled so it doesn't appear in search result tables.
        disabled: true,
        sortBy: 'media_botgarden:imageNumber',
      },
      title: {
        disabled: true,
      },
    },
  };
};
