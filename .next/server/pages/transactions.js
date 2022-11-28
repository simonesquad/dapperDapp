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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moralis */ \"moralis\");\n/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moralis__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @moralisweb3/evm-utils */ \"@moralisweb3/evm-utils\");\n/* harmony import */ var _moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Transactions({ address , walletTransactions  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \"Wallet: \",\n                    address\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/transactions.jsx\",\n                lineNumber: 7,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Wallet Transactions:\"\n            }, void 0, false, {\n                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/transactions.jsx\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: walletTransactions.map((walletTransaction)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: walletTransaction\n                    }, walletTransaction, false, {\n                        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/transactions.jsx\",\n                        lineNumber: 11,\n                        columnNumber: 21\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/transactions.jsx\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/transactions.jsx\",\n        lineNumber: 6,\n        columnNumber: 9\n    }, this);\n}\nasync function getServerSideProps(context) {\n    await moralis__WEBPACK_IMPORTED_MODULE_1___default().start({\n        apiKey: process.env.MORALIS_API_KEY\n    });\n    const address = process.env.METAMASK_ADDRESS;\n    const walletTransactions = await moralis__WEBPACK_IMPORTED_MODULE_1___default().EvmApi.transaction.getWalletTransactions({\n        chain: _moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_2__.EvmChain.ETHEREUM,\n        address\n    });\n    console.log(walletTransactions);\n    return {\n        props: {\n            address,\n            walletTransactions: walletTransactions.result\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Transactions);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90cmFuc2FjdGlvbnMuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBOEI7QUFDb0I7QUFFbEQsU0FBU0UsYUFBYSxFQUFFQyxRQUFPLEVBQUVDLG1CQUFrQixFQUFFLEVBQUU7SUFDbkQscUJBQ0ksOERBQUNDOzswQkFDRyw4REFBQ0M7O29CQUFHO29CQUFTSDs7Ozs7OzswQkFDYiw4REFBQ0k7MEJBQUU7Ozs7OzswQkFDSCw4REFBQ0M7MEJBQ0lKLG1CQUFtQkssR0FBRyxDQUFDLENBQUNDLGtDQUNyQiw4REFBQ0M7a0NBQTRCRDt1QkFBcEJBOzs7Ozs7Ozs7Ozs7Ozs7O0FBSzdCO0FBRU8sZUFBZUUsbUJBQW1CQyxPQUFPLEVBQUU7SUFDaEQsTUFBTWIsb0RBQWEsQ0FBQztRQUFFZSxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLGVBQWU7SUFBQztJQUUxRCxNQUFNZixVQUFVYSxRQUFRQyxHQUFHLENBQUNFLGdCQUFnQjtJQUU1QyxNQUFNZixxQkFBcUIsTUFBTUosdUZBQWdELENBQUM7UUFDOUV1QixPQUFPdEIscUVBQWlCO1FBQ3hCRTtJQUNKO0lBQ0FzQixRQUFRQyxHQUFHLENBQUN0QjtJQUVWLE9BQU87UUFDSHVCLE9BQU87WUFDSHhCO1lBQ0FDLG9CQUFvQkEsbUJBQW1Cd0IsTUFBTTtRQUNqRDtJQUNKO0FBQ0EsQ0FBQztBQUVMLGlFQUFlMUIsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RhcHBlcmRhcHAvLi9wYWdlcy90cmFuc2FjdGlvbnMuanN4P2NkMjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vcmFsaXMgZnJvbSAnbW9yYWxpcyc7XG5pbXBvcnQgeyBFdm1DaGFpbiB9IGZyb20gJ0Btb3JhbGlzd2ViMy9ldm0tdXRpbHMnO1xuXG5mdW5jdGlvbiBUcmFuc2FjdGlvbnMoeyBhZGRyZXNzLCB3YWxsZXRUcmFuc2FjdGlvbnMgfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDM+V2FsbGV0OiB7YWRkcmVzc308L2gzPlxuICAgICAgICAgICAgPHA+V2FsbGV0IFRyYW5zYWN0aW9uczo8L3A+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge3dhbGxldFRyYW5zYWN0aW9ucy5tYXAoKHdhbGxldFRyYW5zYWN0aW9uKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3dhbGxldFRyYW5zYWN0aW9ufT57d2FsbGV0VHJhbnNhY3Rpb259PC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuICBhd2FpdCBNb3JhbGlzLnN0YXJ0KHsgYXBpS2V5OiBwcm9jZXNzLmVudi5NT1JBTElTX0FQSV9LRVkgfSk7XG5cbiAgY29uc3QgYWRkcmVzcyA9IHByb2Nlc3MuZW52Lk1FVEFNQVNLX0FERFJFU1M7XG5cbiAgY29uc3Qgd2FsbGV0VHJhbnNhY3Rpb25zID0gYXdhaXQgTW9yYWxpcy5Fdm1BcGkudHJhbnNhY3Rpb24uZ2V0V2FsbGV0VHJhbnNhY3Rpb25zKHtcbiAgICAgIGNoYWluOiBFdm1DaGFpbi5FVEhFUkVVTSxcbiAgICAgIGFkZHJlc3NcbiAgfSk7XG4gIGNvbnNvbGUubG9nKHdhbGxldFRyYW5zYWN0aW9ucyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczogeyBcbiAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICB3YWxsZXRUcmFuc2FjdGlvbnM6IHdhbGxldFRyYW5zYWN0aW9ucy5yZXN1bHRcbiAgICAgICAgfSxcbiAgICB9O1xuICAgIH1cblxuZXhwb3J0IGRlZmF1bHQgVHJhbnNhY3Rpb25zOyJdLCJuYW1lcyI6WyJNb3JhbGlzIiwiRXZtQ2hhaW4iLCJUcmFuc2FjdGlvbnMiLCJhZGRyZXNzIiwid2FsbGV0VHJhbnNhY3Rpb25zIiwiZGl2IiwiaDMiLCJwIiwidWwiLCJtYXAiLCJ3YWxsZXRUcmFuc2FjdGlvbiIsImxpIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInN0YXJ0IiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIk1PUkFMSVNfQVBJX0tFWSIsIk1FVEFNQVNLX0FERFJFU1MiLCJFdm1BcGkiLCJ0cmFuc2FjdGlvbiIsImdldFdhbGxldFRyYW5zYWN0aW9ucyIsImNoYWluIiwiRVRIRVJFVU0iLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJyZXN1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/transactions.jsx\n");

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