export default (configContext) => {
  const {
    AutocompleteInput,
    OptionPickerInput,
    TermPickerInput,
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
      annotationGroupList: {
        annotationGroup: {
          annotationAuthor: {
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
        },
      },
      fieldCollectionNumberAssignor: {
        [config]: {
          view: {
            type: AutocompleteInput,
            props: {
              source: 'organization/local',
            },
          },
        },
      },
      accessionUseGroupList: {
        accessionUseGroup: {
          useType: {
            [config]: {
              view: {
                type: TermPickerInput,
                props: {
                  source: 'AcessUseType',
                },
              },
            },
          },
          usedIn: {
            [config]: {
              view: {
                type: OptionPickerInput,
                props: {
                  source: 'concept/class,concept/research',
                },
              },
            },
          },
          useNotes: {
            [config]: {
              view: {
                props: {
                  multiline: true,
                },
              },
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
      ...extensions.locality.fields,
    },
  };
};
