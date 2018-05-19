import { defineMessages } from 'react-intl';

export default () => ({
  default: {
    movementReferenceNumber: {
      disabled: true,
    },
    currentLocation: {
      order: 20,
    },
    // Not showing up
    reasonForMove: {
      messages: defineMessages({
        label: {
          id: 'column.movement.default.reasonForMove',
          defaultMessage: 'Action code',
        },
      }),
      order: 30,
      sortBy: 'movements_common:reasonForMove',
      width: 380,
    },
  },
});
