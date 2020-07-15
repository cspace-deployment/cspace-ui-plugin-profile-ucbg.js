export default (configContext) => {
  const {
    OP_EQ,
    OP_CONTAIN,
    OP_RANGE,
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
        path: 'ns2:collectionobjects_common/objectNumber',
      },
      {
        op: OP_RANGE,
        path: 'ns2:collectionobjects_common/objectNumber',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_naturalhistory/taxonomicIdentGroupList/taxonomicIdentGroup/taxon',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_naturalhistory/taxonomicIdentGroupList/taxonomicIdentGroup/hybridFlag',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_botgarden/deadFlag',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_naturalhistory/provenanceType',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/fieldCollectors/fieldCollector',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:collectionobjects_naturalhistory/localityGroupList/localityGroup/fieldLocVerbatim',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:collectionobjects_naturalhistory/source',

      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/phase',
      },
      {
        op: OP_RANGE,
        path: 'ns2:collectionobjects_botgarden/deadDate',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_naturalhistory/rare',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_naturalhistory/cultivated',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:collectionobjects_common/briefDescriptions/briefDescription',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_naturalhistory/localityGroupList/localityGroup/fieldLocPlace',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:collectionobjects_naturalhistory/localityGroupList/localityGroup/taxonomicRange',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_naturalhistory/accessionUseGroupList/accessionUseGroup/accessionUsedIn',
      },
      // number of objects - numberOfObjects

      ...extensions.core.advancedSearch,
    ],
  };
};
