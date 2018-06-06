export default (configContext) => {
  const {
    OptionPickerInput,
    TextInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    extensions,
  } = configContext.config;

  return {
    document: {
      'ns2:taxon_common': {
        taxonTermGroupList: {
          taxonTermGroup: {
            termType: {
              [config]: {
                view: {
                  props: {
                    source: 'ucbgTaxonTermTypes',
                  },
                },
              },
            },
            termStatus: {
              [config]: {
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'taxonTermStatuses',
                  },
                },
              },
            },
            termSource: {
              [config]: {
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'taxonTermSources',
                  },
                },
              },
            },
            taxonomicStatus: {
              [config]: {
                view: {
                  props: {
                    source: 'ucbgTaxonomicStatuses',
                  },
                },
              },
            },
          },
        },
        taxonRank: {
          [config]: {
            view: {
              props: {
                source: 'ucbgTaxonRanks',
              },
            },
          },
        },
        taxonCitationList: {
          taxonCitation: {
            [config]: {
              view: {
                type: TextInput,
                props: null,
              },
            },
          },
        },
        taxonAuthorGroupList: {
          taxonAuthorGroup: {
            taxonAuthor: {
              [config]: {
                view: {
                  props: {
                    source: 'person/local,organization/group_org',
                  },
                },
              },
            },
            taxonAuthorType: {
              [config]: {
                view: {
                  props: {
                    source: 'ucbgTaxonAuthorTypes',
                  },
                },
              },
            },
          },
        },
      },
      ...extensions['ucbnh-taxon'].fields,
    },
  };
};
