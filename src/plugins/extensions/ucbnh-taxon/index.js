import fields from './fields';

export default () => (configContext) => ({
  extensions: {
    'ucbnh-taxon': {
      fields: fields(configContext),
    },
  },
});
