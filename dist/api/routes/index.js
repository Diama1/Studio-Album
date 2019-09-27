"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _multer = _interopRequireDefault(require("../../../handler/multer"));

var _photoAlbum = _interopRequireDefault(require("./photoAlbum"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var api = (0, _express["default"])();
api.use('/photos', _photoAlbum["default"]);
var _default = api;
exports["default"] = _default;