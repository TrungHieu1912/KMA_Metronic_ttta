"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = login;
exports.register = register;
exports.requestPassword = requestPassword;
exports.getUserByToken = getUserByToken;
exports.ME_URL = exports.REQUEST_PASSWORD_URL = exports.REGISTER_URL = exports.LOGIN_URL = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// moke_api
var LOGIN_URL = "api/auth/login";
exports.LOGIN_URL = LOGIN_URL;
var REGISTER_URL = "api/auth/register";
exports.REGISTER_URL = REGISTER_URL;
var REQUEST_PASSWORD_URL = "api/auth/forgot-password"; // API thật 
// export const LOGIN_URL = "";
// export const REGISTER_URL = "";
// export const REQUEST_PASSWORD_URL = "";

exports.REQUEST_PASSWORD_URL = REQUEST_PASSWORD_URL;
var ME_URL = "api/me";
exports.ME_URL = ME_URL;

function login(email, password) {
  return _axios["default"].post(LOGIN_URL, {
    email: email,
    password: password
  });
}

function register(email, fullname, username, password) {
  return _axios["default"].post(REGISTER_URL, {
    email: email,
    fullname: fullname,
    username: username,
    password: password
  });
}

function requestPassword(email) {
  return _axios["default"].post(REQUEST_PASSWORD_URL, {
    email: email
  });
}

function getUserByToken() {
  // Authorization head should be fulfilled in interceptor.
  return _axios["default"].get(ME_URL);
}