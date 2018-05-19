import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    TermPickerInput,
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
            view: {
              props: {
                source: 'location/local',
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
        labelRequested: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.movements_botgarden.labelRequested.name',
                defaultMessage: 'Requested?',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'booleans',
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
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'LabelSize',
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
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'standType',
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
