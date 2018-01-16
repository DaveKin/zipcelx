import formatRow from '../../../src/formatters/rows/formatRow';
import baseConfig from '../../baseConfig';

const expectedXML = '<row r="1"><c r="A1" t="inlineStr" ss:StyleID="style1"><is><t>Test</t></is></c><c r="B1" ss:StyleID="style2"><v>1000</v></c></row>';

describe('Format Row', () => {
  it('Should create one row from given data', () => {
    expect(formatRow(baseConfig.sheet.data[0], 0)).toBe(expectedXML);
  });
});
