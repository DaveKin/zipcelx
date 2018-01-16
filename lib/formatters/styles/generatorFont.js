'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (props) {
  if (typeof props.color !== 'undefined') {
    return '<ss:Font ss:Color="' + props.color + '"/>';
  }
  return '';
};