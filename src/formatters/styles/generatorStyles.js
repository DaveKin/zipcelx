import formatStyle from './formatStyle';

export default styles => (
  styles.map((style, index) => formatStyle(style, index))
    .join('')
);
