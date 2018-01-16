'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _generatorFont = require('./generatorFont');

var _generatorFont2 = _interopRequireDefault(_generatorFont);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (style) {
  var font = (0, _generatorFont2.default)(style.props);
  return '<Style ss:id="' + style.name + '">' + font + '</Style>';
};