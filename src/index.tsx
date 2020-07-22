import { getJsxFactory } from './jsx-factory';
export { getJsxFactory } from './jsx-factory';
export { toHtml } from './to-html';

export const h = getJsxFactory({ encode: true });

export const Fragment = (_: any, children: any[]): JSX.Element => {
  return <fragment>{children}</fragment>;
};
