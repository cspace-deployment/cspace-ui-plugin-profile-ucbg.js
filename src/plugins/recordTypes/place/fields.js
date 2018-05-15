export default (configContext) => {
  const {
    TextInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    document: {
      'ns2:places_common': {
        placeTermGroupList: {
          placeTermGroup: {
            termType: {
              [config]: {
                view: {
                  props: {
                    source: 'ucbgPlaceTermTypes',
                  },
                },
              },
            },
            termSource: {
              [config]: {
                view: {
                  type: TextInput,
                  props: null,
                },
              },
            },
          },
        },
      },
    },
  };
};
