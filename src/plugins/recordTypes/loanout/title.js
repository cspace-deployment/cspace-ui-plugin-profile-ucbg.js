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

  const common = getPart(data, 'loansout_common');

  if (!common) {
    return '';
  }

  const loanOutDate = common.get('loanOutDate');
  const borrower = getDisplayName(common.get('borrower'));

  return [loanOutDate, borrower].filter(part => !!part).join(' – ');
};
