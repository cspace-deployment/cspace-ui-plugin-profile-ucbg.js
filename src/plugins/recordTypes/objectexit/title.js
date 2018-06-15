export default configContext => (data) => {
  const {
    getPart,
  } = configContext.recordDataHelpers;

  const {
    getDisplayName,
  } = configContext.refNameHelpers;

  if (!data) {
    return '';
  }

  const common = getPart(data, 'objectexit_common');

  if (!common) {
    return '';
  }

  const exitNumber = common.get('exitNumber');
  const depositor = getDisplayName(common.get('depositor'));

  return [exitNumber, depositor].filter(part => !!part).join(' – ');
};
