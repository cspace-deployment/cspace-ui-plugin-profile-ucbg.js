import { defineMessages } from 'react-intl';

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

  return (
    <Field name="document">
      <Panel name="info" collapsible>
        <Field name="taxonTermGroupList">
          <Field name="taxonTermGroup">
            <Panel>
              <Row>
                <Field name="termDisplayName" />
                <Field name="termFormattedDisplayName" />
              </Row>

              <Row>
                <Field name="termQualifier" />
                <Field name="termType" />
                <Field name="termStatus" />
                <Field name="termFlag" />
              </Row>

              <Row>
                <Field name="taxonomicStatus" />
                <Field name="termLanguage" />
                <Field name="termPrefForLang" />
              </Row>

              <InputTable name="termSource">
                <Field name="termSource" />
                <Field name="termSourceDetail" />
                <Field name="termSourceID" />
                <Field name="termSourceNote" />
              </InputTable>
            </Panel>
          </Field>
        </Field>

        <Row>
          <Field name="taxonRank" />
          <Field name="accessRestrictions" subpath="ns2:taxon_naturalhistory" />
          <Field name="family" subpath="ns2:taxon_naturalhistory" />
        </Row>

        <Field name="taxonAuthorGroupList">
          <Field name="taxonAuthorGroup">
            <Field name="taxonAuthor" />
            <Field name="taxonAuthorType" />
          </Field>
        </Field>

        <Cols>
          <Col>
            <Field name="taxonYear" />
            <Field name="taxonIsNamedHybrid" />
            <Field name="taxonBasionym" subpath="ns2:taxon_naturalhistory" />
          </Col>

          <Col>
            <Field name="taxonCitationList">
              <Field name="taxonCitation" />
            </Field>
            <Field name="taxonNote" />

          </Col>
        </Cols>

        <Field name="naturalHistoryCommonNameGroupList" subpath="ns2:taxon_naturalhistory">
          <Field name="naturalHistoryCommonNameGroup">
            <Field name="naturalHistoryCommonName" />
            <Field name="naturalHistoryCommonNameLanguage" />
            <Field name="naturalHistoryCommonNameSource" />
            <Field name="naturalHistoryCommonNameSourceDetail" />
            <Field name="naturalHistoryCommonNameType" />
          </Field>
        </Field>

        <Field name="relatedTermGroupList" subpath="ns2:taxon_naturalhistory">
          <Field name="relatedTermGroup">
            <Field name="relatedTerm" />
            <Field name="relatedTermType" />
            <Field name="relatedTermSource" />
            <Field name="relatedTermSourceDetail" />
          </Field>
        </Field>

        <Field name="plantAttributesGroupList" subpath="ns2:taxon_naturalhistory">
          <Field name="plantAttributesGroup">
            <Panel>
              <Cols>
                <Col>
                  <Field name="attributeDate" />
                  <Field name="recordedBy" />

                  <Row>
                    <Field name="habitat" />
                    <Field name="climateRating" />
                  </Row>
                </Col>

                <Col>
                  <Row>
                    <Field name="height" />
                    <Field name="width" />
                    <Field name="diameterBreastHeight" />
                  </Row>

                  <Row>
                    <Field name="conservationOrganization" />
                    <Field name="conservationCategory" />
                  </Row>

                  <Row>
                    <Field name="frostSensitive" />
                    <Field name="medicinalUse" />
                    <Field name="economicUse" />
                  </Row>
                </Col>
              </Cols>
            </Panel>
          </Field>
        </Field>
      </Panel>

      <Panel name="hierarchy" collapsible>
        <Field name="relation-list-item" subpath="rel:relations-common-list" />
      </Panel>
    </Field>
  );
};

export default (configContext) => ({
  messages: defineMessages({
    name: {
      id: 'form.taxon.default.name',
      defaultMessage: 'Standard Template',
    },
  }),
  template: template(configContext),
});
