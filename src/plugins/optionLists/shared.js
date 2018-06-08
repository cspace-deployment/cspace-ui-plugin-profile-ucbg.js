import { defineMessages } from 'react-intl';

export default () => ({
  optionLists: {
    // Used by loanout and movement.
    labelRequestedValues: {
      values: [
        'No',
        'Yes',
      ],
      messages: defineMessages({
        Yes: {
          id: 'option.labelRequestedValues.Yes',
          defaultMessage: 'yes',
        },
        No: {
          id: 'option.labelRequestedValues.No',
          defaultMessage: 'no',
        },
      }),
    },
    trivalentValues: {
      values: [
        'Unknown',
        'no',
        'yes',
      ],
      messages: defineMessages({
        Unknown: {
          id: 'option.trivalentValues.Unknown',
          defaultMessage: 'unknown',
        },
        yes: {
          id: 'option.trivalentValues.yes',
          defaultMessage: 'yes',
        },
        no: {
          id: 'option.trivalentValues.no',
          defaultMessage: 'no',
        },
      }),
    },
  },
});
