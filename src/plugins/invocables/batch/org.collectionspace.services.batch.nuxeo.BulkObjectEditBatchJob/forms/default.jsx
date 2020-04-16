const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Field,
  } = configContext.recordComponents;

  const {
    Col,
    Cols,
  } = configContext.layoutComponents;

  return (
    <Field name="params">
      <Cols>
        <Col>
          <Field name="taxon" />
          <Field name="material" />
          <Field name="responsibleDepartment" />
          <Field name="briefDescription" />
        </Col>

        <Col>
          <Field name="assocPeople" />
          <Field name="objectProductionPerson" />
          <Field name="objectProductionPlace" />
          <Field name="fieldCollector" />
        </Col>

        <Col>
          <Field name="objectStatus" />
          <Field name="contentPlace" />
          <Field name="objectName" />
        </Col>
      </Cols>
    </Field>
  );
};

export default configContext => ({
  template: template(configContext),
});
