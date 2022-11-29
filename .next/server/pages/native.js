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
exports.id = "pages/native";
exports.ids = ["pages/native"];
exports.modules = {

/***/ "./pages/native.jsx":
/*!**************************!*\
  !*** ./pages/native.jsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moralis */ \"moralis\");\n/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moralis__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @moralisweb3/evm-utils */ \"@moralisweb3/evm-utils\");\n/* harmony import */ var _moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Native({ nativeBalance , address  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \"Wallet: \",\n                    address\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/native.jsx\",\n                lineNumber: 7,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \"Native Balance: \",\n                    nativeBalance,\n                    \" ETH\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/native.jsx\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/native.jsx\",\n        lineNumber: 6,\n        columnNumber: 9\n    }, this);\n}\nasync function getServerSideProps(context) {\n    await moralis__WEBPACK_IMPORTED_MODULE_1___default().start({\n        apiKey: process.env.MORALIS_API_KEY\n    });\n    const address = process.env.METAMASK_ADDRESS;\n    const nativeBalance = await moralis__WEBPACK_IMPORTED_MODULE_1___default().EvmApi.balance.getNativeBalance({\n        chain: _moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_2__.EvmChain.ETHEREUM,\n        address\n    });\n    return {\n        props: {\n            address,\n            nativeBalance: nativeBalance.result.balance.ether\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Native);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9uYXRpdmUuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBOEI7QUFDb0I7QUFFbEQsU0FBU0UsT0FBTyxFQUFFQyxjQUFhLEVBQUVDLFFBQU8sRUFBRSxFQUFFO0lBQ3hDLHFCQUNJLDhEQUFDQzs7MEJBQ0csOERBQUNDOztvQkFBRztvQkFBU0Y7Ozs7Ozs7MEJBQ2IsOERBQUNFOztvQkFBRztvQkFBaUJIO29CQUFjOzs7Ozs7Ozs7Ozs7O0FBRy9DO0FBRU8sZUFBZUksbUJBQW1CQyxPQUFPLEVBQUU7SUFDaEQsTUFBTVIsb0RBQWEsQ0FBQztRQUFFVSxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLGVBQWU7SUFBQztJQUUxRCxNQUFNVCxVQUFVTyxRQUFRQyxHQUFHLENBQUNFLGdCQUFnQjtJQUU1QyxNQUFNWCxnQkFBZ0IsTUFBTUgsOEVBQXVDLENBQUM7UUFDaEVrQixPQUFPakIscUVBQWlCO1FBQ3hCRztJQUNKO0lBRUUsT0FBTztRQUNIZ0IsT0FBTztZQUNIaEI7WUFDQUQsZUFBZUEsY0FBY2tCLE1BQU0sQ0FBQ0wsT0FBTyxDQUFDTSxLQUFLO1FBQ3JEO0lBQ0o7QUFDQSxDQUFDO0FBRUwsaUVBQWVwQixNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGFwcGVyZGFwcC8uL3BhZ2VzL25hdGl2ZS5qc3g/ZTI3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW9yYWxpcyBmcm9tICdtb3JhbGlzJztcbmltcG9ydCB7IEV2bUNoYWluIH0gZnJvbSAnQG1vcmFsaXN3ZWIzL2V2bS11dGlscyc7XG5cbmZ1bmN0aW9uIE5hdGl2ZSh7IG5hdGl2ZUJhbGFuY2UsIGFkZHJlc3MgfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDM+V2FsbGV0OiB7YWRkcmVzc308L2gzPlxuICAgICAgICAgICAgPGgzPk5hdGl2ZSBCYWxhbmNlOiB7bmF0aXZlQmFsYW5jZX0gRVRIPC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4gIGF3YWl0IE1vcmFsaXMuc3RhcnQoeyBhcGlLZXk6IHByb2Nlc3MuZW52Lk1PUkFMSVNfQVBJX0tFWSB9KTtcblxuICBjb25zdCBhZGRyZXNzID0gcHJvY2Vzcy5lbnYuTUVUQU1BU0tfQUREUkVTUztcblxuICBjb25zdCBuYXRpdmVCYWxhbmNlID0gYXdhaXQgTW9yYWxpcy5Fdm1BcGkuYmFsYW5jZS5nZXROYXRpdmVCYWxhbmNlKHtcbiAgICAgIGNoYWluOiBFdm1DaGFpbi5FVEhFUkVVTSxcbiAgICAgIGFkZHJlc3MsXG4gIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHsgXG4gICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgbmF0aXZlQmFsYW5jZTogbmF0aXZlQmFsYW5jZS5yZXN1bHQuYmFsYW5jZS5ldGhlciBcbiAgICAgICAgfSxcbiAgICB9O1xuICAgIH1cblxuZXhwb3J0IGRlZmF1bHQgTmF0aXZlOyJdLCJuYW1lcyI6WyJNb3JhbGlzIiwiRXZtQ2hhaW4iLCJOYXRpdmUiLCJuYXRpdmVCYWxhbmNlIiwiYWRkcmVzcyIsImRpdiIsImgzIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInN0YXJ0IiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIk1PUkFMSVNfQVBJX0tFWSIsIk1FVEFNQVNLX0FERFJFU1MiLCJFdm1BcGkiLCJiYWxhbmNlIiwiZ2V0TmF0aXZlQmFsYW5jZSIsImNoYWluIiwiRVRIRVJFVU0iLCJwcm9wcyIsInJlc3VsdCIsImV0aGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/native.jsx\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/native.jsx"));
module.exports = __webpack_exports__;

})();