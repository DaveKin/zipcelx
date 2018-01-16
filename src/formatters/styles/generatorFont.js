export default (props) => {
  if (typeof props.color !== 'undefined') {
    return `<ss:Font ss:Color="${props.color}"/>`;
  }
  return '';
};
