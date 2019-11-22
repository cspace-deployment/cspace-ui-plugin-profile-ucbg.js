import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    CompoundInput,
    AutocompleteInput,
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
              id: 'field.report.ucbgDiedInLocationExcel.location.name',
              defaultMessage: 'Location',
            },
          }),
          required: true,
          view: {
            type: AutocompleteInput,
            props: {
              source: 'location/local',
            },
          },
        },
      },
      OutputMIME: {
        [config]: {
          defaultValue: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
          messages: defineMessages({
            name: {
              id: 'field.report.ucbgDiedInLocationExcel.OutputMIME.name',
              defaultMessage: 'Output format',
            },
          }),
          required: true,
          view: {
            type: OptionPickerInput,
            props: {
              source: 'reportMimeTypes',
              readOnly: true,
            },
          },
        },
      },
    },
  };
};
