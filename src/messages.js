export default {
  'about.title': 'UCBG CollectionSpace',
  'about.contentHTML': `
    <p>
      Collections management system of the UC Botanical Garden.
    </p>
    <p>
      This service is supported by UC Berkeley <a href="http://research-it.berkeley.edu/">Research IT</a>.
      To send feedback, report bugs, or request support, email
      <a href="mailto:cspace-support@lists.berkeley.edu">cspace-support@lists.berkeley.edu</a>.
    </p>`,

  'footer.feedback': 'Contact UC Berkeley CollectionSpace support',
  'footer.feedbackUrl': 'mailto:cspace-support@lists.berkeley.edu',

  // Storage Location
  'record.location.name': 'Garden Location',
  'record.location.collectionName': 'Garden Locations',
  'vocab.location.local.name': 'Garden Location',
  'vocab.location.local.collectionName': 'Garden Locations',

  // Media
  'field.media_common.identificationNumber.name': 'Accession number',

  // Persons
  'vocab.person.local.name': 'Default',
  'vocab.person.local.collectionName': 'Default persons',

  // Places
  'field.places_common.termStatus.name': 'Admin status',
  'field.places_common.termStatus.fullName': 'Admin status',
  'vocab.place.local.name': 'Default',
  'vocab.place.local.collectionName': 'Default places',

  // Movement
  'record.movement.name': 'Current Location',
  'record.movement.collectionName': 'Current Locations',
  'field.movements_common.currentLocation.name': 'Garden location',
  'field.movements_common.currentLocation.fullName': 'Garden location',
  'field.movements_common.locationDate.name': 'Action date',
  'field.movements_common.reasonForMove.name': 'Action code',
  'panel.movement.movement': 'Label Information',
  'panel.movement.location': 'Current Location Information',

  // Voucher / Loan Out
  'record.loanout.name': 'Voucher',
  'record.loanout.collectionName': 'Vouchers',
  'column.loanout.default.borrower': 'Voucher institution',
  'panel.loanout.info': 'Voucher Information',
  'field.loansout_common.loanOutNumber.name': 'Voucher collection number',
  'field.loansout_common.loanPurpose.name': 'Purpose',
  'field.loansout_common.borrower.name': 'Voucher institution',
  'field.loansout_common.borrower.fullName': 'Voucher institution',
  'field.loansout_naturalhistory.numLent.name': 'Number of sheets',
  'field.loansout_common.lendersAuthorizer.name': 'Voucher reviewed by',
  'field.loansout_common.lendersAuthorizer.fullName': 'Voucher reviewed by',
  'field.loansout_common.loanOutDate.name': 'Voucher date',

  // Taxon
  'vocab.taxon.local.name': 'Default',
  'vocab.taxon.local.collectionName': 'Default Taxonomic Names',
  // FIXME: This is a bit of a hack that only works because the name message isn't used anywhere
  // besides the record editor. It would be better to have a message in field config that gets
  // passed into the field label as a separate prop.
  'field.taxon_common.termFormattedDisplayName.name': 'Formatted display name (Leave blank to auto fill)',
  'field.taxon_naturalhistory.habitat.name': 'Habit',

  // Organization
  'vocab.organization.local.name': 'Organization',
  'vocab.organization.local.collectionName': 'Organizations',
  'field.organizations_common.historyNote.name': 'Organization note',
  'field.organizations_common.contactName.name': 'Contact/chair',
  'field.organizations_common.contactName.fullName': 'Contact/chair name',

  // Concepts
  'vocab.concept.associated.name': 'Propagation Medium',
  'vocab.concept.associated.collectionName': 'Propagation Media',

  // Distribution
  'record.objectexit.name': 'Distribution',
  'record.objectexit.collectionName': 'Distributions',
  'field.objectexit_common.exitNumber.name': 'Distribution number',
  'column.objectexit.default.exitNumber': 'Distribution number',
  'panel.objectexit.info': 'Distribution Information',
  'field.objectexit_common.exitMethod.name': 'Distribution method',
  'field.objectexit_common.exitReason.name': 'Distribution reason',
  'field.objectexit_common.exitNote.name': 'Distribution note',
  'field.objectexit_common.currentOwner.name': 'Authorized by',
  'field.objectexit_common.depositor.name': 'Organization',
  'field.objectexit_common.exitDateGroup.name': 'Date',

  // Collection objects
  'panel.collectionobject.collect': 'Field collection Information',
  'field.collectionobjects_common.fieldCollectionNote.name': 'Habitat information',
  'field.collectionobjects_common.objectNumber.name': 'Accession number',
  'field.collectionobjects_common.recordStatus.name': 'Provenance data quality',
  'field.collectionobjects_common.briefDescription.name': 'Material type',
  'field.collectionobjects_common.comment.name': 'Accession note',
  'column.collectionobject.default.objectNumber': 'Accession number',

  // Batches
  'field.BulkObjectEditBatchJob.briefDescription.name': 'Material type (received as)',
};
