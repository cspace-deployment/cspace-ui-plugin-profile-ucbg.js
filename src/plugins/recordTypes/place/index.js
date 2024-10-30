import fields from './fields';
import vocabularies from './vocabularies';
import optionLists from './optionLists';

export default () => (configContext) => ({
  optionLists,
  recordTypes: {
    place: {
      fields: fields(configContext),
      vocabularies,
    },
  },
});
