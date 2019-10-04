"use strict";

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _index = _interopRequireDefault(require("./api/routes/index"));

require("../handler/cloudinaryConfig");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var port = process.env.PORT || 3000;
var app = (0, _express["default"])();
app.use('/api', _index["default"]);
console.log(process.env.MY_SECRET);
app.listen(port, function () {
  // eslint-disable-next-line no-console
  console.log("Server listening on port: ".concat(port, " "));
});