export default (configContext) => {
  const {
    OP_EQ,
    OP_CONTAIN,
  } = configContext.searchOperators;

  const {
    defaultAdvancedSearchBooleanOp,
    extensions,
  } = configContext.config;

  return {
    op: defaultAdvancedSearchBooleanOp,
    value: [
      {
        op: OP_CONTAIN,
        path: 'ns2:taxon_common/taxonTermGroupList/taxonTermGroup/termDisplayName',
      },
      {
        op: OP_EQ,
        path: 'ns2:taxon_common/taxonTermGroupList/taxonTermGroup/termStatus',
      },
      {
        op: OP_EQ,
        path: 'ns2:taxon_common/taxonTermGroupList/taxonTermGroup/termFlag',
      },
      {
        op: OP_EQ,
        path: 'ns2:taxon_common/taxonTermGroupList/taxonTermGroup/taxonomicStatus',
      },
      {
        op: OP_EQ,
        path: 'ns2:taxon_common/taxonRank',
      },
      {
        op: OP_EQ,
        path: 'ns2:taxon_common/taxonAuthorGroupList/taxonAuthorGroup/taxonAuthor',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:taxon_common/taxonYear',
      },
      {
        op: OP_EQ,
        path: 'ns2:taxon_naturalhistory/naturalHistoryCommonNameGroupList/naturalHistoryCommonNameGroup/naturalHistoryCommonName',
      },
      {
        op: OP_EQ,
        path: 'ns2:taxon_naturalhistory/family',
      },
      {
        op: OP_EQ,
        path: 'ns2:taxon_naturalhistory/accessRestrictions',
      },
      {
        op: OP_EQ,
        path: 'ns2:taxon_naturalhistory/plantAttributesGroupList/plantAttributesGroup/conservationOrganization',
      },
      {
        op: OP_EQ,
        path: 'ns2:taxon_naturalhistory/plantAttributesGroupList/plantAttributesGroup/conservationCategory',
      },
      ...extensions.core.advancedSearch,
    ],
  };
};
