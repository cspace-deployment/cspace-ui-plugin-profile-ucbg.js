import collectionobject from './collectionobject';

export default () => (configContext) => ({
  extensions: {
    accessionuse: {
      collectionobject: collectionobject(configContext),
    },
  },
});
