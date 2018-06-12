import { defineMessages } from 'react-intl';

export default {
  collectors: {
    messages: defineMessages({
      name: {
        id: 'vocab.organization.collectors.name',
        description: 'The name of the vocabulary.',
        defaultMessage: 'Collector',
      },
      collectionName: {
        id: 'vocab.organization.collectors.fullName',
        description: 'The name of a collection of records from the vocabulary.',
        defaultMessage: 'Collectors',
      },
    }),
    serviceConfig: {
      servicePath: 'urn:cspace:name(collectors)',
    },
  },
  group: {
    messages: defineMessages({
      name: {
        id: 'vocab.organization.group.name',
        description: 'The name of the vocabulary.',
        defaultMessage: 'Author',
      },
      collectionName: {
        id: 'vocab.organization.group.fullName',
        description: 'The name of a collection of records from the vocabulary.',
        defaultMessage: 'Authors',
      },
    }),
    serviceConfig: {
      servicePath: 'urn:cspace:name(group_org)',
    },
  },
  ulan: {
    disabled: true,
  },
};
