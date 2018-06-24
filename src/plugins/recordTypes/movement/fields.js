import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    // TermPickerInput,
    OptionPickerInput,
    TextInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_INT,
  } = configContext.dataTypes;

  return {
    document: {
      'ns2:movements_common': {
        currentLocation: {
          [config]: {
            required: false,
            view: {
              props: {
                source: 'location/local',
              },
            },
          },
        },
        reasonForMove: {
          [config]: {
            view: {
              // type: TermPickerInput,
              // props: {
              //   source: 'actionCode',
              // },
              type: OptionPickerInput,
              props: {
                source: 'actionCodes',
              },
            },
          },
        },
      },
      'ns2:movements_botgarden': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/movement/local/botgarden',
          },
        },
        previousLocation: {
          [config]: {
            view: {
              type: AutocompleteInput,
              props: {
                source: 'location/local',
              },
            },
          },
        },
        labelRequested: {
          [config]: {
            defaultValue: 'No',
            messages: defineMessages({
              name: {
                id: 'field.movements_botgarden.labelRequested.name',
                defaultMessage: 'Requested',
              },
              fullName: {
                id: 'field.movements_botgarden.labelRequested.fullName',
                defaultMessage: 'Label requested',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'labelRequestedValues',
              },
            },
          },
        },
        labelSize: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.movements_botgarden.labelSize.name',
                defaultMessage: 'Size',
              },
              fullName: {
                id: 'field.movements_botgarden.labelSize.fullName',
                defaultMessage: 'Label size',
              },
            }),
            view: {
              // type: TermPickerInput,
              // props: {
              //   source: 'LabelSize',
              // },
              type: OptionPickerInput,
              props: {
                source: 'labelSizes',
              },
            },
          },
        },
        labelStandType: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.movements_botgarden.labelStandType.name',
                defaultMessage: 'Stand type',
              },
              fullName: {
                id: 'field.movements_botgarden.labelStandType.fullName',
                defaultMessage: 'Label stand type',
              },
            }),
            view: {
              // type: TermPickerInput,
              // props: {
              //   source: 'standType',
              // },
              type: OptionPickerInput,
              props: {
                source: 'standTypes',
              },
            },
          },
        },
        labelCount: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.movements_botgarden.labelCount.name',
                defaultMessage: 'Count',
              },
              fullName: {
                id: 'field.movements_botgarden.labelCount.fullName',
                defaultMessage: 'Label count',
              },
            }),
            dataType: DATA_TYPE_INT,
            view: {
              type: TextInput,
            },
          },
        },
      },
    },
  };
};
