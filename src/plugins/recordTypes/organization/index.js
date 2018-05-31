import fields from './fields';
import forms from './forms';
import vocabularies from './vocabularies';

export default () => configContext => ({
  recordTypes: {
    organization: {
      fields: fields(configContext),
      forms: forms(configContext),
      vocabularies,
    },
  },
});
