import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    OptionPickerInput,
  } = configContext.inputComponents;

  return {
    params: {
      briefDescription: {
        [config]: {
          view: {
            props: {
              multiline: false,
            },
          },
        },
      },
      fieldCollector: {
        [config]: {
          view: {
            props: {
              source: 'organization/collector',
            },
          },
        },
      },
      taxon: {
        [config]: {
          view: {
            props: {
              source: 'taxon/local,taxon/common,taxon/plantsales',
            },
          },
        },
      },
      provenanceType: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.BulkObjectEditBatchJob.provenanceType.name',
              defaultMessage: 'Provenance Type',
            },
          }),
          view: {
            type: OptionPickerInput,
            props: {
              source: 'ucbgProvenanceTypes',
            },
          },
        },
      },
    },
  };
};
