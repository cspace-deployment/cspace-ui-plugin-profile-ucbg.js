import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    DateInput,
    AutocompleteInput,
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
      'Bed Location': {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.report.ucbgAccessionsByBedDate.Bed Location.name',
              defaultMessage: 'Bed location',
            },
          }),
          view: {
            type: AutocompleteInput,
            props: {
              source: 'location/local',
            },
          },
        },
      },
      'Date Range Start': {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.report.ucbgAccessionsByBedDate.Date Range Start.name',
              defaultMessage: 'Start date',
            },
          }),
          view: {
            type: DateInput
          },
        },
      },
      'Date Range End': {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.report.ucbgAccessionsByBedDate.Date Range End.name',
              defaultMessage: 'End date',
            },
          }),
          view: {
            type: DateInput
          },
        },
      },
    },
  };
};
