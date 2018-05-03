/* global cspaceUIPluginProfileUCBG */
/* The cspaceUIPluginProfileUCBG global variable is set by webpack (in non-test builds). See
 * webpack.config.js. */

import { defineMessages } from 'react-intl';
import logo from '../images/logo.jpg';
import messages from './messages';
import plugins from './plugins';
import styles from '../styles/cspace-ui-plugin-profile/ucbg.css';

module.exports = () => ({
  logo,
  messages,
  className: styles.common,
  prettyUrls: true,
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
  plugins: plugins.map(plugin => plugin()),
});
