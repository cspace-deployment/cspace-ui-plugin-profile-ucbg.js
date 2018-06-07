import advancedSearch from './advancedSearch';
import columns from './columns';
import fields from './fields';
import forms from './forms';
import optionLists from './optionLists';

export default () => configContext => ({
  optionLists,
  recordTypes: {
    movement: {
      advancedSearch: advancedSearch(configContext),
      columns: columns(configContext),
      forms: forms(configContext),
      fields: fields(configContext),
    },
  },
});
