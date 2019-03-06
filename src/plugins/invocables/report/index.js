import ucbgDeadReportRange from './ucbgDeadReportRange';
import ucbgDiedInLocation from './ucbgDiedInLocation';
import ucbgRareStatusFamily from './ucbgRareStatusFamily';
import ucbgRareStatusGenus from './ucbgRareStatusGenus';
import ucbgVoucherFamily from './ucbgVoucherFamily';
import ucbgVoucherGenus from './ucbgVoucherGenus';
// import ucbgAccessionCount from './ucbgAccessionCount';
// import ucbgListofLivingAccessions from './ucbgListofLivingAccessions';
// import ucbgTaxonCount from './ucbgTaxonCount';
// import ucbgVoucherLabel from './ucbgVoucherLabel';

export default [
  ucbgDeadReportRange,
  ucbgDiedInLocation,
  ucbgRareStatusFamily,
  ucbgRareStatusGenus,
  ucbgVoucherFamily,
  ucbgVoucherGenus,
  // ucbgAccessionCount, // No parameters, no doctype. Works if put it in the collectionobjects tab
  // ucbgListofLivingAccessions, // No parameters, but no doctype. Works if I put it in the collection objects tab
  // ucbgTaxonCount, // No parameters, no doctype. Works if i put it in the collectionobjects tab.
  // ucbgVoucherLabel, // No parameters, no doctype. Works if i put it in the collectionobjects tab.
];
