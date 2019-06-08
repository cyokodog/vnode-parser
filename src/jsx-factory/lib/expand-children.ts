export const expandChildren = (children: JSX.Children): JSX.Children => {
  return children.reduce((output, item) => {
    if (Array.isArray(item)) {
      return [...output, ...expandChildren(item)];
    }
    return [...output, item];
  }, []);
};
