export default (configContext) => {
  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    document: {
      'ns2:uoc_common': {
        authorizationGroupList: {
          authorizationGroup: {
            authorizedBy: {
              [config]: {
                view: {
                  props: {
                    source: 'person/local,person/shared,organization/local,organization/collector,organization/group',
                  },
                },
              },
            },
          },
        },
        userGroupList: {
          userGroup: {
            user: {
              [config]: {
                view: {
                  props: {
                    source: 'person/local,person/shared,organization/local,organization/collector,organization/group',
                  },
                },
              },
            },
            userInstitution: {
              [config]: {
                view: {
                  props: {
                    source: 'organization/local,organization/collector,organization/group',
                  },
                },
              },
            },
          },
        },
        locationList: {
          location: {
            [config]: {
              view: {
                props: {
                  source: 'organization/local,organization/collector,organization/group,place/local,place/shared,location/local',
                },
              },
            },
          },
        },
        occasionList: {
          occasion: {
            [config]: {
              view: {
                props: {
                  source: 'concept/associated,concept/class,concept/conservation,concept/research',
                },
              },
            },
          },
        },
        staffGroupList: {
          staffGroup: {
            staffName: {
              [config]: {
                view: {
                  props: {
                    source: 'person/local,person/shared,organization/local,organization/collector,organization/group',
                  },
                },
              },
            },
          },
        },
      },
    },
  };
};
