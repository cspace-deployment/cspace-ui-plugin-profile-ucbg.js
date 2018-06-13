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
                  source: 'concept/class_ca,concept/research_ca',
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
      ...extensions.locality.fields,
    },
  };
};
