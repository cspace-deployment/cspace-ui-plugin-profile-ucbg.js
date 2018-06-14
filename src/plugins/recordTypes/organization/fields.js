export default (configContext) => {
  const {
    TextInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    extensions,
  } = configContext.config;

  return {
    document: {
      'ns2:organizations_common': {
        orgTermGroupList: {
          orgTermGroup: {
            termSource: {
              [config]: {
                view: {
                  type: TextInput,
                  props: null,
                },
              },
            },
            termType: {
              [config]: {
                view: {
                  props: {
                    source: 'ucbgTermTypes',
                  },
                },
              },
            },
          },
        },
      },
      ...extensions['ucbnh-organization'].fields,
    },
  };
};
