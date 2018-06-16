export default configContext => (data) => {
  const {
    deepGet,
    getPart,
  } = configContext.recordDataHelpers;

  const {
    formatRefName,
  } = configContext.formatHelpers;

  if (!data) {
    return '';
  }

  const common = getPart(data, 'collectionobjects_common');
  const natHistory = getPart(data, 'collectionobjects_naturalhistory');

  const objectNumber = common ? common.get('objectNumber') : '';
  const taxon = natHistory ? formatRefName(deepGet(natHistory, ['taxonomicIdentGroupList', 'taxonomicIdentGroup', 0, 'taxon'])) : '';

  return [objectNumber, taxon].filter(part => !!part).join(' – ');
};
