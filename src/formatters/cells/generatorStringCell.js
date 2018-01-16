import escape from 'lodash.escape';
import generatorCellNumber from '../../commons/generatorCellNumber';

export default (index, value, rowIndex, styleProp) => (`<c r="${generatorCellNumber(index, rowIndex)}" t="inlineStr"${styleProp}><is><t>${escape(value)}</t></is></c>`);
