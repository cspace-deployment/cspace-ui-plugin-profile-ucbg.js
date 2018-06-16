import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    formatRefName,
  } = configContext.formatHelpers;

  return {
    default: {
      title: {
        disabled: true,
      },
      taxon: {
        formatValue: formatRefName,
        messages: defineMessages({
          label: {
            id: 'column.collectionobject.default.taxon',
            defaultMessage: 'Taxon scientific name',
          },
        }),
        order: 20,
        sortBy: 'collectionobjects_naturalhistory:taxonomicIdentGroupList/0/taxon',
        width: 450,
      },
    },
    narrow: {
      title: {
        disabled: true,
      },
      taxon: {
        formatValue: formatRefName,
        messages: defineMessages({
          label: {
            id: 'column.collectionobject.narrow.taxon',
            defaultMessage: 'Scientific name',
          },
        }),
        order: 20,
        sortBy: 'collectionobjects_naturalhistory:taxonomicIdentGroupList/0/taxon',
        width: 450,
      },
    },
  };
};
