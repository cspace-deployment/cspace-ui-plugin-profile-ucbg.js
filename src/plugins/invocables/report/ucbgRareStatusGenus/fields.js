import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
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
      genus: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.report.ucbgRateStatusGenus.genus.name',
              defaultMessage: 'Genus',
            },
          }),
          required: true,
          view: {
            type: AutocompleteInput,
            props: {
              source: 'taxon/local',
              showQuickAdd: false,
          },
        },
      },
    },
  };
};
