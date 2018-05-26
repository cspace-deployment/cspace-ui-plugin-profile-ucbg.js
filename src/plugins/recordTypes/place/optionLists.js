import { defineMessages } from 'react-intl';

export default {
  ucbgPlaceTermTypes: {
    values: [
      'Synonym',
      'Verified Geographic Name',
      'Reverse Qualified Name',
      'Short Name',
      'Unverified Geographic Name',
    ],
    messages: defineMessages({
      Synonym: {
        id: 'option.ucbgPlaceTermTypes.Synonym',
        defaultMessage: 'synonym',
      },
      'Verified Geographic Name': {
        id: 'option.ucbgPlaceTermTypes.Verified Geographic Name',
        defaultMessage: 'verified geographic name',
      },
      'Reverse Qualified Name': {
        id: 'option.ucbgPlaceTermTypes.Reverse Qualified Name',
        defaultMessage: 'reverse qualified name',
      },
      'Short Name': {
        id: 'option.ucbgPlaceTermTypes.Short Name',
        defaultMessage: 'short name',
      },
      'Unverified Geographic Name': {
        id: 'option.ucbgPlaceTermTypes.Unverified Geographic Name',
        defaultMessage: 'unverified geographic name',
      },
    }),
  },
  ucbgPlaceHistoricalStatuses: {
    values: [
      'current',
      'historical',
      'both',
      'unknown',
    ],
  },
};
