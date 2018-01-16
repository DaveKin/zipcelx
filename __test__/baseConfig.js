/**
  Basic working config
*/

export default {
  filename: 'report',
  sheet: {
    data: [
      [{
        value: 'Test',
        type: 'string',
        style: 'style1'
      }, {
        value: 1000,
        type: 'number',
        style: 'style2'
      }]
    ]
  },
  styles: [
    {
      name: 'style1',
      props: {
        color: '#ff0000',
        backgroundColor: '#00ff00'
      }
    },
    {
      name: 'style2',
      props: {
        color: '#0000ff',
        backgroundColor: '#ff00ff'
      }
    }
  ]
};
