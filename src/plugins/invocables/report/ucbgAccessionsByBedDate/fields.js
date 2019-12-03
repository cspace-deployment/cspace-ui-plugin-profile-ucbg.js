import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    DateInput,
    CompoundInput,
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
      DateRangeStart: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.report.ucbgAccessionsByBedDate.DateRangeStart.name',
              defaultMessage: 'Start date',
            },
          }),
          view: {
            type: DateInput,
          },
        },
      },
      DateRangeEnd: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.report.ucbgAccessionsByBedDate.DateRangeEnd.name',
              defaultMessage: 'End date',
            },
          }),
          view: {
            type: DateInput,
          },
        },
      },
    },
  };
};
