export default (configContext) => {
  // const {
  //   TermPickerInput,
  // } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;


  const {
    extensions,
  } = configContext.config;

  return {
    document: {
      'ns2:objectexit_common': {
        exitNumber: {
          [config]: {
            required: false,
          },
        },
        // exitMethods: {
        //   exitMethod: {
        //     [config]: {
        //       view: {
        //         type: TermPickerInput,
        //         props: {
        //           source: 'DistributionMethod',
        //         },
        //       },
        //     },
        //   },
        // },
        // exitReason: {
        //   [config]: {
        //     view: {
        //       type: TermPickerInput,
        //       props: {
        //         source: 'DistributionReason',
        //       },
        //     },
        //   },
        // },
        depositor: {
          [config]: {
            view: {
              props: {
                source: 'organization/local',
              },
            },
          },
        },
      },
      ...extensions['ucbnh-objectexit'].fields,
    },
  };
};
