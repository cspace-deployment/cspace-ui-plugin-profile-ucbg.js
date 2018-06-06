export default (configContext) => {
  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    'ns2:taxon_naturalhistory': {
      plantAttributesGroupList: {
        plantAttributesGroup: {
          conservationOrganization: {
            [config]: {
              view: {
                props: {
                  source: 'concept/conservation_ca',
                },
              },
            },
          },
        },
      },
    },
  };
};
