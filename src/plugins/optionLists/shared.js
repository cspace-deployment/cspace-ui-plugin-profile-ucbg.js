import { defineMessages } from 'react-intl';

export default () => ({
  optionLists: {
    trivalentValues: {
      values: [
        'Unknown',
        'yes',
        'no',
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
