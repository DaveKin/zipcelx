import { validTypes, CELL_TYPE_STRING, WARNING_INVALID_TYPE } from '../../commons/constants';
import generatorStringCell from './generatorStringCell';
import generatorNumberCell from './generatorNumberCell';

const styleProp = (styleId) => {
  return (typeof styleId !== 'undefined') ? ` s="${styleId}"` : '';
};

export default (cell, index, rowIndex) => {
  if (validTypes.indexOf(cell.type) === -1) {
    console.warn(WARNING_INVALID_TYPE);
    cell.type = CELL_TYPE_STRING;
  }

  return (
    cell.type === CELL_TYPE_STRING
    ? generatorStringCell(index, cell.value, rowIndex, styleProp(cell.style))
    : generatorNumberCell(index, cell.value, rowIndex, styleProp(cell.style))
  );
};
