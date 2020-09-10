"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = mockAuth;

var _authCrud = require("../_redux/authCrud");

var _userTableMock = _interopRequireDefault(require("./userTableMock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function mockAuth(mock) {
  mock.onPost(_authCrud.LOGIN_URL).reply(function (_ref) {
    var data = _ref.data;

    var _JSON$parse = JSON.parse(data),
        email = _JSON$parse.email,
        password = _JSON$parse.password;

    if (email && password) {
      var user = _userTableMock["default"].find(function (x) {
        return x.email.toLowerCase() === email.toLowerCase() && x.password === password;
      });

      if (user) {
        return [200, _objectSpread({}, user, {
          password: undefined
        })];
      }
    }

    return [400];
  });
  mock.onPost(_authCrud.REGISTER_URL).reply(function (_ref2) {
    var data = _ref2.data;

    var _JSON$parse2 = JSON.parse(data),
        email = _JSON$parse2.email,
        fullname = _JSON$parse2.fullname,
        username = _JSON$parse2.username,
        password = _JSON$parse2.password;

    if (email && fullname && username && password) {
      var user = {
        id: generateUserId(),
        email: email,
        fullname: fullname,
        username: username,
        password: password,
        roles: [2],
        // Manager
        accessToken: "access-token-" + Math.random(),
        refreshToken: "access-token-" + Math.random(),
        pic: process.env.PUBLIC_URL + "/media/users/default.jpg"
      };

      _userTableMock["default"].push(user);

      return [200, _objectSpread({}, user, {
        password: undefined
      })];
    }

    return [400];
  });
  mock.onPost(_authCrud.REQUEST_PASSWORD_URL).reply(function (_ref3) {
    var data = _ref3.data;

    var _JSON$parse3 = JSON.parse(data),
        email = _JSON$parse3.email;

    if (email) {
      var user = _userTableMock["default"].find(function (x) {
        return x.email.toLowerCase() === email.toLowerCase();
      });

      if (user) {
        user.password = undefined;
        return [200, _objectSpread({}, user, {
          password: undefined
        })];
      }
    }

    return [400];
  });
  mock.onGet(_authCrud.ME_URL).reply(function (_ref4) {
    var Authorization = _ref4.headers.Authorization;
    var accessToken = Authorization && Authorization.startsWith("Bearer ") && Authorization.slice("Bearer ".length);

    if (accessToken) {
      var user = _userTableMock["default"].find(function (x) {
        return x.accessToken === accessToken;
      });

      if (user) {
        return [200, _objectSpread({}, user, {
          password: undefined
        })];
      }
    }

    return [401];
  });

  function generateUserId() {
    var ids = _userTableMock["default"].map(function (el) {
      return el.id;
    });

    var maxId = Math.max.apply(Math, _toConsumableArray(ids));
    return maxId + 1;
  }
}