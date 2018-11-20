"use strict";

var _app = _interopRequireDefault(require("./configuration/app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _process$env$PORT = process.env.PORT,
    PORT = _process$env$PORT === void 0 ? 8080 : _process$env$PORT;

_app.default.listen(PORT, function () {
  return console.log("Running on port ".concat(PORT));
});