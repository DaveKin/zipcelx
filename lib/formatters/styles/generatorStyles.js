'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _formatStyle = require('./formatStyle');

var _formatStyle2 = _interopRequireDefault(_formatStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (styles) {
  return styles.map(function (style, index) {
    return (0, _formatStyle2.default)(style, index);
  }).join('');
};