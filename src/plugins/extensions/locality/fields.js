import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    CompoundInput,
    OptionPickerInput,
    StructuredDateInput,
    TextInput,
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_FLOAT,
  } = configContext.dataTypes;

  const {
    extensions,
  } = configContext.config;

  return {
    localityGroupList: {
      localityGroup: {
        fieldLocCounty: {
          [config]: {
            view: {
              type: TermPickerInput,
              props: {
                source: 'county',
              },
            },
          },
        },
        fieldLocState: {
          [config]: {
            view: {
              type: TermPickerInput,
              props: {
                source: 'state',
              },
            },
          },
        },
        fieldLocCountry: {
          [config]: {
            view: {
              type: TermPickerInput,
              props: {
                source: 'country',
              },
            },
          },
        },
        fieldLocHigherGeography: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.ext.locality.fieldLocHigherGeography.name',
                defaultMessage: 'casafsdsfdsds geography',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'HigherGeography',
              },
            },
          },
        },
        decimalLatitude: {
          [config]: {
            dataType: DATA_TYPE_FLOAT,
            messages: defineMessages({
              name: {
                id: 'field.ext.locality.decimalLatitude.name',
                defaultMessage: 'Decimal latitude',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        decimalLongitude: {
          [config]: {
            dataType: DATA_TYPE_FLOAT,
            messages: defineMessages({
              name: {
                id: 'field.ext.locality.decimalLongitude.name',
                defaultMessage: 'Decimal longitude',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
      },
    },
  };
};
