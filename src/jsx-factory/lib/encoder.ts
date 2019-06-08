const replacementText: { [name: string]: string } = {
  '&': '&amp;',
  '"': '&quot;',
  '\'': '&#39;',
  '<': '&lt;',
  '>': '&gt;',
};

export const encoder = (target: any): any => {
  if (!target) {
    return target;
  }
  return Object.keys(replacementText).reduce((output, key) => {
    if (typeof output !== 'string') {
      return output;
    }
    const value = replacementText[key];
    return output.replace(new RegExp(key, 'g'), value);
  }, target);
};
