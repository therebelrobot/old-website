webpackJsonp([1],{

/***/ 225:
/*!********************************!*\
  !*** ./src/containers/Home.js ***!
  \********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__saleae_ui_lib__ = __webpack_require__(/*! @saleae/ui-lib */ 19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__saleae_ui_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__saleae_ui_lib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__(/*! styled-components */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_feather__ = __webpack_require__(/*! react-feather */ 226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_feather___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_feather__);
var _templateObject = _taggedTemplateLiteral(['\n  border-bottom: solid 1px #eee;\n'], ['\n  border-bottom: solid 1px #eee;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  font-size: 90%;\n'], ['\n  font-size: 90%;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  font-size: 80%;\n  font-style: italic;\n'], ['\n  font-size: 80%;\n  font-style: italic;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  border: solid 1px #eee;\n'], ['\n  border: solid 1px #eee;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  display: inline-block;\n  font-size: 80%;\n  font-style: italic;\n  margin-right:', ';\n'], ['\n  display: inline-block;\n  font-size: 80%;\n  font-style: italic;\n  margin-right:', ';\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var FlexUnderline = Object(__WEBPACK_IMPORTED_MODULE_2_styled_components__["default"])(__WEBPACK_IMPORTED_MODULE_0__saleae_ui_lib__["Flex"])(_templateObject);

var SubSubhead = Object(__WEBPACK_IMPORTED_MODULE_2_styled_components__["default"])(__WEBPACK_IMPORTED_MODULE_0__saleae_ui_lib__["Subhead"])(_templateObject2);

var SubSubSubhead = Object(__WEBPACK_IMPORTED_MODULE_2_styled_components__["default"])(__WEBPACK_IMPORTED_MODULE_0__saleae_ui_lib__["Subhead"])(_templateObject3);

var BorderBox = Object(__WEBPACK_IMPORTED_MODULE_2_styled_components__["default"])(__WEBPACK_IMPORTED_MODULE_0__saleae_ui_lib__["Box"])(_templateObject4);
var BorderFlex = Object(__WEBPACK_IMPORTED_MODULE_2_styled_components__["default"])(__WEBPACK_IMPORTED_MODULE_0__saleae_ui_lib__["Flex"])(_templateObject4);
var SubCode = Object(__WEBPACK_IMPORTED_MODULE_2_styled_components__["default"])(__WEBPACK_IMPORTED_MODULE_0__saleae_ui_lib__["Code"])(_templateObject5, Object(__WEBPACK_IMPORTED_MODULE_0__saleae_ui_lib__["majorScale"])(1));

var Header = function Header() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    FlexUnderline,
    {
      direction: 'row',
      wrap: true,
      pb: Object(__WEBPACK_IMPORTED_MODULE_0__saleae_ui_lib__["majorScale"])(1),
      mb: Object(__WEBPACK_IMPORTED_MODULE_0__saleae_ui_lib__["majorScale"])(1),
      justify: 'center',
      align: 'center'
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_0__saleae_ui_lib__["Heading"],
      null,
      'theRebelRobot'
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0__saleae_ui_lib__["Box"], { flex: 1 }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_0__saleae_ui_lib__["Box"],
      null,
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_0__saleae_ui_lib__["Subhead"],
        null,
        'Aster Haven'
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        SubSubSubhead,
        null,
        ''
      )
    )
  );
};
var Software = function Software() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    BorderBox,
    { m: Object(__WEBPACK_IMPORTED_MODULE_0__saleae_ui_lib__["majorScale"])(1), p: Object(__WEBPACK_IMPORTED_MODULE_0__saleae_ui_lib__["majorScale"])(4), w: [1, 1, "45%", 1 / 3] },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_0__saleae_ui_lib__["Subhead"],
      null,
      'Software'
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      SubSubSubhead,
      { mt: Object(__WEBPACK_IMPORTED_MODULE_0__saleae_ui_lib__["majorScale"])(1) },
      'Full-stack Web Development, Node.js, React.js, Docker, Infrastructure, Systems Administration, DevOps and Scaling'
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      SubSubhead,
      { mt: Object(__WEBPACK_IMPORTED_MODULE_0__saleae_ui_lib__["majorScale"])(3), mb: Object(__WEBPACK_IMPORTED_MODULE_0__saleae_ui_lib__["majorScale"])(2) },
      'Saleae - Sr Software Engineer'
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      SubSubSubhead,
      null,
      '2017-Present'
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      SubSubhead,
      { mt: Object(__WEBPACK_IMPORTED_MODULE_0__saleae_ui_lib__["majorScale"])(3), mb: Object(__WEBPACK_IMPORTED_MODULE_0__saleae_ui_lib__["majorScale"])(2) },
      'Segment - Software Engineer'
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      SubSubSubhead,
      null,
      '2016-2017'
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      SubSubhead,
      { mt: Object(__WEBPACK_IMPORTED_MODULE_0__saleae_ui_lib__["majorScale"])(3), mb: Object(__WEBPACK_IMPORTED_MODULE_0__saleae_ui_lib__["majorScale"])(2) },
      'Code for San Francisco - Core Team'
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      SubSubSubhead,
      null,
      '2015-2017'
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      SubSubhead,
      { mt: Object(__WEBPACK_IMPORTED_MODULE_0__saleae_ui_lib__["majorScale"])(3), mb: Object(__WEBPACK_IMPORTED_MODULE_0__saleae_ui_lib__["majorScale"])(2) },
      'Mashape - Software Engineer'
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      SubSubSubhead,
      null,
      '2015-2016'
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      SubSubhead,
      { mt: Object(__WEBPACK_IMPORTED_MODULE_0__saleae_ui_lib__["majorScale"])(3), mb: Object(__WEBPACK_IMPORTED_MODULE_0__saleae_ui_lib__["majorScale"])(2) },
      'Node.js Website Working Group'
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      SubSubSubhead,
      null,
      '2014-2015'
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      SubSubhead,
      { mt: Object(__WEBPACK_IMPORTED_MODULE_0__saleae_ui_lib__["majorScale"])(3), mb: Object(__WEBPACK_IMPORTED_MODULE_0__saleae_ui_lib__["majorScale"])(2) },
      'Etcetera'
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      SubSubSubhead,
      null,
      'For additional information about employment history, including independent contracting, business ventures, or for a full resume, please reach out at',
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('br', null),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        SubCode,
        null,
        'inquiries'
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        SubCode,
        null,
        'at'
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        SubCode,
        null,
        'therebelrobot.com'
      )
    )
  );
};
var Music = function Music() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    BorderBox,
    { m: Object(__WEBPACK_IMPORTED_MODULE_0__saleae_ui_lib__["majorScale"])(1), p: Object(__WEBPACK_IMPORTED_MODULE_0__saleae_ui_lib__["majorScale"])(4), w: [1, 1, "45%", 1 / 3] },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_0__saleae_ui_lib__["Subhead"],
      null,
      'Music'
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      SubSubhead,
      { mt: Object(__WEBPACK_IMPORTED_MODULE_0__saleae_ui_lib__["majorScale"])(3), mb: Object(__WEBPACK_IMPORTED_MODULE_0__saleae_ui_lib__["majorScale"])(2) },
      'San Francisco Gay Men\'s Chorus'
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      SubSubSubhead,
      null,
      'The San Francisco Gay Men\'s Chorus provides community support through outreach, peformances, and anti-bullying curriculum to nearby schools.',
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('br', null),
      'Joined in 2017, Low Bass.',
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('br', null),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_0__saleae_ui_lib__["Box"],
        { mt: Object(__WEBPACK_IMPORTED_MODULE_0__saleae_ui_lib__["majorScale"])(2), mb: Object(__WEBPACK_IMPORTED_MODULE_0__saleae_ui_lib__["majorScale"])(3) },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('iframe', {
          src: 'https://www.youtube.com/embed/XuX7RLYxMVI',
          frameborder: '0',
          gesture: 'media',
          allow: 'encrypted-media',
          allowfullscreen: true })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      SubSubhead,
      { mt: Object(__WEBPACK_IMPORTED_MODULE_0__saleae_ui_lib__["majorScale"])(3), mb: Object(__WEBPACK_IMPORTED_MODULE_0__saleae_ui_lib__["majorScale"])(2) },
      'theForgeProject'
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      SubSubSubhead,
      null,
      'A musical side-project, producing smooth rhythmic future-bass with a strong walking beat.',
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('br', null),
      'Started in 2016.',
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('br', null),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('br', null),
      'For usage rights or booking, please reach out at',
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('br', null),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        SubCode,
        null,
        'inquiries'
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        SubCode,
        null,
        'at'
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        SubCode,
        null,
        'therebelrobot.com'
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_0__saleae_ui_lib__["Box"],
        { mt: Object(__WEBPACK_IMPORTED_MODULE_0__saleae_ui_lib__["majorScale"])(2), mb: Object(__WEBPACK_IMPORTED_MODULE_0__saleae_ui_lib__["majorScale"])(3) },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('iframe', {
          src: 'https://open.spotify.com/embed/user/1229875529/playlist/3MIgxg3v5FAYGpTg5aoD5c?theme=white',
          frameborder: '0',
          allowtransparency: 'true'
        })
      )
    )
  );
};
var Contact = function Contact() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    BorderFlex,
    { m: Object(__WEBPACK_IMPORTED_MODULE_0__saleae_ui_lib__["majorScale"])(1), p: Object(__WEBPACK_IMPORTED_MODULE_0__saleae_ui_lib__["majorScale"])(4), w: [1], align: 'center', justify: 'center', direction: 'column' },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_0__saleae_ui_lib__["Subhead"],
      null,
      'Contact'
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_0__saleae_ui_lib__["Flex"],
      { mt: Object(__WEBPACK_IMPORTED_MODULE_0__saleae_ui_lib__["majorScale"])(1), align: 'center', justify: 'center' },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_0__saleae_ui_lib__["Box"],
        { m: Object(__WEBPACK_IMPORTED_MODULE_0__saleae_ui_lib__["majorScale"])(2) },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_0__saleae_ui_lib__["Link"],
          { href: 'https://github.com/therebelrobot' },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_feather__["Github"], null)
        )
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_0__saleae_ui_lib__["Box"],
        { m: Object(__WEBPACK_IMPORTED_MODULE_0__saleae_ui_lib__["majorScale"])(2) },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_0__saleae_ui_lib__["Link"],
          { href: 'https://twitter.com/therebelrobot' },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_feather__["Twitter"], null)
        )
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_0__saleae_ui_lib__["Box"],
        { m: Object(__WEBPACK_IMPORTED_MODULE_0__saleae_ui_lib__["majorScale"])(2) },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_0__saleae_ui_lib__["Link"],
          { href: 'https://theforgeproject.bandcamp.com' },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_feather__["Headphones"], null)
        )
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_0__saleae_ui_lib__["Box"],
        { m: Object(__WEBPACK_IMPORTED_MODULE_0__saleae_ui_lib__["majorScale"])(2) },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_0__saleae_ui_lib__["Link"],
          { href: 'mailto:inquiries@therebelrobot.com' },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_feather__["Mail"], null)
        )
      )
    )
  );
};

var Root = function Root() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_0__saleae_ui_lib__["Box"],
    { p: Object(__WEBPACK_IMPORTED_MODULE_0__saleae_ui_lib__["majorScale"])(4) },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Header, null),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_0__saleae_ui_lib__["Flex"],
      { direction: 'row', wrap: true, justify: 'center' },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Software, null),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Music, null)
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Contact, null)
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Root);

/***/ }),

/***/ 37:
/*!*******************************************************************!*\
  !*** multi ./node_modules/react-hot-loader/patch.js ./src/app.js ***!
  \*******************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/ozhaven/git/therebelrobot/therebelrobot.github.io/node_modules/react-hot-loader/patch.js */38);
module.exports = __webpack_require__(/*! /Users/ozhaven/git/therebelrobot/therebelrobot.github.io/src/app.js */41);


/***/ }),

/***/ 41:
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__saleae_ui_lib__ = __webpack_require__(/*! @saleae/ui-lib */ 19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__saleae_ui_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__saleae_ui_lib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(/*! react-dom */ 33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_hot_loader__ = __webpack_require__(/*! react-hot-loader */ 220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_hot_loader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_hot_loader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__containers_Home__ = __webpack_require__(/*! ./containers/Home */ 225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_styled_components__ = __webpack_require__(/*! styled-components */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__theme__ = __webpack_require__(/*! ./theme */ 467);
var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }













Object(__WEBPACK_IMPORTED_MODULE_5_styled_components__["injectGlobal"])(_templateObject, __WEBPACK_IMPORTED_MODULE_6__theme__["a" /* globalStyles */]);

var render = function render(Component) {
  __WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3_react_hot_loader__["AppContainer"],
    null,
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_0__saleae_ui_lib__["Provider"],
      {
        theme: {
          font: '"Quattrocento", times, serif',
          fontSizes: [12, 16, 24, 36, 48, 72]
        } },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Component, null)
    )
  ), document.getElementById('app'));
};

render(__WEBPACK_IMPORTED_MODULE_4__containers_Home__["a" /* default */]);

if (false) {
  module.hot.accept('./containers/Home', function () {
    render(Home);
  });
}

/***/ }),

/***/ 467:
/*!**********************!*\
  !*** ./src/theme.js ***!
  \**********************/
/*! exports provided: globalStyles */
/*! exports used: globalStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return globalStyles; });
var globalStyles = "\n  @import url('https://fonts.googleapis.com/css?family=Quattrocento:400,700');\n  html {\n    font-family: \"Quattrocento\", times, serif;\n  }\n";

/***/ })

},[37]);
//# sourceMappingURL=client.5d96dd9a.js.map
