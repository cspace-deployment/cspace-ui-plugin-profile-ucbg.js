/* global cspaceUIPluginProfileUCBG */
/* The cspaceUIPluginProfileUCBG global variable is set by webpack (in non-test builds). See
 * webpack.config.js. */

import { defineMessages } from 'react-intl';
import cspaceUIPluginExtLocality from 'cspace-ui-plugin-ext-locality';
import accessionUseExtensionPlugin from 'cspace-ui-plugin-ext-accessionuse';
import cspaceUIPluginExtUCBNHCollectionObject from 'cspace-ui-plugin-ext-ucbnh-collectionobject';
import cspaceUIPluginExtUCBNHConcept from 'cspace-ui-plugin-ext-ucbnh-concept';
import cspaceUIPluginExtUCBNHLoanOut from 'cspace-ui-plugin-ext-ucbnh-loanout';
import cspaceUIPluginExtUCBNHObjectExit from 'cspace-ui-plugin-ext-ucbnh-objectexit';
import cspaceUIPluginExtUCBNHOrganization from 'cspace-ui-plugin-ext-ucbnh-organization';
import cspaceUIPluginExtUCBNHTaxon from 'cspace-ui-plugin-ext-ucbnh-taxon';
import cspaceUIPluginRecordTaxon from 'cspace-ui-plugin-record-taxon';
import annotationExtensionPlugin from 'cspace-ui-plugin-ext-annotation';
import defaultUserPrefs from './defaultUserPrefs';
import logo from '../images/logo.jpg';
import messages from './messages';
import plugins from './plugins';
import styles from '../styles/cspace-ui-plugin-profile/ucbg.css';

export default () => ({
  defaultUserPrefs,
  logo,
  messages,
  autocompleteMinLength: 2,
  autocompleteFindDelay: 1000,
  className: styles.common,
  mediaSnapshotSort: 'imageNumber',
  prettyUrls: true,
  relationMemberPerm: 'R',
  tenantId: '35',
  pluginInfo: {
    cspaceUIPluginProfileUCBG: {
      messages: defineMessages({
        name: {
          id: 'cspaceUIPluginProfileUCBG.name',
          defaultMessage: 'UC Botanical Garden profile',
        },
      }),
      version: cspaceUIPluginProfileUCBG.packageVersion,
    },
  },
  plugins: [
    cspaceUIPluginExtLocality(),
    cspaceUIPluginRecordTaxon(),
    cspaceUIPluginExtUCBNHCollectionObject(),
    cspaceUIPluginExtUCBNHConcept(),
    cspaceUIPluginExtUCBNHLoanOut(),
    cspaceUIPluginExtUCBNHObjectExit(),
    cspaceUIPluginExtUCBNHOrganization(),
    cspaceUIPluginExtUCBNHTaxon(),
    accessionUseExtensionPlugin(),
    annotationExtensionPlugin(),
    ...plugins.map((plugin) => plugin()),
  ],
});
