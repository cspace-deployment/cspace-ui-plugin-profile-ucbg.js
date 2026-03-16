import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    extensions,
  } = configContext.config;

  return {
    inputTable: extensions['ucbnh-collectionobject'].messages.inputTable,
    panel: {
      ...defineMessages({
        locality: {
          id: 'panel.collectionobject.locality',
          defaultMessage: 'Locality Information',
        },
        accessionuse: {
          id: 'panel.collectionobject.accessionuse',
          defaultMessage: 'Accession Use Information',
        },
        accessionAttributes: {
          id: 'panel.collectionobject.accessionAttributes',
          defaultMessage: 'Accession Attributes',
        },
        phenologicalObservations: {
          id: 'panel.collectionobject.phenologicalObservations',
          defaultMessage: 'Phenological Observations',
        },
      }),
      ...extensions['ucbnh-collectionobject'].messages.panel,
    },
  };
};
