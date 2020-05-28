webpackHotUpdate("static/development/pages/team.js",{

/***/ "./components/team/Team.js":
/*!*********************************!*\
  !*** ./components/team/Team.js ***!
  \*********************************/
/*! exports provided: Team, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Team", function() { return Team; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TeamItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TeamItem */ "./components/team/TeamItem.js");


var _this = undefined,
    _jsxFileName = "/Users/ninetteadhikari/Repos/hikaya/hikaya-website/components/team/Team.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var Team = function Team() {
  var teamMembers = [{
    id: 'amos',
    name: 'Amos Njoroge',
    title: 'QA Engineer',
    description: 'Keeps our apps healthy and bug free 🐛',
    imageFormal: 'assets/images/team_photos/amos_formal.JPG',
    imageFun: 'assets/images/team_photos/amos_fun.JPG',
    github: 'https://github.com/sannleen',
    city: 'Nairobi'
  }, {
    id: 'anas',
    name: 'Anas Tiour',
    title: '',
    description: 'Chief dreamer helping to tame our products',
    imageFormal: 'assets/images/team_photos/andrew_formal.JPG',
    imageFun: 'assets/images/team_photos/andrew_fun.JPG',
    github: 'https://github.com/andrewtpham',
    city: 'Rabat'
  }, {
    id: 'andrew',
    name: 'Andrew Pham',
    title: 'Co-Founder and Head of Product',
    description: 'Chief dreamer helping to tame our products',
    imageFormal: 'assets/images/team_photos/andrew_formal.JPG',
    imageFun: 'assets/images/team_photos/andrew_fun.JPG',
    github: 'https://github.com/andrewtpham',
    city: 'Berlin'
  }, {
    id: 'darius',
    name: 'Darius Ndubi',
    title: 'DevOps Engineer',
    description: 'Deploying and maintaining all the apps',
    imageFormal: 'assets/images/team_photos/darius.jpeg',
    imageFun: 'assets/images/team_photos/darius.jpeg',
    github: 'https://github.com/Darius-Ndubi',
    city: 'Nairobi'
  }, {
    id: 'isaac',
    name: 'Isaac Kimaiyo',
    title: 'Software Engineer',
    description: 'Passionately building new features for our apps',
    imageFormal: 'https://avatars0.githubusercontent.com/u/40719885?s=400&u=92eaaef55646598cd6fe1aa2fbd24a89e2e27c79&v=4',
    imageFun: 'https://avatars0.githubusercontent.com/u/40719885?s=400&u=92eaaef55646598cd6fe1aa2fbd24a89e2e27c79&v=4',
    github: 'https://github.com/Kimaiyo077',
    city: 'Nairobi'
  }, {
    id: 'katherine',
    name: 'Katherine Ng',
    title: 'UX/UI Designer',
    description: 'Design superstar',
    imageFormal: 'assets/images/team_photos/katherine.jpeg',
    imageFun: 'assets/images/team_photos/katherine.jpeg',
    github: 'https://github.com/NgKatherineDesign',
    city: 'Toronto'
  }, {
    id: 'michael',
    name: 'Michael Bukachi',
    title: 'Frontend Engineer',
    description: '...',
    imageFormal: 'assets/images/team_photos/michael.jpeg',
    imageFun: 'assets/images/team_photos/michael.jpeg',
    github: 'https://github.com/michaelbukachi',
    city: 'Nairobi'
  }, {
    id: 'nasir',
    name: 'Nasir Hussain',
    title: 'Backend Engineer',
    description: 'Backend genius',
    imageFormal: 'https://avatars3.githubusercontent.com/u/22004703?s=460&u=0f6d7119caa2ea87837c0e5814c6531136118294&v=4',
    imageFun: 'https://avatars3.githubusercontent.com/u/22004703?s=460&u=0f6d7119caa2ea87837c0e5814c6531136118294&v=4',
    github: 'https://github.com/nasirhjafri',
    city: 'Lahore'
  }, {
    id: 'ninette',
    name: 'Ninette Adhikari',
    title: 'Co-Founder and CEO',
    description: 'Product lead gone developer helping to bridge the gap',
    imageFormal: 'assets/images/team_photos/ninette_formal.JPG',
    imageFun: 'assets/images/team_photos/ninette_fun.JPG',
    github: 'https://github.com/ninetteadhikari',
    city: 'Berlin'
  }, {
    id: 'peter',
    name: 'Peter Odeny',
    title: 'Lead Software Engineer',
    description: 'Lead engineer working across the stack and making sure the engineers are well caffeinated',
    imageFormal: 'assets/images/team_photos/peter_formal.JPG',
    imageFun: 'assets/images/team_photos/peter_fun.JPG',
    github: 'https://github.com/odenypeter',
    city: 'Nairobi'
  }];
  return __jsx("div", {
    className: "team-page",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 5
    }
  }, __jsx("h1", {
    className: "display-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }
  }, "Our Storytellers"), __jsx("div", {
    className: "team-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }
  }, teamMembers.map(function (member) {
    return __jsx(_TeamItem__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: member.name
    }, member, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 18
      }
    }));
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (Team);

/***/ })

})
//# sourceMappingURL=team.js.d0441e5c46e449e666b0.hot-update.js.map