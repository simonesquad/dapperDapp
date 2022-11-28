"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/transactions";
exports.ids = ["pages/transactions"];
exports.modules = {

/***/ "./pages/transactions.jsx":
/*!********************************!*\
  !*** ./pages/transactions.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moralis */ \"moralis\");\n/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moralis__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @moralisweb3/evm-utils */ \"@moralisweb3/evm-utils\");\n/* harmony import */ var _moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Transactions({ address , walletTransactions  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \"Wallet: \",\n                    address\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/transactions.jsx\",\n                lineNumber: 7,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Wallet Transactions:\"\n            }, void 0, false, {\n                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/transactions.jsx\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: walletTransactions.map((walletTransaction)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: walletTransaction\n                    }, walletTransaction, false, {\n                        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/transactions.jsx\",\n                        lineNumber: 11,\n                        columnNumber: 21\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/transactions.jsx\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/transactions.jsx\",\n        lineNumber: 6,\n        columnNumber: 9\n    }, this);\n}\nasync function getServerSideProps() {\n    const res = await fetch(`https://localhost:3000/api/transactions`);\n    const walletTransactions = await res.json();\n    return {\n        props: {\n            walletTransactions\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Transactions);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90cmFuc2FjdGlvbnMuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBOEI7QUFDb0I7QUFFbEQsU0FBU0UsYUFBYSxFQUFFQyxRQUFPLEVBQUVDLG1CQUFrQixFQUFFLEVBQUU7SUFDbkQscUJBQ0ksOERBQUNDOzswQkFDRyw4REFBQ0M7O29CQUFHO29CQUFTSDs7Ozs7OzswQkFDYiw4REFBQ0k7MEJBQUU7Ozs7OzswQkFDSCw4REFBQ0M7MEJBQ0lKLG1CQUFtQkssR0FBRyxDQUFDLENBQUNDLGtDQUNyQiw4REFBQ0M7a0NBQTRCRDt1QkFBcEJBOzs7Ozs7Ozs7Ozs7Ozs7O0FBSzdCO0FBRU8sZUFBZUUscUJBQXFCO0lBQ3pDLE1BQU1DLE1BQU0sTUFBTUMsTUFBTSxDQUFDLHVDQUF1QyxDQUFDO0lBQ2pFLE1BQU1WLHFCQUFxQixNQUFNUyxJQUFJRSxJQUFJO0lBRXZDLE9BQU87UUFDSEMsT0FBTztZQUNIWjtRQUNKO0lBQ0o7QUFDQSxDQUFDO0FBRUwsaUVBQWVGLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXBwZXJkYXBwLy4vcGFnZXMvdHJhbnNhY3Rpb25zLmpzeD9jZDIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb3JhbGlzIGZyb20gJ21vcmFsaXMnO1xuaW1wb3J0IHsgRXZtQ2hhaW4gfSBmcm9tICdAbW9yYWxpc3dlYjMvZXZtLXV0aWxzJztcblxuZnVuY3Rpb24gVHJhbnNhY3Rpb25zKHsgYWRkcmVzcywgd2FsbGV0VHJhbnNhY3Rpb25zIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgzPldhbGxldDoge2FkZHJlc3N9PC9oMz5cbiAgICAgICAgICAgIDxwPldhbGxldCBUcmFuc2FjdGlvbnM6PC9wPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHt3YWxsZXRUcmFuc2FjdGlvbnMubWFwKCh3YWxsZXRUcmFuc2FjdGlvbikgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXt3YWxsZXRUcmFuc2FjdGlvbn0+e3dhbGxldFRyYW5zYWN0aW9ufTwvbGk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdHJhbnNhY3Rpb25zYClcbiAgY29uc3Qgd2FsbGV0VHJhbnNhY3Rpb25zID0gYXdhaXQgcmVzLmpzb24oKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHsgXG4gICAgICAgICAgICB3YWxsZXRUcmFuc2FjdGlvbnNcbiAgICAgICAgfSxcbiAgICB9O1xuICAgIH1cblxuZXhwb3J0IGRlZmF1bHQgVHJhbnNhY3Rpb25zOyJdLCJuYW1lcyI6WyJNb3JhbGlzIiwiRXZtQ2hhaW4iLCJUcmFuc2FjdGlvbnMiLCJhZGRyZXNzIiwid2FsbGV0VHJhbnNhY3Rpb25zIiwiZGl2IiwiaDMiLCJwIiwidWwiLCJtYXAiLCJ3YWxsZXRUcmFuc2FjdGlvbiIsImxpIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicmVzIiwiZmV0Y2giLCJqc29uIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/transactions.jsx\n");

/***/ }),

/***/ "@moralisweb3/evm-utils":
/*!*****************************************!*\
  !*** external "@moralisweb3/evm-utils" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("@moralisweb3/evm-utils");

/***/ }),

/***/ "moralis":
/*!**************************!*\
  !*** external "moralis" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("moralis");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/transactions.jsx"));
module.exports = __webpack_exports__;

})();