export default (configContext) => {
  const {
    configKey: config,
  } = configContext.configHelpers;

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
    },
  };
};
