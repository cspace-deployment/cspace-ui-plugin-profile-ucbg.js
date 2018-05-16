const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Col,
    Cols,
    Panel,
  } = configContext.layoutComponents;

  const {
    Field,
    Subrecord,
  } = configContext.recordComponents;

  const {
    extensions,
  } = configContext.config;

  return (
    <Field name="document">
      <Panel name="media" collapsible>
        <Panel name="file" collapsible>
          <Cols>
            <Col>
              <Field name="identificationNumber" />
              <Field name="title" />
              <Field name="handwritten" subpath="ns2:media_botgarden" />
            </Col>

            <Col>
              <Field name="scientificTaxonomy" subpath="ns2:media_botgarden" />
              <Field name="imageNumber" subpath="ns2:media_botgarden" />
              <Field name="postToPublic" subpath="ns2:media_botgarden" />
            </Col>
          </Cols>
          <Subrecord name="blob" showDetachButton />
        </Panel>

        <Field name="externalUrl" />

        {extensions.dimension.form}

        <Cols>
          <Col>
            <Field name="contributor" />
            <Field name="creator" />

            <Field name="languageList">
              <Field name="language" />
            </Field>

            <Field name="publisher" />

            <Field name="relationList">
              <Field name="relation" />
            </Field>

            <Field name="copyrightStatement" />
          </Col>

          <Col>
            <Field name="typeList">
              <Field name="type" />
            </Field>

            <Field name="coverage" />

            <Field name="dateGroupList">
              <Field name="dateGroup" />
            </Field>

            <Field name="source" />

            <Field name="subjectList">
              <Field name="subject" />
            </Field>

            <Field name="rightsHolder" />
          </Col>
        </Cols>

        <Field name="description" />
      </Panel>
    </Field>
  );
};

export default configContext => ({
  template: template(configContext),
});
