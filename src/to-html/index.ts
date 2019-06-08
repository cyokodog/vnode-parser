export const toHtml = (vnode: JSX.Element): string => {
  if (typeof vnode !== 'object') {
    return vnode;
  }
  const { elementName, attributes, children } = vnode;
  const attr = attributes
    ? ' ' + Object.keys(attributes)
      .map(key => `${key}="${attributes[key]}"`)
      .join(' ')
    : '';
  const html = children ? children.map(item => toHtml(item)).join('') : '';
  return `<${elementName}${attr}>${html}</${elementName}>`;
};
