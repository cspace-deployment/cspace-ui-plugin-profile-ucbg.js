import { defineMessages } from 'react-intl';

export default {
  ucbgNumberTypes: {
    values: [
      'Unknown',
      'Collector Number',
      'Exsiccatae Number',
      'GenBank Code',
      'Old institution accession number',
      'Other Label Number',
      'U.C. Botanical Garden Accession Number',
    ],
    messages: defineMessages({
      Unknown: {
        id: 'option.ucbgNumberTypes.Unknown',
        defaultMessage: 'unknown',
      },
      'Collector Number': {
        id: 'option.ucbgNumberTypes.Collector Number',
        defaultMessage: 'collector number',
      },
      'Exsiccatae Number': {
        id: 'option.ucbgNumberTypes.Exsiccatae Number',
        defaultMessage: 'exsiccatae number',
      },
      'GenBank Code': {
        id: 'option.ucbgNumberTypes.GenBank Code',
        defaultMessage: 'GenBank code',
      },
      'Old institution accession number': {
        id: 'option.ucbgNumberTypes.Old institution accession number',
        defaultMessage: 'old institution accession number',
      },
      'Other Label Number': {
        id: 'option.ucbgNumberTypes.Other Label Number',
        defaultMessage: 'other label number',
      },
      'U.C. Botanical Garden Accession Number': {
        id: 'option.ucbgNumberTypes.U.C. Botanical Garden Accession Number',
        defaultMessage: 'U.C. Botanical Garden accession number',
      },
    }),
  },
  ucbgOtherNumberTypes: {
    values: [
      'ABG – Atlanta Botanical Garden',
      'Arnold Arboretum of Harvard University',
      'BGCI – Botanic Gardens Conservation International',
      'BLM – Bureau of Land Management',
      'Cal BG – California Botanic Garden',
      'CaPR – California Plant Rescue',
      'CDFW – California Department of Fish and Wildlife',
      'CNPS – California Native Plant Society',
      'Confiscation Number',
      'GenBank Code',
      'GGGP – Gardens of Golden Gate Park',
      'HBG – Huntington Botanical Gardens',
      'ISI – International Succulent Introductions',
      'MBG – Missouri Botanical Garden',
      'NPS – National Park Service',
      'Other Botanic Garden',
      'QBG – Quarryhill Botanical Garden',
      'RPBG – Regional Parks Botanic Garden',
      'RSA – Rancho Santa Ana Botanic Garden',
      'RSBG – Rhododendron Species Botanical Garden',
      'RSF – Rhododendron Species Foundation',
      'SFBG – San Francisco Botanical Garden',
      'Smith College Botanic Garden',
      'Sonoma Botanical Garden',
      'Strybing Arboretum',
      'UCSC – UC Santa Cruz Arboretum',
      'US Forest Service',
      'USFWS – US Fish and Wildlife Service',
    ],
  },
  ucbgCollections: {
    values: [
      'Unknown',
      'Jepson Herbarium',
      'University of California Herbarium',
      'University of California- Santa Barbara',
      'Herbarium (UCSC)',
      'University of California',
      'DHN',
    ],
    messages: defineMessages({
      Unknown: {
        id: 'option.ucbgCollections.Unknown',
        defaultMessage: 'unknown',
      },
    }),
  },
  ucbgRecordStatuses: {
    values: [
      'none',
      'partial',
      'complete',
      'unknown',
    ],
  },
  ucbgPhases: {
    values: [
      'Unknown',
      'Cone',
      'Flowering',
      'Flowering/Fruiting',
      'Fruiting',
      'Gametophyte',
      'Juvenile',
      'Spores/Sporangia',
      'Sporophyte',
      'Tetrasporophyte',
      'Vegetative (non-reproductive)',
    ],
    messages: defineMessages({
      Unknown: {
        id: 'option.ucbgPhases.Unknown',
        defaultMessage: 'unknown',
      },
      Cone: {
        id: 'option.ucbgPhases.Cone',
        defaultMessage: 'cone',
      },
      Flowering: {
        id: 'option.ucbgPhases.Flowering',
        defaultMessage: 'flowering',
      },
      'Flowering/Fruiting': {
        id: 'option.ucbgPhases.Flowering/Fruiting',
        defaultMessage: 'flowering/fruiting',
      },
      Fruiting: {
        id: 'option.ucbgPhases.Fruiting',
        defaultMessage: 'fruiting',
      },
      Gametophyte: {
        id: 'option.ucbgPhases.Gametophyte',
        defaultMessage: 'gametophyte',
      },
      Juvenile: {
        id: 'option.ucbgPhases.Juvenile',
        defaultMessage: 'juvenile',
      },
      'Spores/Sporangia': {
        id: 'option.ucbgPhases.Spores/Sporangia',
        defaultMessage: 'spores/sporangia',
      },
      Sporophyte: {
        id: 'option.ucbgPhases.Sporophyte',
        defaultMessage: 'sporophyte',
      },
      Tetrasporophyte: {
        id: 'option.ucbgPhases.Tetrasporophyte',
        defaultMessage: 'tetrasporophyte',
      },
      'Vegetative (non-reproductive)': {
        id: 'option.ucbgPhases.Vegetative (non-reproductive)',
        defaultMessage: 'vegetative (non-reproductive)',
      },
    }),
  },
  ucbgForms: {
    values: [
      'Unknown',
      'Mounted on Paper',
      'Stored in a Box or Bag',
      'Preserved in Liquid',
      'Microscope Slide Preparation',
      'Photograph',
      'Illustration',
      'Photocopy',
      'Box',
      'Bag',
      'Map',
    ],
    messages: defineMessages({
      Unknown: {
        id: 'option.ucbgForms.Unknown',
        defaultMessage: 'unknown',
      },
      'Mounted on Paper': {
        id: 'option.ucbgForms.Mounted on Paper',
        defaultMessage: 'mounted on paper',
      },
      'Stored in a Box or Bag': {
        id: 'option.ucbgForms.Stored in a Box or Bag',
        defaultMessage: 'stored in a box or bag',
      },
      'Preserved in Liquid': {
        id: 'option.ucbgForms.Preserved in Liquid',
        defaultMessage: 'preserved in liquid',
      },
      'Microscope Slide Preparation': {
        id: 'option.ucbgForms.Microscope Slide Preparation',
        defaultMessage: 'microscope slide preparation',
      },
      Photograph: {
        id: 'option.ucbgForms.Photograph',
        defaultMessage: 'photograph',
      },
      Illustration: {
        id: 'option.ucbgForms.Illustration',
        defaultMessage: 'illustration',
      },
      Photocopy: {
        id: 'option.ucbgForms.Photocopy',
        defaultMessage: 'photocopy',
      },
      Box: {
        id: 'option.ucbgForms.Box',
        defaultMessage: 'box',
      },
      Bag: {
        id: 'option.ucbgForms.Bag',
        defaultMessage: 'bag',
      },
      Map: {
        id: 'option.ucbgForms.Map',
        defaultMessage: 'map',
      },
    }),
  },
  breedingSystems: {
    values: [
      'male',
      'female',
      'both',
      'dioecious and unknown sex',
      'monoecious and self-compatible',
      'monoecious and self-incompatible',
      'agamospermy',
      'unknown',
    ],
  },
  flowerValues: {
    values: [
      'No',
      'Some',
      'Many',
    ],
    messages: defineMessages({
      No: {
        id: 'option.flowerValues.No',
        defaultMessage: 'no',
      },
      Some: {
        id: 'option.flowerValues.Some',
        defaultMessage: 'some',
      },
      Many: {
        id: 'option.flowerValues.Many',
        defaultMessage: 'many',
      },
    }),
  },
  propHistoryValues: {
    values: [
      'individual wild plant',
      'sexual reproduction',
      'open breeding',
      'controlled breeding',
      'isolated self-polinated',
      'derived asexually',
      'vegetative reproduction',
      'apomictic cloning',
      'unknown',
    ],
  },
};
