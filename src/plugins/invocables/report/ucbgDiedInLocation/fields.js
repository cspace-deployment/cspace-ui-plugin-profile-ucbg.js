import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    CompoundInput,
    TextInput,
    OptionPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    params: {
      [config]: {
        view: {
          type: CompoundInput,
        },
      },
      location: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.report.ucbgDiedInLocation.location.name',
              defaultMessage: 'Location',
            },
          }),
          required: true,
          view: {
            type: TextInput,
          },
        },
      },
      OutputMIME: {
        [config]: {
          defaultValue: 'application/pdf',
          messages: defineMessages({
            name: {
              id: 'field.report.ucbgDiedInLocation.OutputMIME.name',
              defaultMessage: 'Output format',
            },
          }),
          required: true,
          view: {
            type: OptionPickerInput,
            props: {
              source: 'uocApprovalStatusMIMETypes',
            },
          },
        },
      },
    },
  };
};
