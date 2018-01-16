import generatorFont from './generatorFont';

export default (style) => {
  const font = generatorFont(style.props);
  return `<Style ss:id="${style.name}">${font}</Style>`;
};
