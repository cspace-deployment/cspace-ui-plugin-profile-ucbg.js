export default (configContext) => {
  const {
    extensions,
  } = configContext.config;

  return {
    document: {
      ...extensions['ucbnh-objectexit'].fields,
    },
  };
};
