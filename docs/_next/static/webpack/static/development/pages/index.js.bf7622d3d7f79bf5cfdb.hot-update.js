webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/products/Products.js":
/*!*****************************************!*\
  !*** ./components/products/Products.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _OurProducts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OurProducts */ "./components/products/OurProducts.js");
/* harmony import */ var _ProductItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProductItem */ "./components/products/ProductItem.js");


var _this = undefined,
    _jsxFileName = "/Users/ninetteadhikari/Repos/hikaya/hikaya-website/components/products/Products.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var products = {
  product1: [{
    itemClass: 'product-container media-container-row',
    icon: 'activity.png',
    id: 'product-activity',
    name: 'Activity',
    headline: 'Manage your activities and indicators with ease',
    description: "Activity is a tool that makes it easier for nonprofits to manage their project \n        activities and indicator results. Activity is based on an open source project</a> started at \n        <a className=\"product-link\" href=\"https://www.mercycorps.org/\" target=\"_blank\">Mercy Corps</a> in 2014. \n        <br>\n        <br>\n        Activity is hosted and maintained by Hikaya and can be used any nonprofit.",
    buttonText: 'Join our beta',
    buttonLink: 'https://activity.hikaya.app/accounts/register/user/none/',
    buttonStyle: 'btn btn-sm btn-primary display-4 try-now-button'
  }],
  product2: [{
    itemClass: 'product-container media-container-row reverse-content dots-container',
    icon: 'dots.png',
    id: 'product-dots',
    name: 'Dots',
    headline: 'Connect and visualize your data from anywhere',
    description: "Dots is a modern visualization and reporting tool to help \n      nonprofits connect their data from mutliple sources to visualize and make \n      results reporting easier.",
    buttonText: 'Learn more',
    buttonLink: 'mailto:info@hikaya.io',
    buttonStyle: 'product-contact-btn'
  }],
  product3: [{
    itemClass: 'product-container media-container-row',
    icon: 'circles.png',
    id: 'product-connectors',
    name: 'Connectors',
    headline: 'Harness enterprise-grade solutions in your data pipeline',
    description: "We\u2019re architecting a common data pipeline \n      for nonprofits to manage their unstructured datasets by importing \n      from third-party data collection tools while hosting a series of pre-built \n      connectors that let organizations seamlessly integrate their ERP systems.\n      <br>\n      <br>\n      Built using open source tools like <a className=\"product-link\" href=\"https://airflow.apache.org/\" target=\"_blank\">Apache Airflow</a> \n      and <a className=\"product-link\" href=\"http://superset.incubator.apache.org/\" target=\"_blank\">Apache Superset</a>, we're helping nonprofits \n      implement end-to-end data integration and business intelligence solutions.",
    buttonText: 'Learn more',
    buttonLink: 'mailto:info@hikaya.io',
    buttonStyle: 'product-contact-btn'
  }]
};

var renderProductItems = function renderProductItems(rows) {
  return rows.map(function (row) {
    return __jsx("section", {
      key: row,
      className: "features1 cid-rGdb9qTnNd",
      id: "features1-9",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 5
      }
    }, __jsx("div", {
      className: "container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 7
      }
    }, products[row].map(function (product) {
      return __jsx(_ProductItem__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        key: product.name
      }, product, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }
      }));
    })));
  });
};

var Products = function Products() {
  var rows = Object.keys(products);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 5
    }
  }, __jsx(_OurProducts__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }), renderProductItems(rows));
};

/* harmony default export */ __webpack_exports__["default"] = (Products);

/***/ })

})
//# sourceMappingURL=index.js.bf7622d3d7f79bf5cfdb.hot-update.js.map