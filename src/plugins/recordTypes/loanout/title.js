export default (configContext) => (data) => {
  const {
    formatDate,
  } = configContext.formatHelpers;

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

  const loanOutDate = formatDate(common.get('loanOutDate'));
  const borrower = getDisplayName(common.get('borrower'));

  return [loanOutDate, borrower].filter((part) => !!part).join(' – ');
};
