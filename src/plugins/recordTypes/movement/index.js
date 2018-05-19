import fields from './fields';
import forms from './forms';

export default () => configContext => ({
  recordTypes: {
    movement: {
      forms: forms(configContext),
      fields: fields(configContext),
    },
  },
});
