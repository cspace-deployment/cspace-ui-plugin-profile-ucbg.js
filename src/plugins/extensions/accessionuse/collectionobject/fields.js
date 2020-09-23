export default (configContext) => {
  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    'ns2:collectionobjects_accessionuse': {
      accessionUseGroupList: {
        accessionUseGroup: {
          accessionUseType: {
            [config]: {
              view: {
                props: {
                  source: 'AcessUseType',
                },
              },
            },
          },
        },
      },
    },
  };
};
