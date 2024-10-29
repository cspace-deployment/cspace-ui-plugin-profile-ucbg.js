const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Row,
  } = configContext.layoutComponents;

  const {
    Field,
  } = configContext.recordComponents;

  return (
    <Field name="document">
      <Field
        name="relation-list-item"
        subpath="rel:relations-common-list"
        showChildren={false}
        showSiblings={false}
      />

      <Row>
        <Field name="termType" subpath={['ns2:taxon_common', 'taxonTermGroupList', 'taxonTermGroup', 0]} />
        <Field name="termStatus" subpath={['ns2:taxon_common', 'taxonTermGroupList', 'taxonTermGroup', 0]} />
      </Row>

      <Field name="taxonRank" />
    </Field>
  );
};

export default (configContext) => ({
  template: template(configContext),
});
