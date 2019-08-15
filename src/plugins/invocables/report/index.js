import ucbgDeadReportRange from './ucbgDeadReportRange';
import ucbgDiedInLocation from './ucbgDiedInLocation';
import ucbgRareStatusFamily from './ucbgRareStatusFamily';
import ucbgRareStatusGenus from './ucbgRareStatusGenus';
import ucbgVoucherFamily from './ucbgVoucherFamily';
import ucbgVoucherGenus from './ucbgVoucherGenus';
import ucbgUOCApprovalStatus from './ucbgUOCApprovalStatus';
import ucbgUOCRequesterbyObject from './ucbgUOCRequesterbyObject';
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
  ucbgUOCApprovalStatus,
  ucbgUOCRequesterbyObject,
  // ucbgAccessionCount, // No parameters, no doctype. Works if put it in the collectionobjects tab
  // ucbgListofLivingAccessions, // same as above
  // ucbgTaxonCount, // same as above
  // ucbgVoucherLabel, // same as above
];
