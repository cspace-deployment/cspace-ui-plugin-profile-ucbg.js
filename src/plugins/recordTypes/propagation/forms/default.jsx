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
    InputTable,
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

            <Field name="scarStratGroupList">
              <Field name="scarStratGroup">
                <Field name="scarStrat" />
                <Field name="duration" />
                <Field name="durationUnit" />
              </Field>
            </Field>
            <Row>
              <Field name="extraSeeds" />
              <Field name="spores" />
            </Row>
          </Col>

          <Col>
            <Row>
              <Field name="propDate" />
              <Field name="propReason" />
            </Row>
            <Field name="propComments" />
          </Col>
        </Cols>

        <InputTable name="cuttings">
          <Field name="cuttingType" />
          <Field name="hormone" />
          <Field name="concentration" />
          <Field name="wounded" />
        </InputTable>

        <Row>
          <Col>
            <InputTable name="livingPlantMaterial">
              <Field name="plantType" />
            </InputTable>
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

        <Row>
          <Field name="germinationDate" />
          <Field name="successRate" />
        </Row>
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
