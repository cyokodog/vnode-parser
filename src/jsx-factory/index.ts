import { encoder } from './lib/encoder';
import { escapeAttributes } from './lib/escape-attributes';
import { expandChildren } from './lib/expand-children';

export type JsxFactory = (
  elementName: JSX.ElementName,
  attributes: JSX.Attribute,
  ...children: JSX.Children
) => JSX.Element

export const getJsxFactory = (option: { encode: boolean }): JsxFactory => {
  const h = (
    elementName: JSX.ElementName,
    attributes: JSX.Attribute,
    ...children: JSX.Children
  ): JSX.Element => {
    if (typeof elementName === 'function') {
      return elementName(attributes, children);
    }
    return {
      elementName,
      attributes: escapeAttributes(attributes),
      children: expandChildren(children).map(item => option.encode ? encoder(item) : item),
    };
  };
  return h;
}
