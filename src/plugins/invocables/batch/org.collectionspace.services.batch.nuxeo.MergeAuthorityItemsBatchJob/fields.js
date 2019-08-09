export default (configContext) => {
  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    params: {
      targetCSID: {
        [config]: {
          view: {
            props: {
              source: 'citation/local,citation/worldcat,concept/class,concept/conservation,concept/associated,concept/research,location/local,organization/local,organization/group,organization/collector,person/local,place/local,taxon/local,taxon/common,taxon/plantsales,work/local,work/cona',
              showQuickAdd: false,
            },
          },
        },
      },
    },
  };
};
