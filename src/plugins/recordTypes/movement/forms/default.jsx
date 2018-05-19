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
      <Panel name="location" collapsible>

        <Cols>
          <Col>
            <Field name="locationDate" />
            <Field name="currentLocation" />
          </Col>
          <Col>
            <Field name="reasonForMove" />
            <Field name="movementContact" />

          </Col>
        </Cols>
        <Field name="movementNote" />
      </Panel>

      <Panel name="movement" collapsible collapsed>
        <Row>
          <Field name="labelRequested" subpath="ns2:movements_botgarden" />
          <Field name="labelSize" subpath="ns2:movements_botgarden" />
          <Field name="labelStandType" subpath="ns2:movements_botgarden" />
          <Field name="labelCount" subpath="ns2:movements_botgarden" />
        </Row>
      </Panel>
    </Field>
  );
};

export default configContext => ({
  messages: defineMessages({
    name: {
      id: 'form.movement.default.name',
      defaultMessage: 'Standard Template',
    },
  }),
  template: template(configContext),
});
