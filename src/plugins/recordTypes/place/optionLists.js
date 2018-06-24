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
  ucbgPlaceTypes: {
    values: [
      'archipelago',
      'autonomous-region',
      'city',
      'county',
      'dept',
      'district',
      'island',
      'islands',
      'mountain',
      'municipio',
      'national-park',
      'ocean',
      'parish',
      'peninsula',
      'prefecture',
      'province',
      'region',
      'special-administrative-region',
      'state',
      'territory',
      'nation',
    ],
    messages: {
      'autonomous-region': {
        id: 'option.ucbgPlaceTypes.autonomous-region',
        defaultMessage: 'autonomous region',
      },
      dept: {
        id: 'option.ucbgPlaceTypes.dept',
        defaultMessage: 'dept.',
      },
      'national-park': {
        id: 'option.ucbgPlaceTypes.national-park',
        defaultMessage: 'national park',
      },
      'special-administrative-region': {
        id: 'option.ucbgPlaceTypes.special-administrative-region',
        defaultMessage: 'special administrative region',
      },
    },
  },
};
