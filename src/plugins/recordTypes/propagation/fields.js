import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    CheckboxInput,
    CompoundInput,
    DateInput,
    TextInput,
    OptionPickerInput,
    StructuredDateInput,
    TermPickerInput,
    IDGeneratorInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    extensions,
  } = configContext.config;

  const {
    DATA_TYPE_STRUCTURED_DATE,
    DATA_TYPE_INT,
    DATA_TYPE_BOOL,
    DATA_TYPE_DATE,
  } = configContext.dataTypes;

  return {
    document: {
      [config]: {
        view: {
          type: CompoundInput,
          props: {
            defaultChildSubpath: 'ns2:propagations_common',
          },
        },
      },
      ...extensions.core.fields,
      'ns2:propagations_common': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/propagation',
          },
        },
        propNumber: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.propagations_common.propNumber.name',
                defaultMessage: 'Propagation Id',
              },
            }),
            required: true,
            searchView: {
              type: TextInput,
            },
            view: {
              type: IDGeneratorInput,
              props: {
                source: 'prop-number',
              },
            },
          },
        },
        propDate: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.propagations_common.propDate.name',
                defaultMessage: 'Propagation date',
              },
            }),
            dataType: DATA_TYPE_STRUCTURED_DATE,
            view: {
              type: StructuredDateInput,
            },
          },
        },
        propReason: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.propagations_common.propReason.name',
                defaultMessage: 'Reason for propagation',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'propReasons',
              },
            },
          },
        },
        propType: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.propagations_common.propType.name',
                defaultMessage: 'Propagation type',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'propagationType',
              },
            },
          },
        },
        propComments: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.propagations_common.propComments.name',
                defaultMessage: 'Comments',
              },
            }),
            view: {
              type: TextInput,
              props: {
                multiline: true,
              },
            },
          },
        },
        numStarted: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.propagations_common.numStarted.name',
                defaultMessage: 'Number started',
              },
            }),
            dataType: DATA_TYPE_INT,
            view: {
              type: TextInput,
            },
          },
        },
        scarStratGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          scarStratGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.propagations_common.scarStratGroup.name',
                  defaultMessage: 'Scarification/Stratification',
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
            scarStrat: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.propagations_common.scarStrat.name',
                    defaultMessage: 'Type',
                  },
                  fullName: {
                    id: 'field.propagations_common.scarStrat.fullName',
                    defaultMessage: 'Scarification/Stratification',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'scarStrat',
                  },
                },
              },
            },
            duration: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.propagations_common.duration.name',
                    defaultMessage: 'Duration',
                  },
                }),
                dataType: DATA_TYPE_INT,
                view: {
                  type: TextInput,
                },
              },
            },
            durationUnit: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.propagations_common.durationUnit.name',
                    defaultMessage: 'Unit',
                  },
                }),
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'durationUnits',
                  },
                },
              },
            },
          },
        },
        extraSeeds: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.propagations_common.extraSeeds.name',
                defaultMessage: 'Extra seeds?',
              },
            }),
            dataType: DATA_TYPE_BOOL,
            view: {
              type: CheckboxInput,
            },
          },
        },
        spores: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.propagations_common.spores.name',
                defaultMessage: 'Spore',
              },
            }),
            dataType: DATA_TYPE_BOOL,
            view: {
              type: CheckboxInput,
            },
          },
        },
        cuttingType: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.propagations_common.cuttingType.name',
                defaultMessage: 'Cutting type',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'cutType',
              },
            },
          },
        },
        hormone: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.propagations_common.hormone.name',
                defaultMessage: 'Hormone',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'propHormones',
              },
            },
          },
        },
        concentration: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.propagations_common.concentration.name',
                defaultMessage: 'Concentration',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        wounded: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.propagations_common.wounded.name',
                defaultMessage: 'Wounded?',
              },
            }),
            dataType: DATA_TYPE_BOOL,
            view: {
              type: CheckboxInput,
            },
          },
        },
        plantType: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.propagations_common.plantType.name',
                defaultMessage: 'Plant type',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'propPlantType',
              },
            },
          },
        },
        germinationDate: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.propagations_common.germinationDate.name',
                defaultMessage: 'Germination/rooting date',
              },
            }),
            dataType: DATA_TYPE_DATE,
            view: {
              type: DateInput,
            },
          },
        },
        successRate: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.propagations_common.successRate.name',
                defaultMessage: 'Success rate',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        propActivityGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          propActivityGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.propagations_common.propActivityGroup.name',
                  defaultMessage: 'Proagation activities',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
              },
            },
            order: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.propagations_common.order.name',
                    defaultMessage: 'Order',
                  },
                }),
                dataType: DATA_TYPE_INT,
                view: {
                  type: TextInput,
                },
              },
            },
            activityDate: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.propagations_common.activityDate.name',
                    defaultMessage: 'Activity date',
                  },
                }),
                dataType: DATA_TYPE_STRUCTURED_DATE,
                view: {
                  type: StructuredDateInput,
                },
              },
            },
            activityType: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.propagations_common.activityType.name',
                    defaultMessage: 'Type',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'propActivityType',
                  },
                },
              },
            },
            propCount: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.propagations_common.propCount.name',
                    defaultMessage: 'Propagule count',
                  },
                }),
                dataType: DATA_TYPE_INT,
                view: {
                  type: TextInput,
                },
              },
            },
            medium: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.propagations_common.medium.name',
                    defaultMessage: 'Medium',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'concept/associated',
                  },
                },
              },
            },
            potSize: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.propagations_common.potSize.name',
                    defaultMessage: 'Pot size',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'potSize',
                  },
                },
              },
            },
            nurseryLocation: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.propagations_common.nurseryLocation.name',
                    defaultMessage: 'Location in nursery',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'location/local',
                  },
                },
              },
            },
            conditions: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.propagations_common.conditions.name',
                    defaultMessage: 'Conditions',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'propConditions',
                  },
                },
              },
            },
            chemicalApplied: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.propagations_common.chemicalApplied.name',
                    defaultMessage: 'Chemical applied',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'propChemicals',
                  },
                },
              },
            },
            activityConcentration: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.propagations_common.activityConcentration.name',
                    defaultMessage: 'Concentration',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            activityComments: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.propagations_common.activityComments.name',
                    defaultMessage: 'Comments',
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
    },
  };
};
