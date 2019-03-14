import advancedSearch from './advancedSearch';
import fields from './fields';
import forms from './forms';

export default () => configContext => ({
  recordTypes: {
    intake: {
      fields: fields(configContext),
      forms: forms(configContext),
      advancedSearch: advancedSearch(configContext),
    },
  },
});
