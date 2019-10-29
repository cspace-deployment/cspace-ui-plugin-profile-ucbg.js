const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Col,
    Cols,
    Panel,
    Row,
  } = configContext.layoutComponents;

  const {
    Field,
    InputTable,
  } = configContext.recordComponents;

  const {
    CompoundInput,
  } = configContext.inputComponents;

  const {
    extensions,
  } = configContext.config;

  return (
    <Field name="document">
      <Panel name="id" collapsible>
        <Row>
          <Field name="objectNumber" />
          <Field name="accessionDate" subpath="ns2:collectionobjects_naturalhistory" />
          <Field name="deadFlag" subpath="ns2:collectionobjects_botgarden" />
          <Field name="deadDate" subpath="ns2:collectionobjects_botgarden" />
        </Row>

        <Field name="taxonomicIdentGroupList" subpath="ns2:collectionobjects_naturalhistory">
          <Field name="taxonomicIdentGroup">
            <Panel>
              <Row>
                <Field name="taxon" />
                <Field name="qualifier" />
                <Field name="hybridFlag" />
              </Row>

              <Field name="taxonomicIdentHybridName" />
              <Field name="affinityTaxon" />

              <Field name="taxonomicIdentHybridParentGroupList">
                <Field name="taxonomicIdentHybridParentGroup">
                  <Field name="taxonomicIdentHybridParent" />
                  <Field name="taxonomicIdentHybridParentQualifier" />
                </Field>
              </Field>

              <InputTable name="taxonRef">
                <Field name="reference" />
                <Field name="refPage" />
              </InputTable>

              <Row>
                <Field name="identKind" />
                <Field name="notes" />
              </Row>

              <InputTable name="taxonIdent">
                <Field name="identBy" />
                <Field name="identDateGroup" />
                <Field name="institution" />
              </InputTable>
            </Panel>
          </Field>
        </Field>

        <Row>
          <Field name="recordStatus" />
          <Field name="provenanceType" subpath="ns2:collectionobjects_naturalhistory" />
          <Field name="rare" subpath="ns2:collectionobjects_naturalhistory" />
          <Field name="cultivated" subpath="ns2:collectionobjects_naturalhistory" />
          <Field name="cbdRestriction" subpath="ns2:collectionobjects_botgarden" />
        </Row>

        <Cols>
          <Col>
            <Field name="requestedBy" subpath="ns2:collectionobjects_naturalhistory" />

            <Field name="briefDescriptions" >
              <Field name="briefDescription" />
            </Field>
          </Col>

          <Col>
            <Field name="source" subpath="ns2:collectionobjects_naturalhistory" />
          </Col>
        </Cols>

        <Field name="comments">
          <Field name="comment" />
        </Field>

        <Field name="typeSpecimenGroupList" subpath="ns2:collectionobjects_naturalhistory">
          <Field name="typeSpecimenGroup">
            <Field name="typeSpecimenKind" />
            <Field name="typeSpecimenAssertionBy" />
            <Field name="typeSpecimenReference" />
            <Field name="typeSpecimenRefPage" />
            <Field name="typeSpecimenBasionym" />
            <Field name="typeSpecimenNotes" />
          </Field>
        </Field>
      </Panel>

      <Panel name="locality" collapsible>
        <CompoundInput name="ns2:collectionobjects_naturalhistory" subpath="">
          {extensions.locality.form}
        </CompoundInput>
      </Panel>

      <Panel name="collect" collapsible>
        <Row>
          <Col>
            <Field name="fieldCollectionDateGroup" />

            <Field name="fieldCollectors">
              <Field name="fieldCollector" />
            </Field>

            <Field name="fieldCollectionNumber" />

            <Field
              name="fieldCollectionNumberAssignor"
              subpath="ns2:collectionobjects_naturalhistory"
            />

            <Field name="vegetationType" subpath="ns2:collectionobjects_naturalhistory" />
          </Col>

          <Col>
            <Field name="fieldCollectionMethods">
              <Field name="fieldCollectionMethod" />
            </Field>

            <Field name="fieldCollectionNote" />

            <Field name="associatedTaxaGroupList" subpath="ns2:collectionobjects_naturalhistory">
              <Field name="associatedTaxaGroup">
                <Field name="associatedTaxon" />
                <Field name="commonName" />
                <Field name="interaction" />
              </Field>
            </Field>
          </Col>
        </Row>
      </Panel>

      <Panel name="desc" collapsible collapsed>
        <Row>
          <Field name="sex" />

          <Col>
            <Field name="forms">
              <Field name="form" />
            </Field>
          </Col>

          <Field name="postToPublic" subpath="ns2:collectionobjects_botgarden" />
          <Field name="phase" />
        </Row>

        <Field name="annotationGroupList" subpath="ns2:collectionobjects_naturalhistory">
          <Field name="annotationGroup">
            <Field name="annotationType" />
            <Field name="annotationNote" />
            <Field name="annotationDate" />
            <Field name="annotationAuthor" />
          </Field>
        </Field>

        <Panel name="accessionAttributes">
          <Cols>
            <Col>
              <Field name="flowerColor" subpath="ns2:collectionobjects_botgarden" />
              <Field name="fruitColor" subpath="ns2:collectionobjects_botgarden" />
            </Col>

            <Col>
              <Field name="securityRisk" subpath="ns2:collectionobjects_naturalhistory" />

              <Row>
                <Field name="propagationHistory" subpath="ns2:collectionobjects_botgarden" />
                <Field name="breedingSystem" subpath="ns2:collectionobjects_botgarden" />
              </Row>
            </Col>
          </Cols>

          <Row>
            <Field name="classUse" subpath="ns2:collectionobjects_botgarden" />
            <Field name="researchUse" subpath="ns2:collectionobjects_botgarden" />
            <Field name="distribution" subpath="ns2:collectionobjects_naturalhistory" />
            <Field name="ignoreRedDot" subpath="ns2:collectionobjects_botgarden" />
            <Field name="fragrance" subpath="ns2:collectionobjects_botgarden" />
          </Row>

          <Row>
            <Field name="flowersJan" subpath="ns2:collectionobjects_botgarden" />
            <Field name="flowersFeb" subpath="ns2:collectionobjects_botgarden" />
            <Field name="flowersMar" subpath="ns2:collectionobjects_botgarden" />
            <Field name="flowersApr" subpath="ns2:collectionobjects_botgarden" />
            <Field name="flowersMay" subpath="ns2:collectionobjects_botgarden" />
            <Field name="flowersJun" subpath="ns2:collectionobjects_botgarden" />
            <Field name="flowersJul" subpath="ns2:collectionobjects_botgarden" />
            <Field name="flowersAug" subpath="ns2:collectionobjects_botgarden" />
            <Field name="flowersSep" subpath="ns2:collectionobjects_botgarden" />
            <Field name="flowersOct" subpath="ns2:collectionobjects_botgarden" />
            <Field name="flowersNov" subpath="ns2:collectionobjects_botgarden" />
            <Field name="flowersDec" subpath="ns2:collectionobjects_botgarden" />
          </Row>

          <Row>
            <Field name="fruitsJan" subpath="ns2:collectionobjects_botgarden" />
            <Field name="fruitsFeb" subpath="ns2:collectionobjects_botgarden" />
            <Field name="fruitsMar" subpath="ns2:collectionobjects_botgarden" />
            <Field name="fruitsApr" subpath="ns2:collectionobjects_botgarden" />
            <Field name="fruitsMay" subpath="ns2:collectionobjects_botgarden" />
            <Field name="fruitsJun" subpath="ns2:collectionobjects_botgarden" />
            <Field name="fruitsJul" subpath="ns2:collectionobjects_botgarden" />
            <Field name="fruitsAug" subpath="ns2:collectionobjects_botgarden" />
            <Field name="fruitsSep" subpath="ns2:collectionobjects_botgarden" />
            <Field name="fruitsOct" subpath="ns2:collectionobjects_botgarden" />
            <Field name="fruitsNov" subpath="ns2:collectionobjects_botgarden" />
            <Field name="fruitsDec" subpath="ns2:collectionobjects_botgarden" />
          </Row>
        </Panel>
      </Panel>

      <Panel name="accession" collapsible collapsed>
        <Field name="accessionUseGroupList" subpath="ns2:collectionobjects_naturalhistory">
          <Field name="accessionUseGroup">
            <Panel>
              <Cols>
                <Col>
                  <Field name="useType" />
                  <Field name="requestDate" />
                  <Field name="materialType" />
                </Col>

                <Col>
                  <Field name="usedIn" />
                  <Field name="filledDate" />
                  <Field name="useNotes" />
                </Col>
              </Cols>
            </Panel>
          </Field>
        </Field>
      </Panel>

      <Panel name="hist" collapsible collapsed>
        <Panel name="assoc" collapsible collapsed>
          <Row>
            <Col>
              <Field name="assocActivityGroupList">
                <Field name="assocActivityGroup">
                  <Field name="assocActivity" />
                  <Field name="assocActivityType" />
                  <Field name="assocActivityNote" />
                </Field>
              </Field>

              <Field name="assocObjectGroupList">
                <Field name="assocObjectGroup">
                  <Field name="assocObject" />
                  <Field name="assocObjectType" />
                  <Field name="assocObjectNote" />
                </Field>
              </Field>

              <Field name="assocConceptGroupList">
                <Field name="assocConceptGroup">
                  <Field name="assocConcept" />
                  <Field name="assocConceptType" />
                  <Field name="assocConceptNote" />
                </Field>
              </Field>

              <Field name="assocCulturalContextGroupList">
                <Field name="assocCulturalContextGroup">
                  <Field name="assocCulturalContext" />
                  <Field name="assocCulturalContextType" />
                  <Field name="assocCulturalContextNote" />
                </Field>
              </Field>

              <Field name="assocOrganizationGroupList">
                <Field name="assocOrganizationGroup">
                  <Field name="assocOrganization" />
                  <Field name="assocOrganizationType" />
                  <Field name="assocOrganizationNote" />
                </Field>
              </Field>

              <Field name="assocPeopleGroupList">
                <Field name="assocPeopleGroup">
                  <Field name="assocPeople" />
                  <Field name="assocPeopleType" />
                  <Field name="assocPeopleNote" />
                </Field>
              </Field>

              <Field name="assocPersonGroupList">
                <Field name="assocPersonGroup">
                  <Field name="assocPerson" />
                  <Field name="assocPersonType" />
                  <Field name="assocPersonNote" />
                </Field>
              </Field>

              <Field name="assocPlaceGroupList">
                <Field name="assocPlaceGroup">
                  <Field name="assocPlace" />
                  <Field name="assocPlaceType" />
                  <Field name="assocPlaceNote" />
                </Field>
              </Field>
            </Col>

            <Col>
              <InputTable name="assocEvent">
                <Field name="assocEventName" />
                <Field name="assocEventNameType" />
              </InputTable>

              <Field name="assocEventOrganizations">
                <Field name="assocEventOrganization" />
              </Field>

              <Field name="assocEventPeoples">
                <Field name="assocEventPeople" />
              </Field>

              <Field name="assocEventPersons">
                <Field name="assocEventPerson" />
              </Field>

              <Field name="assocEventPlaces">
                <Field name="assocEventPlace" />
              </Field>

              <Field name="assocEventNote" />

              <Field name="assocDateGroupList">
                <Field name="assocDateGroup">
                  <Field name="assocStructuredDateGroup" />
                  <Field name="assocDateType" />
                  <Field name="assocDateNote" />
                </Field>
              </Field>
            </Col>
          </Row>
        </Panel>

        <Field name="objectHistoryNote" />

        <Field name="usageGroupList">
          <Field name="usageGroup">
            <Field name="usage" />
            <Field name="usageNote" />
          </Field>
        </Field>

        <Row>
          <Col>
            <Field name="owners">
              <Field name="owner" />
            </Field>

            <Field name="ownershipDateGroupList">
              <Field name="ownershipDateGroup" />
            </Field>
          </Col>

          <Col>
            <Row>
              <Field name="ownershipAccess" />
              <Field name="ownershipCategory" />
            </Row>

            <Field name="ownershipPlace" />
          </Col>
        </Row>

        <InputTable name="ownershipExchange">
          <Field name="ownershipExchangeMethod" />
          <Field name="ownershipExchangeNote" />
          <Field name="ownershipExchangePriceCurrency" />
          <Field name="ownershipExchangePriceValue" />
        </InputTable>
      </Panel>

      <Panel name="reference" collapsible collapsed>
        <Field name="referenceGroupList">
          <Field name="referenceGroup">
            <Field name="reference" />
            <Field name="referenceNote" />
          </Field>
        </Field>
      </Panel>


      <Panel name="hierarchy" collapsible collapsed>
        <Field name="relation-list-item" subpath="rel:relations-common-list" />
      </Panel>
    </Field>
  );
};

export default configContext => ({
  template: template(configContext),
});
