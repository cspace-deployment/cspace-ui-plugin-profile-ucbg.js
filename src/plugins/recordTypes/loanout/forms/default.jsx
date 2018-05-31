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
            <Field name="sterile" subpath="ns2:loansout_botgarden" />
            <Row>
              <Field name="fertile" subpath="ns2:loansout_botgarden" />
              <Field name="flowering" subpath="ns2:loansout_botgarden" />
              <Field name="fruiting" subpath="ns2:loansout_botgarden" />
              <Field name="inSpore" subpath="ns2:loansout_botgarden" />
            </Row>
            <Field name="loanOutNote" />
          </Col>

          <Col>
            <Cols>
              <Col>
                <Field name="loanOutNumber" />
                <Field name="hortWild" subpath="ns2:loansout_botgarden" />
              </Col>
              <Col>
                <Field name="loanOutDate" />
                <Field name="gardenLocation" subpath="ns2:loansout_botgarden" />
              </Col>
            </Cols>
            <Field name="loanPurpose" />
          </Col>
        </Cols>

        <Field name="lendersAuthorizer" />
        <Field name="borrower" />

        <Row>
          <Field name="specialConditionsOfLoan" />
        </Row>

        <Field name="loanStatusGroupList">
          <Field name="loanStatusGroup">
            <Field name="loanStatus" />
            <Field name="loanStatusDate" />
            <Field name="loanStatusNote" />
          </Field>
        </Field>

        <Row>
          {/* <Field name="loanOutDate" /> */}
          <Field name="loanReturnDate" />
          <Field name="loanRenewalApplicationDate" />
        </Row>
      </Panel>
    </Field>
  );
};

export default configContext => ({
  template: template(configContext),
});
