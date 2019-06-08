import { encoder } from './encoder';

export const escapeAttributes = (attributes: JSX.Attribute): JSX.Attribute => {
  if (!attributes) {
    return attributes;
  }
  const attr: JSX.Attribute = {};
  return Object.keys(attributes).reduce((output, name) => {
    output[name] = encoder(attributes[name]);
    return output;
  }, attr);
};
