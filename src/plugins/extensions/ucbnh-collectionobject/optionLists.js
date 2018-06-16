import { defineMessages } from 'react-intl';

export default {
  ucbgTaxonIdentKinds: {
    values: [
      'determination',
      'received as',
      'synonym',
      'valid term',
      'correction',
      'verification',
      'hybrid',
    ],
  },
  ucbgProvenanceTypes: {
    values: [
      'W-wild source',
      'Z-cultivated from wild source',
      'G-not wild source',
      'U-unknown',
    ],
    messages: defineMessages({
      'W-wild source': {
        id: 'option.ucbgProvenanceTypes.W-wild source',
        defaultMessage: 'w-wild source',
      },
      'Z-cultivated from wild source': {
        id: 'option.ucbgProvenanceTypes.Z-cultivated from wild source',
        defaultMessage: 'z-cultivated from wild source',
      },
      'G-not wild source': {
        id: 'option.ucbgProvenanceTypes.G-not wild source',
        defaultMessage: 'g-not wild source',
      },
      'U-unknown': {
        id: 'option.ucbgProvenanceTypes.U-unknown',
        defaultMessage: 'u-unknown',
      },
    }),
  },
};
