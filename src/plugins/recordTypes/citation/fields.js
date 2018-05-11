export default (configContext) => {
  const {
    TextInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_BOOL,
  } = configContext.dataTypes;

  const {
    extensions,
  } = configContext.config;

  return {
    document: {
      'ns2:citations_common': {
        citationTermGroupList: {
          citationTermGroup: {
            termSource: {
              [config]: {
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        citationRelatedTermsGroupList: {
          citationRelatedTermsGroup: {
            relatedTerm: {
              [config]: {
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
      },
    },
  };
};
