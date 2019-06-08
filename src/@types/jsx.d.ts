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
