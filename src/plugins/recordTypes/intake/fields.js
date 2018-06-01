export default (configContext) => {
  const {
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    document: {
      'ns2:intakes_common': {
        entryReason: {
          [config]: {
            view: {
              type: TermPickerInput,
              props: {
                source: 'EntryReason',
              },
            },
          },
        },
      },
    },
  };
};
