import { computeDecimalLatLong } from './utils';

export default (configContext) => {
  const {
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    localityGroupList: {
      localityGroup: {
        [config]: {
          compute: computeDecimalLatLong,
        },
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
            view: {
              props: {
                readOnly: true,
              },
            },
          },
        },
        decimalLongitude: {
          [config]: {
            view: {
              props: {
                readOnly: true,
              },
            },
          },
        },
      },
    },
  };
};
