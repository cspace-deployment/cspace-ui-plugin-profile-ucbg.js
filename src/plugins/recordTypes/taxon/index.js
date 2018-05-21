import fields from './fields';
import forms from './forms';
import optionLists from './optionLists';

export default () => configContext => ({
  optionLists,
  recordTypes: {
    taxon: {
      fields: fields(configContext),
      forms: forms(configContext),
    },
  },
});
