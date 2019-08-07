import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    TextInput,
    OptionPickerInput,
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_INT,
  } = configContext.dataTypes;

  return {
    document: {
      'ns2:media_botgarden': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/media/local/botgarden',
          },
        },
        handwritten: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.media_botgarden.handwritten.name',
                defaultMessage: 'Handwritten label',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'trivalentValues',
              },
            },
          },
        },
        postToPublic: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.media_botgarden.postToPublic.name',
                defaultMessage: 'Post to public',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'yesNoValues',
              },
            },
          },
        },
        scientificTaxonomy: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.media_botgarden.scientificTaxonomy.name',
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
        imageNumber: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.media_botgarden.imageNumber.name',
                defaultMessage: 'Image number',
              },
            }),
            dataType: DATA_TYPE_INT,
            view: {
              type: TextInput,
            },
          },
        },
        plantMorphology: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.media_botgarden.plantMorphology.name',
                defaultMessage: 'Plant morphology',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'plantmorphology',
              },
            },
          },
        },
      },
    },
  };
};
