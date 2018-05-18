export default configContext => (data) => {
  const {
    getPart,
  } = configContext.recordDataHelpers;

  if (!data) {
    return '';
  }

  const common = getPart(data, 'media_common');
  const botgarden = getPart(data, 'media_botgarden');

  const idNumber = common ? common.get('identificationNumber') : '';
  const sciTaxon = botgarden ? botgarden.get('scientificTaxonomy') : '';

  return [idNumber, sciTaxon].filter(part => !!part).join(' – ');
};
