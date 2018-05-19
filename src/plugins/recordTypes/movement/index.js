import advancedSearch from './advancedSearch';
import fields from './fields';
import forms from './forms';

export default () => configContext => ({
  recordTypes: {
    movement: {
      advancedSearch: advancedSearch(configContext),
      forms: forms(configContext),
      fields: fields(configContext),
    },
  },
});
