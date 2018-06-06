import { defineMessages } from 'react-intl';

export default {
  plantsales: {
    messages: defineMessages({
      name: {
        id: 'vocab.taxon.plantsales.name',
        description: 'The name of the common taxon vocabulary.',
        defaultMessage: 'Plant Sale Taxonomy Authority',
      },
      collectionName: {
        id: 'vocab.taxon.plantsales.collectionName',
        description: 'The name of a collection of records from the common taxon vocabulary.',
        defaultMessage: 'Plant Sale Taxonomy Authorities',
      },
    }),
    serviceConfig: {
      servicePath: 'urn:cspace:name(plantsales)',
    },
  },
};
