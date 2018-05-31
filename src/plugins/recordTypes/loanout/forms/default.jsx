const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Cols,
    Col,
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
        <Cols>
          <Col>
            <Field name="collector" subpath="ns2:loansout_botgarden" />
            {/* <Field name="sterile" subpath="ns2:loansout_botgarden" /> */}
            <Row>
              <Field name="phenologyGroup" subpath="ns2:loansout_botgarden">
                <Field name="sterile" />
                <Field name="fertile" />
                <Field name="flowering" />
                <Field name="fruiting" />
                <Field name="inSpore" />
              </Field>
            </Row>
            <Field name="loanPurpose" />
          </Col>

          <Col>
            <Cols>
              <Col>
                <Field name="loanOutDate" />
                <Field name="hortWild" subpath="ns2:loansout_botgarden" />
              </Col>
              <Col>
                <Field name="loanOutNumber" />
                <Field name="gardenLocation" subpath="ns2:loansout_botgarden" />
              </Col>
            </Cols>
            <Field name="loanOutNote" />
          </Col>
        </Cols>
        <Field name="annotation" subpath="ns2:loansout_botgarden" />
        <Field name="fieldCollectionNote" subpath="ns2:loansout_botgarden" />

        <Cols>
          <Col>
            <Field name="borrower" />
            <Field name="lendersAuthorizer" />
          </Col>

          <Col>
            <Field name="numLent" subpath="ns2:loansout_naturalhistory" />
            <Field name="reviewComplete" subpath="ns2:loansout_botgarden" />
          </Col>

          <Col>
            <Field name="sheetAccessionNumber" subpath="ns2:loansout_botgarden" />
            <Field name="labelRequested" subpath="ns2:loansout_botgarden" />
          </Col>
        </Cols>
      </Panel>
    </Field>
  );
};

export default configContext => ({
  template: template(configContext),
});
