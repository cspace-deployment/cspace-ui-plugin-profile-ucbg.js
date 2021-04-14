import fields from './fields';
import forms from './forms';

export default () => configContext => ({
  invocables: {
    report: {
      ucbgUOCbyApprovalStatus: {
        fields: fields(configContext),
        forms: forms(configContext),
      },
    },
  },
});
