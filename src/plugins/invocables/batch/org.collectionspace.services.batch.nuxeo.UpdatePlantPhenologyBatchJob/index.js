import fields from './fields';
import forms from './forms';

export default () => configContext => ({
  invocables: {
    batch: {
      'org.collectionspace.services.batch.nuxeo.UpdatePlantPhenologyBatchJob': {
        fields: fields(configContext),
        forms: forms(configContext),
      },
    },
  },
});
