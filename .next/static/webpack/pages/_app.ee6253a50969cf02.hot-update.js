/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! wagmi/providers/public */ \"./node_modules/wagmi/dist/providers/public.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/layout */ \"./pages/components/layout.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n// styles //\n\n\n\nconst { provider , webSocketProvider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_6__.configureChains)(wagmi__WEBPACK_IMPORTED_MODULE_6__.defaultChains, [\n    (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_7__.publicProvider)()\n]);\nconst client = (0,wagmi__WEBPACK_IMPORTED_MODULE_6__.createClient)({\n    provider,\n    webSocketProvider,\n    autoConnect: true\n});\nfunction MyApp(param) {\n    let { Component , pageProps  } = param;\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        __webpack_require__(/*! bootstrap/dist/js/bootstrap.bundle.min.js */ \"./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js\");\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_6__.WagmiConfig, {\n        client: client,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_1__.SessionProvider, {\n            session: pageProps.session,\n            refetchInterval: 0,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/_app.jsx\",\n                    lineNumber: 28,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/_app.jsx\",\n                lineNumber: 27,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/_app.jsx\",\n            lineNumber: 26,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/_app.jsx\",\n        lineNumber: 25,\n        columnNumber: 7\n    }, this);\n}\n_s(MyApp, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUFrRjtBQUMxQjtBQUNOO0FBQ1Y7QUFDeEMsWUFBWTtBQUNrQztBQUNmO0FBQ0c7QUFFbEMsTUFBTSxFQUFFUSxTQUFRLEVBQUVDLGtCQUFpQixFQUFFLEdBQUdSLHNEQUFlQSxDQUFDQyxnREFBYUEsRUFBRTtJQUFDRSxzRUFBY0E7Q0FBRztBQUV6RixNQUFNTSxTQUFTVixtREFBWUEsQ0FBQztJQUMxQlE7SUFDQUM7SUFDQUUsYUFBYSxJQUFJO0FBQ25CO0FBRUEsU0FBU0MsTUFBTSxLQUF3QixFQUFFO1FBQTFCLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFFLEdBQXhCOztJQUNiUCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2RRLG1CQUFPQSxDQUFDLDJHQUEyQztJQUNyRCxHQUFHLEVBQUU7SUFFTCxxQkFFSSw4REFBQ1osOENBQVdBO1FBQUNPLFFBQVFBO2tCQUNuQiw0RUFBQ0wsNERBQWVBO1lBQUNXLFNBQVNGLFVBQVVFLE9BQU87WUFBRUMsaUJBQWlCO3NCQUM1RCw0RUFBQ1gsMERBQU1BOzBCQUNMLDRFQUFDTztvQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNcEM7R0FoQlNGO0tBQUFBO0FBa0JULCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanN4PzRjYjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ2xpZW50LCBjb25maWd1cmVDaGFpbnMsIGRlZmF1bHRDaGFpbnMsIFdhZ21pQ29uZmlnIH0gZnJvbSAnd2FnbWknO1xuaW1wb3J0IHsgcHVibGljUHJvdmlkZXIgfSBmcm9tICd3YWdtaS9wcm92aWRlcnMvcHVibGljJztcbmltcG9ydCB7IFNlc3Npb25Qcm92aWRlciB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vY29tcG9uZW50cy9sYXlvdXQnXG4vLyBzdHlsZXMgLy9cbmltcG9ydCBcImJvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgeyBwcm92aWRlciwgd2ViU29ja2V0UHJvdmlkZXIgfSA9IGNvbmZpZ3VyZUNoYWlucyhkZWZhdWx0Q2hhaW5zLCBbcHVibGljUHJvdmlkZXIoKV0pO1xuXG5jb25zdCBjbGllbnQgPSBjcmVhdGVDbGllbnQoe1xuICBwcm92aWRlcixcbiAgd2ViU29ja2V0UHJvdmlkZXIsXG4gIGF1dG9Db25uZWN0OiB0cnVlLFxufSk7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJlcXVpcmUoXCJib290c3RyYXAvZGlzdC9qcy9ib290c3RyYXAuYnVuZGxlLm1pbi5qc1wiKTtcbiAgfSwgW10pO1xuICBcbiAgcmV0dXJuIChcbiAgICBcbiAgICAgIDxXYWdtaUNvbmZpZyBjbGllbnQ9e2NsaWVudH0+XG4gICAgICAgIDxTZXNzaW9uUHJvdmlkZXIgc2Vzc2lvbj17cGFnZVByb3BzLnNlc3Npb259IHJlZmV0Y2hJbnRlcnZhbD17MH0+XG4gICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgPC9TZXNzaW9uUHJvdmlkZXI+XG4gICAgICA8L1dhZ21pQ29uZmlnPlxuICAgIFxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDsiXSwibmFtZXMiOlsiY3JlYXRlQ2xpZW50IiwiY29uZmlndXJlQ2hhaW5zIiwiZGVmYXVsdENoYWlucyIsIldhZ21pQ29uZmlnIiwicHVibGljUHJvdmlkZXIiLCJTZXNzaW9uUHJvdmlkZXIiLCJMYXlvdXQiLCJ1c2VFZmZlY3QiLCJwcm92aWRlciIsIndlYlNvY2tldFByb3ZpZGVyIiwiY2xpZW50IiwiYXV0b0Nvbm5lY3QiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInJlcXVpcmUiLCJzZXNzaW9uIiwicmVmZXRjaEludGVydmFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.jsx\n"));

/***/ }),

/***/ "./pages/components/footer.js":
/*!************************************!*\
  !*** ./pages/components/footer.js ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./pages/components/layout.js":
/*!************************************!*\
  !*** ./pages/components/layout.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar */ \"./pages/components/navbar.js\");\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_navbar__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ \"./pages/components/footer.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_footer__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Layout(param) {\n    let { children  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_navbar__WEBPACK_IMPORTED_MODULE_1___default()), {}, void 0, false, {\n                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/components/layout.js\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/components/layout.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_footer__WEBPACK_IMPORTED_MODULE_2___default()), {}, void 0, false, {\n                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/components/layout.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL2xheW91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBNkI7QUFDQTtBQUVkLFNBQVNFLE9BQU8sS0FBWSxFQUFFO1FBQWQsRUFBRUMsU0FBUSxFQUFFLEdBQVo7SUFDN0IscUJBQ0U7OzBCQUNFLDhEQUFDSCxnREFBTUE7Ozs7OzBCQUNQLDhEQUFDSTswQkFBTUQ7Ozs7OzswQkFDUCw4REFBQ0YsZ0RBQU1BOzs7Ozs7O0FBR2IsQ0FBQztLQVJ1QkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9sYXlvdXQuanM/OTVlYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmF2YmFyIGZyb20gJy4vbmF2YmFyJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL2Zvb3RlcidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfSkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TmF2YmFyIC8+XG4gICAgICA8bWFpbj57Y2hpbGRyZW59PC9tYWluPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvPlxuICApXG59Il0sIm5hbWVzIjpbIk5hdmJhciIsIkZvb3RlciIsIkxheW91dCIsImNoaWxkcmVuIiwibWFpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/layout.js\n"));

/***/ }),

/***/ "./pages/components/navbar.js":
/*!************************************!*\
  !*** ./pages/components/navbar.js ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ })

});