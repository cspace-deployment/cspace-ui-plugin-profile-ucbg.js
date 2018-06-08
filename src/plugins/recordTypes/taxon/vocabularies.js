import { defineMessages } from 'react-intl';

export default {
  common: {
    serviceConfig: {
      servicePath: 'urn:cspace:name(common)',
    },
  },
  plantsales: {
    messages: defineMessages({
      name: {
        id: 'vocab.taxon.plantsales.name',
        description: 'The name of the plantsales taxon vocabulary.',
        defaultMessage: 'Plant Sale',
      },
      collectionName: {
        id: 'vocab.taxon.plantsales.collectionName',
        description: 'The name of a collection of records from the plantsales taxon vocabulary.',
        defaultMessage: 'Plant Sale Taxonomic Names',
      },
    }),
    serviceConfig: {
      servicePath: 'urn:cspace:name(plantsales)',
    },
  },
};
