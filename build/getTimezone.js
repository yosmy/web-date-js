"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default() {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
};

exports["default"] = _default;