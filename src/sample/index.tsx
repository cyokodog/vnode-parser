import { h, toHtml } from '../index';

const msg = 'Hello JSX! <^_^>/';
const vnode = <div>{ msg }</div>;
const html = toHtml(vnode);
console.log(html);
