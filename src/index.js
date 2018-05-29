/* global cspaceUIPluginProfileUCBG */
/* The cspaceUIPluginProfileUCBG global variable is set by webpack (in non-test builds). See
 * webpack.config.js. */

import { defineMessages } from 'react-intl';
import cspaceUIPluginExtUCBNHConcept from 'cspace-ui-plugin-ext-ucbnh-concept';
import cspaceUIPluginExtUCBNHLoanOut from 'cspace-ui-plugin-ext-ucbnh-loanout';
import cspaceUIPluginExtUCBNHTaxon from 'cspace-ui-plugin-ext-ucbnh-taxon';
import cspaceUIPluginRecordTaxon from 'cspace-ui-plugin-record-taxon';
import cspaceUIPluginExtUCBNHOrganization from 'cspace-ui-plugin-ext-ucbnh-organization';
import logo from '../images/logo.jpg';
import messages from './messages';
import plugins from './plugins';
import styles from '../styles/cspace-ui-plugin-profile/ucbg.css';

module.exports = () => ({
  logo,
  messages,
  className: styles.common,
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
    cspaceUIPluginRecordTaxon(),
    cspaceUIPluginExtUCBNHConcept(),
    cspaceUIPluginExtUCBNHLoanOut(),
    cspaceUIPluginExtUCBNHTaxon(),
    cspaceUIPluginExtUCBNHOrganization(),
    ...plugins.map(plugin => plugin()),
  ],
});
