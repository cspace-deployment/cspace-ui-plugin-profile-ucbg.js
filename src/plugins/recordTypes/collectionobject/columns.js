import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    formatRefName
  } = configContext.formatHelpers;

  return {
    default: {
      objectNumber: {
        messages: defineMessages({
          label: {
            id: 'column.collectionobject.default.objectNumber',
            defaultMessage: 'Identification number',
          },
        }),
        order: 10,
        sortBy: 'collectionobjects_common:objectNumber',
        width: 200,
      },
      title: {
        disabled: true,
        messages: defineMessages({
          label: {
            id: 'column.collectionobject.default.title',
            defaultMessage: 'Title',
          },
        }),
        order: 20,
        sortBy: 'collectionobjects_common:titleGroupList/0/title',
        width: 450,
      },
      taxon: {
        formatValue: formatRefName,
        messages: defineMessages({
          label: {
            id: 'column.collectionobject.default.taxon',
            defaultMessage: 'Taxon',
          },
        }),
        order: 20,
        sortBy: 'collectionobjects_naturalhistory:taxonomicIdentGroupList/0/taxon',
        width: 450,
      },
//       taxonomicIdentGroupList
// taxonomicIdentGroup
// taxon

    },
    narrow: {
      objectNumber: {
        messages: defineMessages({
          label: {
            id: 'column.collectionobject.narrow.objectNumber',
            defaultMessage: 'ID',
          },
        }),
        order: 10,
        sortBy: 'collectionobjects_common:objectNumber',
        width: 200,
      },
      title: {
        messages: defineMessages({
          label: {
            id: 'column.collectionobject.narrow.title',
            defaultMessage: 'Title',
          },
        }),
        order: 20,
        width: 450,
      },
    },
  };
};
