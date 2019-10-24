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
      objectNumber: {
        width: 150,
      },
      taxon: {
        formatValue: formatRefName,
        messages: defineMessages({
          label: {
            id: 'column.collectionobject.default.taxon',
            defaultMessage: 'Taxonomic name',
          },
        }),
        order: 20,
        sortBy: 'collectionobjects_naturalhistory:taxonomicIdentGroupList/0/taxon',
        width: 250,
      },
      taxonomicIdentHybridName: {
        messages: defineMessages({
          label: {
            id: 'column.collectionobject.default.taxonomicIdentHybridName',
            defaultMessage: 'Hybrid name',
          },
        }),
        order: 25,
        sortBy: 'collectionobjects_naturalhistory:taxonomicIdentGroupList/0/taxonomicIdentHybridName',
        width: 350,
      },
    },
    narrow: {
      title: {
        disabled: true,
      },
      objectNumber: {
        width: 150,
      },
      taxon: {
        formatValue: formatRefName,
        messages: defineMessages({
          label: {
            id: 'column.collectionobject.narrow.taxon',
            defaultMessage: 'Taxon name',
          },
        }),
        order: 20,
        sortBy: 'collectionobjects_naturalhistory:taxonomicIdentGroupList/0/taxon',
        width: 250,
      },
        taxonomicIdentHybridName: {
          messages: defineMessages({
            label: {
              id: 'column.collectionobject.default.taxonomicIdentHybridName',
              defaultMessage: 'Hybrid name',
            },
          }),
          order: 25,
          sortBy: 'collectionobjects_naturalhistory:taxonomicIdentGroupList/0/taxonomicIdentHybridName',
          with: 350,
        },
    },
  };
};
