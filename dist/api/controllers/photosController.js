"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _models = _interopRequireDefault(require("../../../models"));

var _cloudinary = _interopRequireDefault(require("cloudinary"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Photos = _models["default"].Photos;

var PhotosAlbum =
/*#__PURE__*/
function () {
  function PhotosAlbum() {
    _classCallCheck(this, PhotosAlbum);
  }

  _createClass(PhotosAlbum, null, [{
    key: "createAlbum",
    value: function () {
      var _createAlbum = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(req, res) {
        var _req$body, title, description, photo, photoExist, uploadedImage, newPhoto;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _req$body = req.body, title = _req$body.title, description = _req$body.description, photo = _req$body.photo;
                _context.next = 3;
                return Photos.findOne({
                  where: {
                    title: title,
                    description: description
                  }
                });

              case 3:
                photoExist = _context.sent;

                if (photoExist) {
                  _context.next = 12;
                  break;
                }

                _context.next = 7;
                return _cloudinary["default"].uploader.upload(req.file.path);

              case 7:
                uploadedImage = _context.sent;
                _context.next = 10;
                return Photos.create({
                  title: title,
                  description: description,
                  photo: uploadedImage.secure_url
                });

              case 10:
                newPhoto = _context.sent;
                res.status(201).send({
                  message: 'Image uploaded successfully!!',
                  data: newPhoto
                });

              case 12:
                return _context.abrupt("return", res.status(509).send({
                  error: 'the image already exist!'
                }));

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function createAlbum(_x, _x2) {
        return _createAlbum.apply(this, arguments);
      }

      return createAlbum;
    }()
  }]);

  return PhotosAlbum;
}();

var _default = PhotosAlbum;
exports["default"] = _default;