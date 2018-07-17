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

  const common = getPart(data, 'media_common');
  const botgarden = getPart(data, 'media_botgarden');

  const idNumber = common ? common.get('identificationNumber') : '';
  const sciTaxon = botgarden ? getDisplayName(botgarden.get('scientificTaxonomy')) : '';

  return [idNumber, sciTaxon].filter(part => !!part).join(' – ');
};
