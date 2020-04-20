webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/ui/mobile-menu/menu.component.tsx":
/*!***********************************************!*\
  !*** ./src/ui/mobile-menu/menu.component.tsx ***!
  \***********************************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _menu_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.styles */ "./src/ui/mobile-menu/menu.styles.ts");
/* harmony import */ var _hooks_use_mobile_menu_use_mobile_menu_hook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/use-mobile-menu/use-mobile-menu.hook */ "./src/hooks/use-mobile-menu/use-mobile-menu.hook.ts");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_mobile_menu_mobile_menu_action_creators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/mobile-menu/mobile-menu.action-creators */ "./src/context/mobile-menu/mobile-menu.action-creators.ts");
var _jsxFileName = "/Users/mikolajwargowski/Documents/projects/value_driven_templates/src/ui/mobile-menu/menu.component.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Menu = () => {
  const {
    dispatch,
    state: {
      isVisible
    }
  } = Object(_hooks_use_mobile_menu_use_mobile_menu_hook__WEBPACK_IMPORTED_MODULE_2__["useMobileMenuState"])();

  const onMenuItemClick = () => {
    dispatch(Object(_context_mobile_menu_mobile_menu_action_creators__WEBPACK_IMPORTED_MODULE_4__["toggleMenu"])());
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, isVisible && __jsx(_menu_styles__WEBPACK_IMPORTED_MODULE_1__["StyledNav"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx(_menu_styles__WEBPACK_IMPORTED_MODULE_1__["StyledList"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, __jsx(_menu_styles__WEBPACK_IMPORTED_MODULE_1__["StyledListItem"], {
    onClick: onMenuItemClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 15
    }
  }, "Home")), __jsx(_menu_styles__WEBPACK_IMPORTED_MODULE_1__["StyledListItem"], {
    onClick: onMenuItemClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }, "About the project")), __jsx(_menu_styles__WEBPACK_IMPORTED_MODULE_1__["StyledListItem"], {
    onClick: onMenuItemClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 15
    }
  }, "How to contribute?")))));
};

/***/ })

})
//# sourceMappingURL=_app.js.efcea38daac80a682246.hot-update.js.map