"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _consign = _interopRequireDefault(require("consign"));

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
(0, _consign.default)({
  cwd: 'src'
}).include('api').then('routes').into(app);
var _default = app;
exports.default = _default;