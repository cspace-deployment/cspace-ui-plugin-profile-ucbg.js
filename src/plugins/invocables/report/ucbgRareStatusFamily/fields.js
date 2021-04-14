import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    CompoundInput,
    AutocompleteInput,
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
      family: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.report.ucbgRareStatusFamily.family.name',
              defaultMessage: 'Family',
            },
          }),
          view: {
            type: AutocompleteInput,
            props: {
              source: 'taxon/local',
              showQuickAdd: false,
            },
          },
        },
      },
    },
  };
};
