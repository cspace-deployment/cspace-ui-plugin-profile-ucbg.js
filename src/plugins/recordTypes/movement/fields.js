import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    DateInput,
    TermPickerInput,
    OptionPickerInput,
    TextInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_DATE,
    DATA_TYPE_FLOAT,
    DATA_TYPE_INT,
  } = configContext.dataTypes;

  return {
    document: {
      'ns2:movements_common': {
        currentLocation: {
          [config]: {
            required: false,
            view: {
              props: {
                source: 'location/local',
              },
            },
          },
        },
        reasonForMove: {
          [config]: {
            view: {
              type: TermPickerInput,
              props: {
                source: 'actionCode',
              },
            },
          },
        },
      },
      'ns2:movements_botgarden': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/movement/local/botgarden',
          },
        },
        previousLocation: {
          [config]: {
            view: {
              type: AutocompleteInput,
              props: {
                source: 'location/local',
              },
            },
          },
        },
        labelRequested: {
          [config]: {
            defaultValue: 'No',
            messages: defineMessages({
              name: {
                id: 'field.movements_botgarden.labelRequested.name',
                defaultMessage: 'Requested',
              },
              fullName: {
                id: 'field.movements_botgarden.labelRequested.fullName',
                defaultMessage: 'Label requested',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'labelRequestedValues',
              },
            },
          },
        },
        labelSize: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.movements_botgarden.labelSize.name',
                defaultMessage: 'Size',
              },
              fullName: {
                id: 'field.movements_botgarden.labelSize.fullName',
                defaultMessage: 'Label size',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'LabelSize',
              },
            },
          },
        },
        labelStandType: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.movements_botgarden.labelStandType.name',
                defaultMessage: 'Stand type',
              },
              fullName: {
                id: 'field.movements_botgarden.labelStandType.fullName',
                defaultMessage: 'Label stand type',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'standType',
              },
            },
          },
        },
        labelCount: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.movements_botgarden.labelCount.name',
                defaultMessage: 'Count',
              },
              fullName: {
                id: 'field.movements_botgarden.labelCount.fullName',
                defaultMessage: 'Label count',
              },
            }),
            dataType: DATA_TYPE_INT,
            view: {
              type: TextInput,
            },
          },
        },
        decimalLatitude: {
          [config]: {
            dataType: DATA_TYPE_FLOAT,
            messages: defineMessages({
              name: {
                id: 'field.movements_botgarden.decimalLatitude.name',
                defaultMessage: 'Decimal latitude',
              },
              fullName: {
                id: 'field.movements_botgarden.decimalLatitude.fullName',
                defaultMessage: 'Garden Coordinate Decimal latitude',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        decimalLongitude: {
          [config]: {
            dataType: DATA_TYPE_FLOAT,
            messages: defineMessages({
              name: {
                id: 'field.movements_botgarden.decimalLongitude.name',
                defaultMessage: 'Decimal longitude',
              },
              fullName: {
                id: 'field.movements_botgarden.decimalLongitude.fullName',
                defaultMessage: 'Garden Coordinate Decimal longitude',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        geodeticDatum: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.movements_botgarden.geodeticDatum.name',
                defaultMessage: 'Datum',
              },
              fullName: {
                id: 'field.movements_botgarden.geodeticDatum.fullName',
                defaultMessage: 'Garden Coordinate Datum',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'geodeticDatums',
              },
            },
          },
        },
        coordUncertaintyInMeters: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.movements_botgarden.coordUncertaintyInMeters.name',
                defaultMessage: 'Uncertainty (m)',
              },
              fullName: {
                id: 'field.movements_botgarden.coordUncertaintyInMeters.fullName',
                defaultMessage: 'Garden Coordinate Uncertainty (m)',
              },
            }),
            dataType: DATA_TYPE_INT,
            view: {
              type: TextInput,
            },
          },
        },
        pointRadiusSpatialFit: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.movements_botgarden.pointRadiusSpatialFit.name',
                defaultMessage: 'Point radius spatial fit',
              },
              fullName: {
                id: 'field.movements_botgarden.pointRadiusSpatialFit.fullName',
                defaultMessage: 'Garden Coordinate Point radius spatial fit',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        geoReferencedBy: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.movements_botgarden.geoReferencedBy.name',
                defaultMessage: 'Georeferenced by',
              },
              fullName: {
                id: 'field.movements_botgarden.geoReferencedBy.fullName',
                defaultMessage: 'Garden Coordinate Georeferenced by',
              },
            }),
            view: {
              type: AutocompleteInput,
              props: {
                source: 'person/local,person/shared',
              },
            },
          },
        },
        geoRefDate: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.movements_botgarden.geoRefDate.name',
                defaultMessage: 'Date',
              },
              fullName: {
                id: 'field.movements_botgarden.geoRefDate.fullName',
                defaultMessage: 'Garden Coordinate Date',
              },
            }),
            dataType: DATA_TYPE_DATE,
            view: {
              type: DateInput,
            },
          },
        },
        geoRefProtocol: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.movements_botgarden.geoRefProtocol.name',
                defaultMessage: 'Protocol',
              },
              fullName: {
                id: 'field.movements_botgarden.geoRefProtocol.fullName',
                defaultMessage: 'Garden Coordinate Protocol',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'geoRefProtocol',
              },
            },
          },
        },
        geoRefSource: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.movements_botgarden.geoRefSource.name',
                defaultMessage: 'Source',
              },
              fullName: {
                id: 'field.movements_botgarden.geoRefSource.fullName',
                defaultMessage: 'Garden Coordinate Source',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'geoRefSource',
              },
            },
          },
        },
        geoRefVerificationStatus: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.movements_botgarden.geoRefVerificationStatus.name',
                defaultMessage: 'Verification',
              },
              fullName: {
                id: 'field.movements_botgarden.geoRefVerificationStatus.fullName',
                defaultMessage: 'Garden Coordinate Verification',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'geoRefVerificationStatus',
              },
            },
          },
        },
        geoRefRemarks: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.movements_botgarden.geoRefRemarks.name',
                defaultMessage: 'Remarks',
              },
              fullName: {
                id: 'field.movements_botgarden.geoRefRemarks.fullName',
                defaultMessage: 'Garden Coordinate Remarks',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        geoRefPlaceName: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.movements_botgarden.geoRefPlaceName.name',
                defaultMessage: 'Place name',
              },
              fullName: {
                id: 'field.movements_botgarden.geoRefPlaceName.fullName',
                defaultMessage: 'Garden Coordinate Place name',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
      },
    },
  };
};
