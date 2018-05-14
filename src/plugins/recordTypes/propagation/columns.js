import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    formatTimestamp,
  } = configContext.formatHelpers;

  return {
    default: {
      propNumber: {
        messages: defineMessages({
          label: {
            id: 'column.propagation.default.propNumber',
            defaultMessage: 'Identification number',
          },
        }),
        order: 20,
        sortBy: 'propagations_common:propNumber',
        width: 200,
      },
      propType: {
        messages: defineMessages({
          label: {
            id: 'column.propagation.default.propType',
            defaultMessage: 'Summary',
          },
        }),
        order: 30,
        sortBy: 'propagations_common:propType',
        width: 150,
      },
      updatedAt: {
        formatValue: formatTimestamp,
        messages: defineMessages({
          label: {
            id: 'column.media.default.updatedAt',
            defaultMessage: 'Updated',
          },
        }),
        order: 40,
        sortBy: 'collectionspace_core:updatedAt',
        width: 150,
      },
    },
  };
};
