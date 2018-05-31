import fields from './fields';
import idGenerators from './idGenerators';
import title from './title';
import forms from './forms';
import optionLists from './optionLists';

export default () => configContext => ({
  idGenerators,
  optionLists,
  recordTypes: {
    loanout: {
      fields: fields(configContext),
      forms: forms(configContext),
      title: title(configContext),
    },
  },
});
