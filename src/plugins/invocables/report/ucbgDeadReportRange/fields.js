import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    // DateInput
    CompoundInput,
    TextInput,
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
      'startdate-yyyy-mm-dd': {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.report.ucbgDeadReportRange.startdate-yyyy-mm-dd.name',
              defaultMessage: 'Start date',
            },
          }),
          required: true,
          view: {
            type: TextInput,
            // type: DateInput
          },
        },
      },
      'enddate-yyyy-mm-dd': {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.report.ucbgDeadReportRange.enddate-yyyy-mm-dd.name',
              defaultMessage: 'End date',
            },
          }),
          required: true,
          view: {
            type: TextInput,
            // type: DateInput
          },
        },
      },
    },
  };
};
