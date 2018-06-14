const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Panel,
    Row,
  } = configContext.layoutComponents;

  const {
    Field,
    InputTable,
  } = configContext.recordComponents;

  return (
    <Field name="document">
      <Panel name="info" collapsible>
        <Field name="conceptTermGroupList">
          <Field name="conceptTermGroup">
            <Panel>
              <Row>
                <Field name="termDisplayName" />
                <Field name="termName" />
                <Field name="termQualifier" />
                <Field name="termStatus" />
              </Row>

              <Row>
                <Field name="termType" />
                <Field name="termFlag" />
                <Field name="historicalStatus" />
                <Field name="termLanguage" />
                <Field name="termPrefForLang" />
              </Row>

              <InputTable name="termSource">
                <Field name="termSource" />
                <Field name="termSourceDetail" />
                <Field name="termSourceID" />
                <Field name="termSourceNote" />
              </InputTable>
            </Panel>
          </Field>
        </Field>

        <InputTable name="scopeNote">
          <Field name="scopeNote" />
          <Field name="scopeNoteSource" />
          <Field name="scopeNoteSourceDetail" />
        </InputTable>

        <Row>
          <Field name="associatedPerson" subpath="ns2:concepts_naturalhistory" />
          <Field name="associatedOrganization" subpath="ns2:concepts_naturalhistory" />
        </Row>

        <Field name="citationGroupList">
          <Field name="citationGroup">
            <Field name="citationSource" />
            <Field name="citationSourceDetail" />
          </Field>
        </Field>

        <Field name="additionalSourceGroupList">
          <Field name="additionalSourceGroup">
            <Field name="additionalSource" />
            <Field name="additionalSourceDetail" />
            <Field name="additionalSourceUniqueID" />
            <Field name="additionalSourceNote" />
          </Field>
        </Field>
      </Panel>

      <Panel name="hierarchy" collapsible collapsed>
        <Field name="relation-list-item" subpath="rel:relations-common-list" />
      </Panel>
    </Field>
  );
};

export default configContext => ({
  template: template(configContext),
});
