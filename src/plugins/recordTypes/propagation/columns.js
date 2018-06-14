import { defineMessages } from 'react-intl';

export default () => ({
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
  },
});
