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
        accession: {
          id: 'panel.collectionobject.accession',
          defaultMessage: 'Accession Use Information',
        },
      }),
      ...extensions['ucbnh-collectionobject'].messages.panel,
    },
  };
};
