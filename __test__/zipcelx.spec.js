import generatorRows from '../src/formatters/rows/generatorRows';
import generatorStyles from '../src/formatters/styles/generatorStyles';
import zipcelx, { generateXMLWorksheet } from '../src/zipcelx';
import baseConfig from './baseConfig';

console.error = jest.genMockFn();

describe('Zipcelx', () => {
  const rowsXML = `<row r="1"><c r="A1" t="inlineStr" s="2"><is><t>Test</t></is></c><c r="B1" s="2"><v>1000</v></c></row>`;
  const styleXML = `<Style ss:id="style1"><ss:Font ss:Color="#ff0000"/></Style><Style ss:id="style2"><ss:Font ss:Color="#0000ff"/></Style>`;

  it('Should throw error if validator fails', () => {
    let config = Object.assign({}, baseConfig, { sheet: { data: [{test: 'demo'}] } });
    expect(() => zipcelx(config)).toThrow();
  });

  it('Should map row arrays to XML markup', () => {
    expect(generatorRows(baseConfig.sheet.data)).toBe(rowsXML);
  });

  it('Should map style array to XML markup', () => {
    expect(generatorStyles(baseConfig.styles)).toBe(styleXML);
  });

  it('Should generate and XML Worksheet from template', () => {
    const expectedXML = [
      '<?xml version="1.0" ?>',
      `<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:mv="urn:schemas-microsoft-com:mac:vml" xmlns:mx="http://schemas.microsoft.com/office/mac/excel/2008/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:x14="http://schemas.microsoft.com/office/spreadsheetml/2009/9/main" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" xmlns:xm="http://schemas.microsoft.com/office/excel/2006/main"><sheetData>${rowsXML}</sheetData></worksheet>`
    ].join('\n');
    expect(generateXMLWorksheet(baseConfig.sheet.data, baseConfig.styles)).toBe(expectedXML);
  });
});
