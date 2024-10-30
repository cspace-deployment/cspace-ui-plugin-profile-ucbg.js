import fields from './fields';
import forms from './forms';

export default () => (configContext) => ({
  invocables: {
    report: {
      ucbgAccessionsByBedDate: {
        fields: fields(configContext),
        forms: forms(configContext),
      },
    },
  },
});
