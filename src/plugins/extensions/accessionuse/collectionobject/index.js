import fields from './fields';

export default (configContext) => {
  return {
    fields: fields(configContext),
  };
};
