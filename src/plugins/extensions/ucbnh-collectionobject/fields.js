import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    CheckboxInput,
    CompoundInput,
    DateInput,
    OptionPickerInput,
    StructuredDateInput,
    TextInput,
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_BOOL,
    DATA_TYPE_DATE,
    DATA_TYPE_INT,
    DATA_TYPE_STRUCTURED_DATE,
  } = configContext.dataTypes;

  const {
    extensions,
  } = configContext.config;

  return {
    'ns2:collectionobjects_naturalhistory': {
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
      localNameGroupList: {
        [config]: {
          view: {
            type: CompoundInput,
          },
        },
        localNameGroup: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_naturalhistory.localNameGroup.name',
                defaultMessage: 'Local name',
              },
            }),
            repeating: true,
            view: {
              type: CompoundInput,
              props: {
                tabular: true,
              },
            },
          },
          localName: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_naturalhistory.localName.fullName',
                  defaultMessage: 'Local name',
                },
                name: {
                  id: 'field.collectionobjects_naturalhistory.localName.name',
                  defaultMessage: 'Name',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
          localNameLanguage: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_naturalhistory.localNameLanguage.fullName',
                  defaultMessage: 'Local name language',
                },
                name: {
                  id: 'field.collectionobjects_naturalhistory.localNameLanguage.name',
                  defaultMessage: 'Language',
                },
              }),
              view: {
                type: TermPickerInput,
                props: {
                  source: 'languages',
                },
              },
            },
          },
        },
      },
      hybridParentGroupList: {
        [config]: {
          view: {
            type: CompoundInput,
          },
        },
        hybridParentGroup: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_naturalhistory.hybridParentGroup.name',
                defaultMessage: 'Hybrid parent',
              },
            }),
            repeating: true,
            view: {
              type: CompoundInput,
              props: {
                tabular: true,
              },
            },
          },
          hybridParent: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_naturalhistory.hybridParent.fullName',
                  defaultMessage: 'Hybrid parent name',
                },
                name: {
                  id: 'field.collectionobjects_naturalhistory.hybridParent.name',
                  defaultMessage: 'Name',
                },
              }),
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'taxon/local',
                },
              },
            },
          },
          hybridParentQualifier: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_naturalhistory.hybridParentQualifier.fullName',
                  defaultMessage: 'Hybrid parent qualifier',
                },
                name: {
                  id: 'field.collectionobjects_naturalhistory.hybridParentQualifier.name',
                  defaultMessage: 'Qualifier',
                },
              }),
              view: {
                type: OptionPickerInput,
                props: {
                  source: 'taxonParentQualifiers',
                },
              },
            },
          },
        },
      },
      hybridName: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.collectionobjects_naturalhistory.hybridName.name',
              defaultMessage: 'Hybrid name',
            },
          }),
          view: {
            type: TextInput,
          },
        },
      },
      labelHeader: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.collectionobjects_naturalhistory.labelHeader.name',
              defaultMessage: 'Label header',
            },
          }),
          view: {
            type: TextInput,
          },
        },
      },
      labelFooter: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.collectionobjects_naturalhistory.labelFooter.name',
              defaultMessage: 'Label footer',
            },
          }),
          view: {
            type: TextInput,
          },
        },
      },
      objectCountNumber: {
        [config]: {
          dataType: DATA_TYPE_INT,
          messages: defineMessages({
            name: {
              id: 'field.collectionobjects_naturalhistory.objectCountNumber.name',
              defaultMessage: 'Sheet',
            },
          }),
          view: {
            type: TextInput,
          },
        },
      },
      typeSpecimenGroupList: {
        [config]: {
          view: {
            type: CompoundInput,
          },
        },
        typeSpecimenGroup: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_naturalhistory.typeSpecimenGroup.name',
                defaultMessage: 'Type specimen',
              },
            }),
            repeating: true,
            view: {
              type: CompoundInput,
              props: {
                tabular: true,
              },
            },
          },
          typeSpecimenKind: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_naturalhistory.typeSpecimenKind.name',
                  defaultMessage: 'Kind of type',
                },
              }),
              view: {
                type: OptionPickerInput,
                props: {
                  source: 'typeSpecimenKinds',
                },
              },
            },
          },
          typeSpecimenAssertionBy: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_naturalhistory.typeSpecimenAssertionBy.fullName',
                  defaultMessage: 'Type specimen asserted by',
                },
                name: {
                  id: 'field.collectionobjects_naturalhistory.typeSpecimenAssertionBy.name',
                  defaultMessage: 'Asserted by',
                },
              }),
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'organization/local',
                },
              },
            },
          },
          typeSpecimenReference: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_naturalhistory.typeSpecimenReference.fullName',
                  defaultMessage: 'Type specimen reference',
                },
                name: {
                  id: 'field.collectionobjects_naturalhistory.typeSpecimenReference.name',
                  defaultMessage: 'Reference',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
          typeSpecimenRefPage: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_naturalhistory.typeSpecimenRefPage.fullName',
                  defaultMessage: 'Type specimen reference page',
                },
                name: {
                  id: 'field.collectionobjects_naturalhistory.typeSpecimenRefPage.name',
                  defaultMessage: 'Page',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
          typeSpecimenBasionym: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_naturalhistory.typeSpecimenBasionym.fullName',
                  defaultMessage: 'Type specimen verified basionym',
                },
                name: {
                  id: 'field.collectionobjects_naturalhistory.typeSpecimenBasionym.name',
                  defaultMessage: 'Verified basionym',
                },
              }),
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'taxon/local',
                },
              },
            },
          },
          typeSpecimenNotes: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_naturalhistory.typeSpecimenNotes.fullName',
                  defaultMessage: 'Type specimen note',
                },
                name: {
                  id: 'field.collectionobjects_naturalhistory.typeSpecimenNotes.name',
                  defaultMessage: 'Note',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
        },
      },
      donor: {
        [config]: {
          messages: defineMessages({
            fullName: {
              id: 'field.collectionobjects_naturalhistory.donor.fullName',
              defaultMessage: 'Donor name',
            },
            name: {
              id: 'field.collectionobjects_naturalhistory.donor.name',
              defaultMessage: 'Name',
            },
          }),
          view: {
            type: AutocompleteInput,
            props: {
              source: 'organization/local',
            },
          },
        },
      },
      donorDateGroup: {
        [config]: {
          dataType: DATA_TYPE_STRUCTURED_DATE,
          messages: defineMessages({
            fullName: {
              id: 'field.collectionobjects_naturalhistory.donorDateGroup.fullName',
              defaultMessage: 'Donor date',
            },
            name: {
              id: 'field.collectionobjects_naturalhistory.donorDateGroup.name',
              defaultMessage: 'Date',
            },
          }),
          view: {
            type: StructuredDateInput,
          },
        },
        ...extensions.structuredDate.fields,
      },
      donorNote: {
        [config]: {
          messages: defineMessages({
            fullName: {
              id: 'field.collectionobjects_naturalhistory.donorNote.fullName',
              defaultMessage: 'Donor note',
            },
            name: {
              id: 'field.collectionobjects_naturalhistory.donorNote.name',
              defaultMessage: 'Note',
            },
          }),
          view: {
            type: TextInput,
          },
        },
      },
      accessionDate: {
        [config]: {
          dataType: DATA_TYPE_DATE,
          messages: defineMessages({
            name: {
              id: 'field.collectionobjects_naturalhistory.accessionDate.name',
              defaultMessage: 'Accession date',
            },
          }),
          view: {
            type: DateInput,
          },
        },
      },
      requestedBy: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.collectionobjects_naturalhistory.requestedBy.name',
              defaultMessage: 'Requested by',
            },
          }),
          view: {
            type: AutocompleteInput,
            props: {
              source: 'person/local',
            },
          },
        },
      },
      source: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.collectionobjects_naturalhistory.source.name',
              defaultMessage: 'Source',
            },
          }),
          view: {
            type: TextInput,
          },
        },
      },
      cultivated: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.collectionobjects_naturalhistory.cultivated.name',
              defaultMessage: 'Cultivated',
            },
          }),
          view: {
            type: OptionPickerInput,
            props: {
              source: 'booleans',
            },
          },
        },
      },
      annotationGroupList: {
        [config]: {
          view: {
            type: CompoundInput,
          },
        },
        annotationGroup: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_naturalhistory.annotationGroup.name',
                defaultMessage: 'Annotation',
              },
            }),
            repeating: true,
            view: {
              type: CompoundInput,
              props: {
                tabular: true,
              },
            },
          },
          annotationType: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_naturalhistory.annotationType.fullName',
                  defaultMessage: 'Annotation type',
                },
                name: {
                  id: 'field.collectionobjects_naturalhistory.annotationType.name',
                  defaultMessage: 'Type',
                },
              }),
              view: {
                type: OptionPickerInput,
                props: {
                  source: 'annotationTypes',
                },
              },
            },
          },
          annotationNote: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_naturalhistory.annotationNote.fullName',
                  defaultMessage: 'Annotation note',
                },
                name: {
                  id: 'field.collectionobjects_naturalhistory.annotationNote.name',
                  defaultMessage: 'Note',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
          annotationDate: {
            [config]: {
              dataType: DATA_TYPE_DATE,
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_naturalhistory.annotationDate.fullName',
                  defaultMessage: 'Annotation date',
                },
                name: {
                  id: 'field.collectionobjects_naturalhistory.annotationDate.name',
                  defaultMessage: 'Date',
                },
              }),
              view: {
                type: DateInput,
              },
            },
          },
          annotationAuthor: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_naturalhistory.annotationAuthor.fullName',
                  defaultMessage: 'Annotation author',
                },
                name: {
                  id: 'field.collectionobjects_naturalhistory.annotationAuthor.name',
                  defaultMessage: 'Author',
                },
              }),
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'person/local',
                },
              },
            },
          },
        },
      },
      rare: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.collectionobjects_naturalhistory.rare.name',
              defaultMessage: 'Rare',
            },
          }),
          view: {
            type: OptionPickerInput,
            props: {
              source: 'booleans',
            },
          },
        },
      },
      provenanceType: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.collectionobjects_naturalhistory.provenanceType.name',
              defaultMessage: 'Provenance type',
            },
          }),
          view: {
            type: OptionPickerInput,
            props: {
              source: 'provenanceTypes',
            },
          },
        },
      },
      distribution: {
        [config]: {
          dataType: DATA_TYPE_BOOL,
          messages: defineMessages({
            name: {
              id: 'field.collectionobjects_naturalhistory.distribution.name',
              defaultMessage: 'Distribution',
            },
          }),
          view: {
            type: CheckboxInput,
          },
        },
      },
      fieldCollectionNumberAssignor: { // KEEP
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.collectionobjects_naturalhistory.fieldCollectionNumberAssignor.name',
              defaultMessage: 'Field collection number assignor',
            },
          }),
          view: {
            type: AutocompleteInput,
            props: {
              source: 'organization/local',
            },
          },
        },
      },
      associatedTaxaGroupList: {
        [config]: {
          view: {
            type: CompoundInput,
          },
        },
        associatedTaxaGroup: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_naturalhistory.associatedTaxaGroupList.name',
                defaultMessage: 'Associated taxa',
              },
            }),
            repeating: true,
            view: {
              type: CompoundInput,
              props: {
                tabular: true,
              },
            },
          },
          associatedTaxon: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_naturalhistory.associatedTaxon.fullName',
                  defaultMessage: 'Associated taxon scientific name',
                },
                name: {
                  id: 'field.collectionobjects_naturalhistory.associatedTaxon.name',
                  defaultMessage: 'Scientific name',
                },
              }),
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'taxon/local',
                },
              },
            },
          },
          commonName: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_naturalhistory.commonName.fullName',
                  defaultMessage: 'Associated taxon common name',
                },
                name: {
                  id: 'field.collectionobjects_naturalhistory.commonName.name',
                  defaultMessage: 'Common name',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
          interaction: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_naturalhistory.interaction.fullName',
                  defaultMessage: 'Associated taxon interaction',
                },
                name: {
                  id: 'field.collectionobjects_naturalhistory.interaction.name',
                  defaultMessage: 'Interaction',
                },
              }),
              view: {
                type: OptionPickerInput,
                props: {
                  source: 'associatedTaxaInteractions',
                },
              },
            },
          },
        },
      },
      vegetationType: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.collectionobjects_naturalhistory.vegetationType.name',
              defaultMessage: 'Vegetation type',
            },
          }),
          view: {
            type: TermPickerInput,
            props: {
              source: 'collectionobjectvegetationtype',
            },
          },
        },
      },
      accessionUseGroupList: {
        [config]: {
          view: {
            type: CompoundInput,
          },
        },
        accessionUseGroup: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_naturalhistory.accessionUseGroup.name',
                defaultMessage: 'Accession use',
              },
            }),
            repeating: true,
            view: {
              type: CompoundInput,
            },
          },
          useType: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_naturalhistory.useType.fullName',
                  defaultMessage: 'Accession use type',
                },
                name: {
                  id: 'field.collectionobjects_naturalhistory.useType.name',
                  defaultMessage: 'Use type',
                },
              }),
              view: {
                type: OptionPickerInput,
                props: {
                  source: 'accessionUseTypes',
                },
              },
            },
          },
          usedIn: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_naturalhistory.usedIn.fullName',
                  defaultMessage: 'Accession used in',
                },
                name: {
                  id: 'field.collectionobjects_naturalhistory.usedIn.name',
                  defaultMessage: 'Used in',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
          materialType: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_naturalhistory.materialType.fullName',
                  defaultMessage: 'Accession use material type',
                },
                name: {
                  id: 'field.collectionobjects_naturalhistory.materialType.name',
                  defaultMessage: 'Material type',
                },
              }),
              view: {
                type: TermPickerInput,
                props: {
                  source: 'collectionobjectmaterialtype',
                },
              },
            },
          },
          requestDate: {
            [config]: {
              dataType: DATA_TYPE_DATE,
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_naturalhistory.requestDate.fullName',
                  defaultMessage: 'Accession use request date',
                },
                name: {
                  id: 'field.collectionobjects_naturalhistory.requestDate.name',
                  defaultMessage: 'Request date',
                },
              }),
              view: {
                type: DateInput,
              },
            },
          },
          filledDate: {
            [config]: {
              dataType: DATA_TYPE_DATE,
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_naturalhistory.filledDate.fullName',
                  defaultMessage: 'Accession use filled date',
                },
                name: {
                  id: 'field.collectionobjects_naturalhistory.filledDate.name',
                  defaultMessage: 'Filled date',
                },
              }),
              view: {
                type: DateInput,
              },
            },
          },
          useNotes: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_naturalhistory.useNotes.fullName',
                  defaultMessage: 'Accession use note',
                },
                name: {
                  id: 'field.collectionobjects_naturalhistory.useNotes.name',
                  defaultMessage: 'Note',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
        },
      },
    },
  };
};
