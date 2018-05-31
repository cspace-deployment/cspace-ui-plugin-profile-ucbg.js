import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    OptionPickerInput,
    TextInput,
    AutocompleteInput,
    CheckboxInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_BOOL,
  } = configContext.dataTypes;

  // const {
  //   extensions,
  // } = configContext.config;

  return {
    document: {
      'ns2:loansout_botgarden': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/loanout/local/botgarden',
          },
        },
        collector: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.loansout_botgarden.collectorList.name',
                defaultMessage: 'Voucher collector',
              },
            }),
            view: {
              type: AutocompleteInput,
              props: {
                source: 'person/local',
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
                source: 'hortWilds',
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
              props: {
                multiline: true,
              },
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
                defaultMessage: 'Voucher sheet accession number',
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
        sterile: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.loansout_botgarden.sterile.name',
                defaultMessage: 'sterile',
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
                defaultMessage: 'fertile',
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
                defaultMessage: 'flowering',
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
                defaultMessage: 'fruiting',
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
                defaultMessage: 'inSpore',
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
            view: {
              props: {
                source: 'voucher',
              },
            },
          },
        },
        loanPurpose: {
          [config]: {
            view: {
              type: TextInput,
              props: {
                multiline: true,
              },
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
    },
  };
};
