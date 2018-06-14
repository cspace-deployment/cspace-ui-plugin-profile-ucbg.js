import { defineMessages } from 'react-intl';

const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Col,
    Cols,
    Panel,
    Row,
  } = configContext.layoutComponents;

  const {
    Field,
  } = configContext.recordComponents;

  return (
    <Field name="document">
      <Panel name="propagationInformation" >

        <Cols>
          <Col>
            <Field name="propNumber" />
            <Row>
              <Field name="propType" />
              <Field name="numStarted" />
            </Row>

            <Panel name="seeds">
              <Cols>
                <Col>
                  <Field name="scarStratGroupList">
                    <Field name="scarStratGroup">
                      <Field name="scarStrat" />
                      <Field name="duration" />
                      <Field name="durationUnit" />
                    </Field>
                  </Field>
                </Col>
                <Col>
                  <Row>
                    <Field name="extraSeeds" />
                    <Field name="spores" />
                  </Row>
                </Col>
              </Cols>
            </Panel>
            <div />
          </Col>
          <Col>
            <Row>
              <Field name="propDate" />
              <Field name="propReason" />
            </Row>
            <Field name="propComments" />
          </Col>
        </Cols>

        <Panel name="cuttings">
          <Row>
            <Field name="cuttingType" />
            <Field name="hormone" />
            <Field name="concentration" />
            <Field name="wounded" />
          </Row>
        </Panel>
        <div />

        <Row>
          <Col>
            <Panel name="livingPlantMaterial">
              <Field name="plantType" />
            </Panel>
          </Col>
          <Col />
          <Col />
        </Row>

        <Field name="propActivityGroupList">
          <Field name="propActivityGroup">
            <Row>
              <Field name="order" />
              <Field name="activityDate" />
              <Field name="activityType" />
              <Field name="propCount" />
              <Field name="medium" />
            </Row>
            <Row>
              <Field name="potSize" />
              <Field name="nurseryLocation" />
              <Field name="conditions" />
            </Row>
            <Row>
              <Field name="chemicalApplied" />
              <Field name="activityConcentration" />
              <Field name="activityComments" />
            </Row>
          </Field>
        </Field>

        <Cols>
          <Col>
            <Row>
              <Field name="germinationDate" />
              <Field name="successRate" />
            </Row>
          </Col>
          <Col />
        </Cols>
      </Panel>
    </Field>
  );
};

export default configContext => ({
  messages: defineMessages({
    name: {
      id: 'form.propagation.default.name',
      defaultMessage: 'Standard Template',
    },
  }),
  template: template(configContext),
});
