import { defineMessages } from 'react-intl';

const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Field,
  } = configContext.recordComponents;

  return (
    <Field name="params">
      <Field name="Bed Location" />
      <Field name="Date Range Start" />
      <Field name="Date Range End" />
    </Field>
  );
};

export default configContext => ({
  messages: defineMessages({
    name: {
      id: 'form.report.ucbgAccessionsByBedDate.default.name',
      defaultMessage: 'Standard Template',
    },
  }),
  sortOrder: 0,
  template: template(configContext),
});
