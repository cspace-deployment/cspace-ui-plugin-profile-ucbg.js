const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Col,
    Cols,
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

      <Field name="taxonTermGroupList">
        <Field name="taxonTermGroup">
          <Cols>
            <Col>
              <Field name="termType" />
            </Col>
            <Col>
              <Field name="termStatus" />
            </Col>
          </Cols>
        </Field>
      </Field>

      <Field name="taxonRank" />
    </Field>
  );
};

export default configContext => ({
  template: template(configContext),
});
