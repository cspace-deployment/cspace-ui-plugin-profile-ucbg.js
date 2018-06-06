// // import advancedSearch from './advancedSearch';
// // import columns from './columns';
import fields from './fields';
import forms from './forms';
import messages from './messages';
// import optionLists from './optionLists';
// import title from './title';

export default () => configContext => ({
  // optionLists,
  recordTypes: {
    collectionobject: {
      messages,
      // advancedSearch: advancedSearch(configContext),
      // columns: columns(configContext),
      // defaultForSearch: true, // Is this the default in search dropdowns?
      fields: fields(configContext),
      forms: forms(configContext),
      // // title: title(configContext),
    },
  },
});
