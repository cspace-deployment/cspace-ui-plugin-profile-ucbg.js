import advancedSearch from './advancedSearch';
import columns from './columns';
import fields from './fields';
import forms from './forms';
import idGenerators from './idGenerators';
import messages from './messages';
import title from './title';
import optionLists from './optionLists';

export default () => configContext => ({
  idGenerators,
  optionLists,
  recordTypes: {
    loanout: {
      advancedSearch: advancedSearch(configContext),
      columns: columns(configContext),
      fields: fields(configContext),
      forms: forms(configContext),
      messages,
      title: title(configContext),
    },
  },
});
