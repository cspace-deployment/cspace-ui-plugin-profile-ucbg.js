export default (configContext) => {
  const {
    AutocompleteInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    'ns2:taxon_naturalhistory': {
      naturalHistoryCommonNameGroupList: {
        naturalHistoryCommonNameGroup: {
          naturalHistoryCommonName: {
            [config]: {
              view: {
                props: {
                  source: 'taxon/common',
                },
              },
            },
          },
        },
      },
      plantAttributesGroupList: {
        plantAttributesGroup: {
          conservationCategory: {
            [config]: {
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'concept/conservation',
                },
              },
            },
          },
        },
      },
    },
  };
};
