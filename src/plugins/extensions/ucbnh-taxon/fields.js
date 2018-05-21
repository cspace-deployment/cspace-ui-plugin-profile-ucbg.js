export default (configContext) => {
  const {
    AutocompleteInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    'ns2:taxon_naturalhistory': {
      plantAttributesGroupList: {
        plantAttributesGroup: {
          conservationCategory: {
            [config]: {
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'concept/conservation_ca',
                },
              },
            },
          },
        },
      },
    },
  };
};
