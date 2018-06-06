import { defineMessages } from 'react-intl';

export default {
  ucbgTaxonTermTypes: {
    values: [
      'Verified Taxonomic Name',
      'Taxon No Author Name',
      'Unverified Name',
      'Grex Name',
    ],
    messages: defineMessages({
      'Verified Taxonomic Name': {
        id: 'option.ucbgTaxonTermTypes.Verified Taxonomic Name',
        defaultMessage: 'verified taxonomic name',
      },
      'Taxon No Author Name': {
        id: 'option.ucbgTaxonTermTypes.Taxon No Author Name',
        defaultMessage: 'no author name',
      },
      'Unverified Name': {
        id: 'option.ucbgTaxonTermTypes.Unverified Name',
        defaultMessage: 'unverified name',
      },
      'Grex Name': {
        id: 'option.ucbgTaxonTermTypes.Grex Name',
        defaultMessage: 'grex name',
      },
    }),
  },
  taxonTermSources: {
    values: [
      'Royal Botanical Gardens (KEW)',
      'Owner, Database',
      'UC Botanical Garden',
    ],
    messages: defineMessages({
      'Owner, Database': {
        id: 'option.taxonTermSources.Owner, Database',
        defaultMessage: 'owner, database',
      },
    }),
  },
  ucbgTaxonomicStatuses: {
    values: [
      'valid',
      'invalid',
      'misapplied',
      'accepted',
      'synonym',
      'illegitimate',
      'unpublished',
    ],
  },
  taxonAuthorTypes: {
    values: [
      'author',
      'ascribed author',
      'parenthetical author',
      'parenthetical ascribed author',
    ],
  },
  ucbgTaxonRanks: {
    values: [
      'unknown',
      'class',
      'cultivar',
      'division',
      'family',
      'form',
      'genus',
      'grex',
      'group',
      'kingdom',
      'nothomorph',
      'order',
      'proles',
      'race',
      'section',
      'series',
      'species',
      'subclass',
      'subdivision',
      'subfamily',
      'subform',
      'subgenus',
      'subkingdom',
      'suborder',
      'subsection',
      'subseries',
      'subspecies',
      'subtribe',
      'subvariety',
      'tribe',
      'variety',
    ],
  },
};
