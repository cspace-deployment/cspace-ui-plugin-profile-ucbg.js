import { defineMessages } from 'react-intl';

export default {
  record: defineMessages({
    name: {
      id: 'record.propagation.name',
      description: 'The name of the record type.',
      defaultMessage: 'Propagation',
    },
    collectionName: {
      id: 'record.propagation.collectionName',
      description: 'The name of a collection of records of the type.',
      defaultMessage: 'Propagations',
    },
  }),
  panel: defineMessages({
    propagation: {
      id: 'panel.propagation.propagationInformation',
      defaultMessage: 'Propagation Information',
    },
  }),
  inputTable: defineMessages({
    livingPlantMaterial: {
      id: 'inputTable.propagation.livingPlantMaterial',
      defaultMessage: 'Living Plant Material',
    },
    cuttings: {
      id: 'inputTable.propagation.cuttings',
      defaultMessage: 'Cuttings',
    },
  }),
};
