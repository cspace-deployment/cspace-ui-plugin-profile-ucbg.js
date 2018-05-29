import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    TextInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    extensions,
  } = configContext.config;

  return {
    document: {
      'ns2:concepts_common': {
        conceptTermGroupList: {
          conceptTermGroup: {
            termType: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.concepts_common.termType.name',
                    defaultMessage: 'Type',
                  },
                }),
                view: {
                  type: TextInput,
                  props: null,
                },
              },
            },
          },
        },
      },
      ...extensions['ucbnh-concept'].fields,
    },
  };
};
