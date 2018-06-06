import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    CompoundInput,
    DateInput,
    HierarchyInput,
    IDGeneratorInput,
    OptionPickerInput,
    StructuredDateInput,
    TextInput,
    CheckboxInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_INT,
    DATA_TYPE_FLOAT,
    DATA_TYPE_STRUCTURED_DATE,
    DATA_TYPE_DATE,
    DATA_TYPE_BOOL,
  } = configContext.dataTypes;

  const {
    extensions,
  } = configContext.config;

  return {
    document: {
      'ns2:collectionobjects_common': {
        forms: {
          form: {
            [config]: {
              view: {
                props: {
                  source: 'TEMP',// FIX ME
                },
              },
            },
          },
        },
        phase: {
          [config]: {
            view: {
              props: {
                source: 'TEMP',// FIX ME
              },
            },
          },
        },
      },
      'ns2:collectionobjects_botgarden': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/collectionobject/local/botgarden',
          },
        },
        deadFlag: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_botgarden',
                defaultMessage: 'Dead flag',
              },
            }),
            view: {
              type: OptionPickerInput, // TEM
              props: {
                source: 'TEMP',
                readOnly: true,
              },
            },
          },
        },
        deadDate: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_botgarden.deadDate.name',
                defaultMessage: 'Dead date',
              },
            }),
            dataType: DATA_TYPE_DATE,
            view: {
              type: DateInput,
              props: {
                readOnly: true,
              },
            },
          },
        },
        cbdRestriction: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_botgarden.cbdRestriction.name',
                defaultMessage: 'CBD restriction',
              },
            }),
            dataType: DATA_TYPE_BOOL,
            view: {
              type: CheckboxInput,
            },
          },
        },
        postToPublic: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_botgarden.postToPublic.name',
                defaultMessage: 'Post to public',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'TEMP',
              },
            },
          },
        },
        flowerColor: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_botgarden.flowerColor.name',
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
                id: 'field.collectionobjects_botgarden.fruitColor.name',
                defaultMessage: 'Fruit color',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        propagationHistory: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_botgarden.propagationHistory.name',
                defaultMessage: 'Propagation history',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'TEMP',
              },
            },
          },
        },
        breedingSystem: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_botgarden.breedingSystem.name',
                defaultMessage: 'Breeding system',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'TEMP',
              },
            },
          },
        },
        classUse: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_botgarden.classUse.name',
                defaultMessage: 'Class use',
              },
            }),
            dataType: DATA_TYPE_BOOL,
            view: {
              type: CheckboxInput,
            },
          },
        },
        researchUse: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_botgarden.researchUse.name',
                defaultMessage: 'Research use',
              },
            }),
            dataType: DATA_TYPE_BOOL,
            view: {
              type: CheckboxInput,
            },
          },
        },
        ignoreRedDot: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_botgarden.ignoreRedDot.name',
                defaultMessage: 'Ignore red dot',
              },
            }),
            dataType: DATA_TYPE_BOOL,
            view: {
              type: CheckboxInput,
            },
          },
        },
        fragrance: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_botgarden.fragrance.name',
                defaultMessage: 'Fragrance',
              },
            }),
            dataType: DATA_TYPE_BOOL,
            view: {
              type: CheckboxInput,
            },
          },
        },
        flowersJan: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_botgarden.flowersJan.name',
                defaultMessage: 'Flowers Jan',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'TEMP',
              },
            },
          },
        },
        flowersFeb: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_botgarden.flowersFeb.name',
                defaultMessage: 'Flowers Feb',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'TEMP',
              },
            },
          },
        },
        flowersMar: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_botgarden.flowersMar.name',
                defaultMessage: 'Flowers Mar',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'TEMP',
              },
            },
          },
        },
        flowersApr: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_botgarden.flowersApr.name',
                defaultMessage: 'Flowers Apr',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'TEMP',
              },
            },
          },
        },
        flowersMay: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_botgarden.flowersMay.name',
                defaultMessage: 'Flowers May',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'TEMP',
              },
            },
          },
        },
        flowersJun: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_botgarden.flowersJun.name',
                defaultMessage: 'Flowers Jun',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'TEMP',
              },
            },
          },
        },
        flowersJul: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_botgarden.flowersJul.name',
                defaultMessage: 'Flowers Jul',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'TEMP',
              },
            },
          },
        },
        flowersAug: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_botgarden.flowersAug.name',
                defaultMessage: 'Flowers Aug',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'TEMP',
              },
            },
          },
        },
        flowersSep: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_botgarden.flowersSep.name',
                defaultMessage: 'Flowers Sep',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'TEMP',
              },
            },
          },
        },
        flowersOct: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_botgarden.flowersOct.name',
                defaultMessage: 'Flowers Oct',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'TEMP',
              },
            },
          },
        },
        flowersNov: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_botgarden.flowersNov.name',
                defaultMessage: 'Flowers Nov',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'TEMP',
              },
            },
          },
        },
        flowersDec: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_botgarden.flowersDec.name',
                defaultMessage: 'Flowers Dec',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'TEMP',
              },
            },
          },
        },
        fruitsJan: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_botgarden.fruitsJan.name',
                defaultMessage: 'Fruits Jan',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
        fruitsFeb: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_botgarden.fruitsFeb.name',
                defaultMessage: 'Fruits Feb',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
        fruitsMar: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_botgarden.fruitsMar.name',
                defaultMessage: 'Fruits Mar',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
        fruitsApr: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_botgarden.fruitsApr.name',
                defaultMessage: 'Fruits Apr',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
        fruitsMay: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_botgarden.fruitsMay.name',
                defaultMessage: 'Fruits May',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
        fruitsJun: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_botgarden.fruitsJun.name',
                defaultMessage: 'Fruits Jun',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
        fruitsJul: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_botgarden.fruitsJul.name',
                defaultMessage: 'Fruits Jul',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
        fruitsAug: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_botgarden.fruitsAug.name',
                defaultMessage: 'Fruits Aug',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
        fruitsSep: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_botgarden.fruitsSep.name',
                defaultMessage: 'Fruits Sep',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
        fruitsOct: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_botgarden.fruitsOct.name',
                defaultMessage: 'Fruits Oct',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
        fruitsNov: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_botgarden.fruitsNov.name',
                defaultMessage: 'Fruits Nov',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
        fruitsDec: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_botgarden.fruitsDec.name',
                defaultMessage: 'Fruits Dec',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
      },
      ...extensions['ucbnh-collectionobject'].fields,
    },
  };
};
