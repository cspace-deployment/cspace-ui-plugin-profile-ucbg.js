import advancedSearch from './advancedSearch';
import columns from './columns';
import fields from './fields';
import forms from './forms';
import optionLists from './optionLists';
import vocabularies from './vocabularies';

export default () => (configContext) => ({
  optionLists,
  recordTypes: {
    taxon: {
      vocabularies,
      advancedSearch: advancedSearch(configContext),
      fields: fields(configContext),
      forms: forms(configContext),
      columns: columns(configContext),
      // If a child taxon is added or removed, an event listener may cause the access code to be
      // updated. The payload returned by the services layer reflects the saved taxon before
      // listeners triggered by added/removed hierarchy relations have run, so these changes to the
      // access code do not appear. To work around this, refetch the taxon record after update.
      refetchAfterUpdate: true,
    },
  },
});
