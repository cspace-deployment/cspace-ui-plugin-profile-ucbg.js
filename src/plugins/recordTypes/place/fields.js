export default (configContext) => {
  const {
    OptionPickerInput,
    TextInput,
    TermPickerInput,
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
            historicalStatus: {
              [config]: {
                view: {
                  props: {
                    source: 'ucbgPlaceHistoricalStatuses',
                  },
                },
              },
            },
          },
        },
        placeType: {
          [config]: {
            view: {
              type: TermPickerInput,
              props: {
                source: 'placetype',
              },
            },
          },
        },
      },
    },
  };
};
