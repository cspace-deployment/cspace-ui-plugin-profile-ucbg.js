import { defineMessages } from 'react-intl';

export default () => ({
  default: {
    taxonRank: {
      messages: defineMessages({
        label: {
          id: 'column.taxon.default.taxonRank',
          defaultMessage: 'Rank',
        },
      }),
      order: 30,
      sortBy: 'taxon_common:taxonRank',
      width: 250,
    },
    termStatus: {
      disabled: true,
    },
  },
});
