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
        yes: {
          id: 'option.trivalentValues.yes',
          defaultMessage: 'Yes',
        },
        no: {
          id: 'option.trivalentValues.no',
          defaultMessage: 'No',
        },
      }),
    },
  },
});
