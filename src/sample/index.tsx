import { h, toHtml, Fragment } from '../index';

const msg = 'Hello JSX! <^_^>/';
const vnode = <div>{msg}</div>;
const html = toHtml(vnode);
console.log(html);

console.log(
  toHtml(
    <Fragment>
      Use DocumentFragment! <span>{'<^_^>/'}</span>
    </Fragment>,
  ),
);
