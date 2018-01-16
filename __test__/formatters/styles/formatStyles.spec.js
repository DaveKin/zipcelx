import formatStyle from '../../../src/formatters/styles/formatStyle';
import baseConfig from '../../baseConfig';

const expectedXML = '<Style ss:id="style1"><ss:Font ss:Color="#ff0000"/></Style>';

describe('Format Style', () => {
  it('Should create one row from given data', () => {
    expect(formatStyle(baseConfig.styles[0], 0)).toBe(expectedXML);
  });
});
