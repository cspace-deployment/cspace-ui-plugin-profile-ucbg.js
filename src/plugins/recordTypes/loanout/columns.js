import { defineMessages } from 'react-intl';

export default () => ({
  default: {
    loanOutNumber: {
      disabled: true,
    },
    borrower: {
      order: 10,
      sortBy: 'loansout_common:borrower',
      width: 250,
    },
    loanPurpose: {
      messages: defineMessages({
        label: {
          id: 'column.loansout.default.loanPurpose',
          defaultMessage: 'Loan purpose',
        },
      }),
      order: 20,
      sortBy: 'loansout_common:loanPurpose',
      width: 400,
    },
  },
});

