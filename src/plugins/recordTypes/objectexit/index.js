import advancedSearch from './advancedSearch';
import columns from './columns';
import forms from './forms';

export default () => configContext => ({
  recordTypes: {
    objectexit: {
      advancedSearch: advancedSearch(configContext),
      columns: columns(configContext),
      forms: forms(configContext),
    },
  },
});
