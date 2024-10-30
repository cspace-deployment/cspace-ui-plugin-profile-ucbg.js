import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    OptionPickerInput,
    TextInput,
    CheckboxInput,
    CompoundInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_BOOL,
  } = configContext.dataTypes;

  return {
    params: {
      [config]: {
        view: {
          type: CompoundInput,
        },
      },
      sex: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.collectionobjects_common.sex.name',
              defaultMessage: 'Sex',
            },
          }),
          view: {
            type: OptionPickerInput,
            props: {
              source: 'sexes',
            },
          },
        },
      },
      flowerColor: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.Update Plant Phenology.flowerColor.name',
              defaultMessage: 'Flower color',
            },
          }),
          view: {
            type: TextInput,
          },
        },
      },
      fruitColor: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.Update Plant Phenology.fruitColor.name',
              defaultMessage: 'Fruit color',
            },
          }),
          view: {
            type: TextInput,
          },
        },
      },
      flowersJan: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.Update Plant Phenology.flowersJan.name',
              defaultMessage: 'Flowers Jan',
            },
          }),
          view: {
            type: OptionPickerInput,
            props: {
              source: 'flowerValues',
            },
          },
        },
      },
      flowersFeb: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.Update Plant Phenology.flowersFeb.name',
              defaultMessage: 'Flowers Feb',
            },
          }),
          view: {
            type: OptionPickerInput,
            props: {
              source: 'flowerValues',
            },
          },
        },
      },
      flowersMar: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.Update Plant Phenology.flowersMar.name',
              defaultMessage: 'Flowers Mar',
            },
          }),
          view: {
            type: OptionPickerInput,
            props: {
              source: 'flowerValues',
            },
          },
        },
      },
      flowersApr: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.Update Plant Phenology.flowersApr.name',
              defaultMessage: 'Flowers Apr',
            },
          }),
          view: {
            type: OptionPickerInput,
            props: {
              source: 'flowerValues',
            },
          },
        },
      },
      flowersMay: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.Update Plant Phenology.flowersMay.name',
              defaultMessage: 'Flowers May',
            },
          }),
          view: {
            type: OptionPickerInput,
            props: {
              source: 'flowerValues',
            },
          },
        },
      },
      flowersJun: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.Update Plant Phenology.flowersJun.name',
              defaultMessage: 'Flowers Jun',
            },
          }),
          view: {
            type: OptionPickerInput,
            props: {
              source: 'flowerValues',
            },
          },
        },
      },
      flowersJul: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.Update Plant Phenology.flowersJul.name',
              defaultMessage: 'Flowers Jul',
            },
          }),
          view: {
            type: OptionPickerInput,
            props: {
              source: 'flowerValues',
            },
          },
        },
      },
      flowersAug: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.Update Plant Phenology.flowersAug.name',
              defaultMessage: 'Flowers Aug',
            },
          }),
          view: {
            type: OptionPickerInput,
            props: {
              source: 'flowerValues',
            },
          },
        },
      },
      flowersSep: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.Update Plant Phenology.flowersSep.name',
              defaultMessage: 'Flowers Sep',
            },
          }),
          view: {
            type: OptionPickerInput,
            props: {
              source: 'flowerValues',
            },
          },
        },
      },
      flowersOct: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.Update Plant Phenology.flowersOct.name',
              defaultMessage: 'Flowers Oct',
            },
          }),
          view: {
            type: OptionPickerInput,
            props: {
              source: 'flowerValues',
            },
          },
        },
      },
      flowersNov: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.Update Plant Phenology.flowersNov.name',
              defaultMessage: 'Flowers Nov',
            },
          }),
          view: {
            type: OptionPickerInput,
            props: {
              source: 'flowerValues',
            },
          },
        },
      },
      flowersDec: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.Update Plant Phenology.flowersDec.name',
              defaultMessage: 'Flowers Dec',
            },
          }),
          view: {
            type: OptionPickerInput,
            props: {
              source: 'flowerValues',
            },
          },
        },
      },
      fruitsJan: {
        [config]: {
          defaultValue: null,
          messages: defineMessages({
            name: {
              id: 'field.Update Plant Phenology.fruitsJan.name',
              defaultMessage: 'Fruits Jan',
            },
          }),
          dataType: DATA_TYPE_BOOL,
          view: {
            type: CheckboxInput,
          },
        },
      },
      fruitsFeb: {
        [config]: {
          defaultValue: null,
          messages: defineMessages({
            name: {
              id: 'field.Update Plant Phenology.fruitsFeb.name',
              defaultMessage: 'Fruits Feb',
            },
          }),
          dataType: DATA_TYPE_BOOL,
          view: {
            type: CheckboxInput,
          },
        },
      },
      fruitsMar: {
        [config]: {
          defaultValue: null,
          messages: defineMessages({
            name: {
              id: 'field.Update Plant Phenology.fruitsMar.name',
              defaultMessage: 'Fruits Mar',
            },
          }),
          dataType: DATA_TYPE_BOOL,
          view: {
            type: CheckboxInput,
          },
        },
      },
      fruitsApr: {
        [config]: {
          defaultValue: null,
          messages: defineMessages({
            name: {
              id: 'field.Update Plant Phenology.fruitsApr.name',
              defaultMessage: 'Fruits Apr',
            },
          }),
          dataType: DATA_TYPE_BOOL,
          view: {
            type: CheckboxInput,
          },
        },
      },
      fruitsMay: {
        [config]: {
          defaultValue: null,
          messages: defineMessages({
            name: {
              id: 'field.Update Plant Phenology.fruitsMay.name',
              defaultMessage: 'Fruits May',
            },
          }),
          dataType: DATA_TYPE_BOOL,
          view: {
            type: CheckboxInput,
          },
        },
      },
      fruitsJun: {
        [config]: {
          defaultValue: null,
          messages: defineMessages({
            name: {
              id: 'field.Update Plant Phenology.fruitsJun.name',
              defaultMessage: 'Fruits Jun',
            },
          }),
          dataType: DATA_TYPE_BOOL,
          view: {
            type: CheckboxInput,
          },
        },
      },
      fruitsJul: {
        [config]: {
          defaultValue: null,
          messages: defineMessages({
            name: {
              id: 'field.Update Plant Phenology.fruitsJul.name',
              defaultMessage: 'Fruits Jul',
            },
          }),
          dataType: DATA_TYPE_BOOL,
          view: {
            type: CheckboxInput,
          },
        },
      },
      fruitsAug: {
        [config]: {
          defaultValue: null,
          messages: defineMessages({
            name: {
              id: 'field.Update Plant Phenology.fruitsAug.name',
              defaultMessage: 'Fruits Aug',
            },
          }),
          dataType: DATA_TYPE_BOOL,
          view: {
            type: CheckboxInput,
          },
        },
      },
      fruitsSep: {
        [config]: {
          defaultValue: null,
          messages: defineMessages({
            name: {
              id: 'field.Update Plant Phenology.fruitsSep.name',
              defaultMessage: 'Fruits Sep',
            },
          }),
          dataType: DATA_TYPE_BOOL,
          view: {
            type: CheckboxInput,
          },
        },
      },
      fruitsOct: {
        [config]: {
          defaultValue: null,
          messages: defineMessages({
            name: {
              id: 'field.Update Plant Phenology.fruitsOct.name',
              defaultMessage: 'Fruits Oct',
            },
          }),
          dataType: DATA_TYPE_BOOL,
          view: {
            type: CheckboxInput,
          },
        },
      },
      fruitsNov: {
        [config]: {
          defaultValue: null,
          messages: defineMessages({
            name: {
              id: 'field.Update Plant Phenology.fruitsNov.name',
              defaultMessage: 'Fruits Nov',
            },
          }),
          dataType: DATA_TYPE_BOOL,
          view: {
            type: CheckboxInput,
          },
        },
      },
      fruitsDec: {
        [config]: {
          defaultValue: null,
          messages: defineMessages({
            name: {
              id: 'field.Update Plant Phenology.fruitsDec.name',
              defaultMessage: 'Fruits Dec',
            },
          }),
          dataType: DATA_TYPE_BOOL,
          view: {
            type: CheckboxInput,
          },
        },
      },
    },
  };
};
