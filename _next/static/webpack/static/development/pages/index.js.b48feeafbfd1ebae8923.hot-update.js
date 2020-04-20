webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_use_device_detect_use_device_detect_hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/use-device-detect/use-device-detect.hook */ "./src/hooks/use-device-detect/use-device-detect.hook.ts");
/* harmony import */ var _layout_layout_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout/layout.styles */ "./src/layout/layout.styles.ts");
/* harmony import */ var _app_home_article_list_article_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/home/article-list/article-list.component */ "./src/app/home/article-list/article-list.component.tsx");
/* harmony import */ var _app_home_desktop_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/home/desktop-header/header.component */ "./src/app/home/desktop-header/header.component.tsx");
var _jsxFileName = "/Users/mikolajwargowski/Documents/projects/value_driven_templates/src/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const dummyArticle = {
  title: 'Architecture Decision Record',
  category: 'Development',
  description: 'Learn how to document important architectural decisions in your development team.',
  publishDate: new Date(),
  imageUrl: 'https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80',
  authorImgUrl: 'https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
};

const Home = () => {
  const {
    isMobile
  } = Object(_hooks_use_device_detect_use_device_detect_hook__WEBPACK_IMPORTED_MODULE_1__["useDeviceDetect"])();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, !isMobile && __jsx(_app_home_desktop_header_header_component__WEBPACK_IMPORTED_MODULE_4__["Header"], {
    image: "header-img",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }
  }), __jsx(_layout_layout_styles__WEBPACK_IMPORTED_MODULE_2__["LayoutBody"], {
    isMobile: isMobile,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, __jsx(_app_home_article_list_article_list_component__WEBPACK_IMPORTED_MODULE_3__["ArticleList"], {
    articles: [...new Array(7).fill(dummyArticle)],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.b48feeafbfd1ebae8923.hot-update.js.map