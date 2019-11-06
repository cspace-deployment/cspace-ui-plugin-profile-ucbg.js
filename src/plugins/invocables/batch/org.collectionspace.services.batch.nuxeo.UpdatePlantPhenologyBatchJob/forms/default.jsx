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
    <Field name="params">
        {/* <Panel> */}
          <Cols>
            <Row>
            <Field name="sex" />
              <Field name="flowerColor" />
              <Field name="fruitColor" />
            </Row>
          </Cols>

          <Row>
            <Field name="flowersJan" />
            <Field name="flowersFeb" />
            <Field name="flowersMar" />
            <Field name="flowersApr" />
            <Field name="flowersMay" />
            <Field name="flowersJun" />
            <Field name="flowersJul" />
            <Field name="flowersAug" />
            <Field name="flowersSep" />
            <Field name="flowersOct" />
            <Field name="flowersNov" />
            <Field name="flowersDec" />
          </Row>

          <Row>
            <Field name="fruitsJan" />
            <Field name="fruitsFeb" />
            <Field name="fruitsMar" />
            <Field name="fruitsApr" />
            <Field name="fruitsMay" />
            <Field name="fruitsJun" />
            <Field name="fruitsJul" />
            <Field name="fruitsAug" />
            <Field name="fruitsSep" />
            <Field name="fruitsOct" />
            <Field name="fruitsNov" />
            <Field name="fruitsDec" />
          </Row>

        {/* </Panel> */}    
    </Field>
  );
};

export default configContext => ({
  messages: defineMessages({
    name: {
      id: 'form.report.Update Plant Phenology.default.name',
      defaultMessage: 'Standard Template',
    },
  }),
  sortOrder: 0,
  template: template(configContext),
});
