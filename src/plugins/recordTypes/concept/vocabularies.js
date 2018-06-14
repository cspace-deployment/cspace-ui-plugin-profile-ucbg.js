import { defineMessages } from 'react-intl';

export default {
  class: {
    messages: defineMessages({
      name: {
        id: 'vocab.concept.class.name',
        description: 'The name of the vocabulary.',
        defaultMessage: 'Class',
      },
      collectionName: {
        id: 'vocab.concept.class.collectionName',
        description: 'The name of a collection of records from the vocabulary.',
        defaultMessage: 'Classes',
      },
    }),
    serviceConfig: {
      servicePath: 'urn:cspace:name(class_ca)',
    },
  },
  conservation: {
    messages: defineMessages({
      name: {
        id: 'vocab.concept.conservation.name',
        description: 'The name of the vocabulary.',
        defaultMessage: 'Conservation Category',
      },
      collectionName: {
        id: 'vocab.concept.conservation.collectionName',
        description: 'The name of a collection of records from the vocabulary.',
        defaultMessage: 'Conservation Categories',
      },
    }),
    serviceConfig: {
      servicePath: 'urn:cspace:name(conservation_ca)',
    },
  },
  research: {
    messages: defineMessages({
      name: {
        id: 'vocab.concept.research.name',
        description: 'The name of the vocabulary.',
        defaultMessage: 'Research Project',
      },
      collectionName: {
        id: 'vocab.concept.research.collectionName',
        description: 'The name of a collection of records from the vocabulary.',
        defaultMessage: 'Research Projects',
      },
    }),
    serviceConfig: {
      servicePath: 'urn:cspace:name(research_ca)',
    },
  },
  activity: {
    disabled: true,
  },
  material: {
    disabled: true,
  },
};
