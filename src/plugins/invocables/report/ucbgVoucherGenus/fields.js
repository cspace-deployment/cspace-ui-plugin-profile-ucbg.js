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
      genus: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.report.ucbgVoucherGenus.genus.name',
              defaultMessage: 'Genus',
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
