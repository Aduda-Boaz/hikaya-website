webpackHotUpdate("static/development/pages/team.js",{

/***/ "./components/team/TeamItem.js":
/*!*************************************!*\
  !*** ./components/team/TeamItem.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "/Users/ninetteadhikari/Repos/hikaya/hikaya-website/components/team/TeamItem.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var TeamItem = function TeamItem(_ref) {
  var id = _ref.id,
      name = _ref.name,
      title = _ref.title,
      description = _ref.description,
      imageFormal = _ref.imageFormal,
      imageFun = _ref.imageFun;
  return __jsx("div", {
    className: "member-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "image-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx("img", {
    className: "img-team ".concat(id),
    src: imageFormal,
    onMouseOver: function onMouseOver(e) {
      return e.currentTarget.src = "".concat(imageFun);
    },
    onMouseOut: function onMouseOut(e) {
      return e.currentTarget.src = "".concat(imageFormal);
    },
    alt: "team photo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "team-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("h4", {
    className: "display-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, name)), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, title), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, description), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }), __jsx("i", {
    "class": "fab fa-github",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (TeamItem);

/***/ })

})
//# sourceMappingURL=team.js.ec0625da2c85ef1d68ee.hot-update.js.map