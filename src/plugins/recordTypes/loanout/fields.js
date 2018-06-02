import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    OptionPickerInput,
    TextInput,
    AutocompleteInput,
    CheckboxInput,
    CompoundInput,
  } = configContext.inputComponents;

  const {
    mergeStrategy,
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
      'ns2:loansout_botgarden': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/loanout/local/botgarden',
          },
        },
        collectorList: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.loansout_botgarden.collectorList.name',
                defaultMessage: 'Voucher collector',
              },
            }),
            repeating: true,
            view: {
              type: CompoundInput,
            },
          },
          collector: {
            [config]: {
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'person/local',
                },
              },
            },
          },
        },
        hortWild: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.loansout_botgarden.hortWild.name',
                defaultMessage: 'Horticultural/wild',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'hortWildValues',
              },
            },
          },
        },
        gardenLocation: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.loansout_botgarden.gardenLocation.name',
                defaultMessage: 'Garden location',
              },
            }),
            view: {
              type: AutocompleteInput,
              props: {
                source: 'location/local',
              },
            },
          },
        },
        fieldCollectionNote: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.loansout_botgarden.fieldCollectionNote',
                defaultMessage: 'Collection note',
              },
            }),
            view: {
              type: TextInput,
              props: {
                multiline: true,
              },
            },
          },
        },
        annotation: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.loansout_botgarden.annotation.name',
                defaultMessage: 'Annotation',
              },
            }),
            view: {
              type: TextInput,
              props: {
                multiline: true,
              },
            },
          },
        },
        sheetAccessionNumber: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.loansout_botgarden.sheetAccessionNumber.name',
                defaultMessage: 'Voucher sheet accession number',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        reviewComplete: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.loansout_botgarden.reviewComplete.name',
                defaultMessage: 'Voucher review complete',
              },
            }),
            dataType: DATA_TYPE_BOOL,
            view: {
              type: CheckboxInput,
            },
          },
        },
        labelRequested: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.loansout_botgarden.labelRequested.name',
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
        sterile: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.loansout_botgarden.sterile.name',
                defaultMessage: 'Sterile',
              },
            }),
            dataType: DATA_TYPE_BOOL,
            view: {
              type: CheckboxInput,
            },
          },
        },
        fertile: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.loansout_botgarden.fertile.name',
                defaultMessage: 'Fertile',
              },
            }),
            dataType: DATA_TYPE_BOOL,
            view: {
              type: CheckboxInput,
            },
          },
        },
        flowering: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.loansout_botgarden.flowering.name',
                defaultMessage: 'Flowering',
              },
            }),
            dataType: DATA_TYPE_BOOL,
            view: {
              type: CheckboxInput,
            },
          },
        },
        fruiting: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.loansout_botgarden.fruiting.name',
                defaultMessage: 'Fruiting',
              },
            }),
            dataType: DATA_TYPE_BOOL,
            view: {
              type: CheckboxInput,
            },
          },
        },
        inSpore: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.loansout_botgarden.inSpore.name',
                defaultMessage: 'In spore',
              },
            }),
            dataType: DATA_TYPE_BOOL,
            view: {
              type: CheckboxInput,
            },
          },
        },
      },
      'ns2:loansout_common': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/loanout',
          },
        },
        loanOutNumber: {
          [config]: {
            required: false,
            view: {
              props: {
                source: 'voucher',
              },
            },
          },
        },
        loanPurpose: {
          [config]: {
            searchView: {
              type: TextInput,
            },
            view: {
              type: TextInput,
              props: mergeStrategy.override({
                multiline: true,
              }),
            },
          },
        },
        borrower: {
          [config]: {
            view: {
              props: {
                source: 'organization/local,organization/shared',
              },
            },
          },
        },
      },
      ...extensions['ucbnh-loanout'].fields,
    },
  };
};
