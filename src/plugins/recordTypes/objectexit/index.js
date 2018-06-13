import advancedSearch from './advancedSearch';
import columns from './columns';
import forms from './forms';
import fields from './fields';

export default () => configContext => ({
  recordTypes: {
    objectexit: {
      fields: fields(configContext),
      advancedSearch: advancedSearch(configContext),
      columns: columns(configContext),
      forms: forms(configContext),
    },
  },
});
