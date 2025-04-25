export default (configContext) => {
  const {
    AutocompleteInput,
    TextInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    extensions,
  } = configContext.config;

  return {
    'ns2:collectionobjects_naturalhistory': {
      source: {
        [config]: {
          searchView: {
            type: TextInput,
            props: {
              multiline: false,
            },
          },
          view: {
            props: {
              multiline: true,
            },
          },
        },
      },
      taxonomicIdentGroupList: {
        taxonomicIdentGroup: {
          identKind: {
            [config]: {
              view: {
                props: {
                  source: 'ucbgTaxonIdentKinds',
                },
              },
            },
          },
          identBy: {
            [config]: {
              view: {
                props: {
                  source: 'person/local,organization/group',
                },
              },
            },
          },
        },
      },
      fieldCollectionNumberAssignor: {
        [config]: {
          view: {
            type: AutocompleteInput,
            props: {
              source: 'person/local,organization/collector',
            },
          },
        },
      },
      provenanceType: {
        [config]: {
          view: {
            props: {
              source: 'ucbgProvenanceTypes',

            },
          },
        },
      },
      typeSpecimenGroupList: {
        typeSpecimenGroup: {
          typeSpecimenAssertionBy: {
            [config]: {
              view: {
                props: {
                  source: 'person/local',
                },
              },
            },
          },
        },
      },
      ...extensions.locality.fields,
    },
  };
};
