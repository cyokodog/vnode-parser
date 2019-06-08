# vnode-parser

Safly convert JSX/TSX to HTML.

## Usage

see https://github.com/cyokodog/vnode-parser-example

### example-1

#### ex01.tsx

```
import { h, toHtml } from 'vnode-parser';

const msg = 'Hello JSX! <^_^>/';
const vnode = <div>{ msg }</div>;
const html = toHtml(vnode);
console.log(html);
```

#### result

```
<div>Hello JSX! &lt;^_^&gt;/</div>
```

### example-2

HTML not escaped.

#### ex02.tsx

```
import { getJsxFactory, toHtml } from 'vnode-parser';

const h = getJsxFactory({encode: false});
const msg = '<h1>Hello JSX!</h1>';
const vnode = <div>{ msg }</div>;
const html = toHtml(vnode);
console.log(html);
```

#### result

```
<div><h1>Hello JSX!</h1></div>
```

### example-3

use component.

#### doc.tsx

```
import { h } from 'vnode-parser';

const FormatDate = (props: { date: Date }) => {
  const { date } = props;
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const dateStr = `${ year }-${ month }-${ day }`;
  return (
    <time datetime={ dateStr }>
      { dateStr }
    </time>
  );
};

const Lead = (_: any, children: any[]): JSX.Element => {
  return <div class="lead">{ children }</div>;
};

const Body = (_: any, children: any[]): JSX.Element => {
  return <div class="body">{ children }</div>;
};

export const Doc = (
  props: { title: string; date: Date; author: string; lead: JSX.Element },
  children: any[],
): JSX.Element => {
  const { title, date, author, lead } = props;
  return (
    <article>
      <h1>{ title }</h1>
      <ul>
        <li>
          <FormatDate date={ date } />
        </li>
        <li>{ author }</li>
      </ul>
      <Lead>{ lead }</Lead>
      <Body>{ children }</Body>
    </article>
  );
};
```

#### ex03.tsx

```
import { h, toHtml } from 'vnode-parser';
import { Doc } from './doc';

const title = 'Hello TypeScrpt and JSX!';
const lead = <p>I like TypeScrpt and JSX.</p>;
const doc: JSX.Element = (
  <Doc title={ title } date={ new Date() } author="<^o^>/" lead={ lead }>
    <p>
      The document is <a href="https://www.typescriptlang.org/docs/handbook/jsx.html">here</a>.
    </p>
  </Doc>
);
const html = toHtml(doc);
console.log(html);
```

#### result

```
<article>
  <h1>Hello TypeScrpt and JSX!</h1>
  <ul>
    <li><time datetime="2019-7-15">2019-7-15</time></li>
    <li>&lt;^o^&gt;/</li>
  </ul>
  <div class="lead">
    <p>I like TypeScrpt and JSX.</p>
  </div>
  <div class="body">
    <p>The document is <a href="https://www.typescriptlang.org/docs/handbook/jsx.html">here</a>.</p>
  </div>
</article>
```

## Environment

see https://github.com/cyokodog/vnode-parser-example

### package.json

```
{
  "devDependencies": {
    "babel-cli": "6.26.0",
    "babel-plugin-transform-jsx": "2.0.0",
    "braces": ">=2.3.1",
    "typescript": "3.5.1",
    ...
  }
}
```

### install

```
npm i -S vnode-parser
```

### .babelrc

```
{
  "plugins": ["babel-plugin-transform-jsx"]
}
```

### tsconfig.json

```
{
  "compilerOptions": {
    "target": "es2017",
    "jsx": "react",
    "jsxFactory": "h",
    "strict": true,
    "moduleResolution": "node",
  }
}
```

### jsx.d.ts

```
declare namespace JSX {
  export type ElementName = string | Function;

  export type Attribute = { [key: string]: any };

  export type Children = any[];

  export type Element = {
    elementName: ElementName;
    attributes: Attribute;
    children: Children;
  };

  export interface IntrinsicElements {
    [key: string]: any;
  }
}
```
