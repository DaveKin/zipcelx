import generatorCellNumber from '../../commons/generatorCellNumber';

export default (index, value, rowIndex, styleProp) => (`<c r="${generatorCellNumber(index, rowIndex)}"${styleProp}><v>${value}</v></c>`);
