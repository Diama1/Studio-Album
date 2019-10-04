"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _photosController = _interopRequireDefault(require("../controllers/photosController"));

var _multer = _interopRequireDefault(require("../../../handler/multer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var createAlbum = _photosController["default"].createAlbum;
var router = (0, _express.Router)();
router.post('/', _multer["default"].single('image'), createAlbum);
var _default = router;
exports["default"] = _default;