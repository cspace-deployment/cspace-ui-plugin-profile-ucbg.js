import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    DateInput,
    OptionPickerInput,
    TextInput,
    CheckboxInput,
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_DATE,
    DATA_TYPE_BOOL,
  } = configContext.dataTypes;

  const {
    extensions,
  } = configContext.config;

  return {
    document: {
      'ns2:collectionobjects_common': {
        objectNumber: {
          [config]: {
            view: {
              props: {
                source: 'uc-accession,jeps-accession',
              },
            },
          },
        },
        briefDescriptions: {
          briefDescription: {
            [config]: {
              view: {
                props: {
                  multiline: false,
                },
              },
            },
          },
        },
        forms: {
          form: {
            [config]: {
              view: {
                props: {
                  source: 'ucbgForms',
                },
              },
            },
          },
        },
        phase: {
          [config]: {
            view: {
              props: {
                source: 'ucbgPhases',
              },
            },
          },
        },
        referenceGroupList: {
          referenceGroup: {
            reference: {
              [config]: {
                view: {
                  type: TextInput,
                  props: null,
                },
              },
            },
          },
        },
        recordStatus: {
          [config]: {
            view: {
              props: {
                source: 'ucbgRecordStatuses',
              },
            },
          },
        },
        assocConceptGroupList: {
          assocConceptGroup: {
            assocConcept: {
              [config]: {
                view: {
                  type: TextInput,
                  props: null,
                },
              },
            },
          },
        },
        fieldCollectors: {
          fieldCollector: {
            [config]: {
              view: {
                props: {
                  source: 'organization/collector',
                },
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
            defaultValue: false,
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_botgarden',
                defaultMessage: 'Dead flag',
              },
            }),
            searchView: {
              type: OptionPickerInput,
              props: {
                readOnly: false,
                source: 'booleans',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'booleans',
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
            searchView: {
              type: DateInput,
              props: {
                readOnly: false,
              },
            },
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
        handwritten: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_botgarden.handwritten.name',
                defaultMessage: 'Handwritten',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'trivalentValues',
              },
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
                source: 'yesNoValues',
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
              type: TermPickerInput,
              props: {
                source: 'propagationhist',
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
                source: 'breedingSystems',
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
            defaultValue: 'No',
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_botgarden.flowersJan.name',
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
            defaultValue: 'No',
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_botgarden.flowersFeb.name',
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
            defaultValue: 'No',
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_botgarden.flowersMar.name',
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
            defaultValue: 'No',
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_botgarden.flowersApr.name',
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
            defaultValue: 'No',
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_botgarden.flowersMay.name',
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
            defaultValue: 'No',
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_botgarden.flowersJun.name',
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
            defaultValue: 'No',
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_botgarden.flowersJul.name',
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
            defaultValue: 'No',
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_botgarden.flowersAug.name',
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
            defaultValue: 'No',
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_botgarden.flowersSep.name',
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
            defaultValue: 'No',
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_botgarden.flowersOct.name',
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
            defaultValue: 'No',
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_botgarden.flowersNov.name',
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
            defaultValue: 'No',
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_botgarden.flowersDec.name',
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
