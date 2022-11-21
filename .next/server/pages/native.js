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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moralis */ \"moralis\");\n/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moralis__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @moralisweb3/evm-utils */ \"@moralisweb3/evm-utils\");\n/* harmony import */ var _moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n// props are passed from getServerSideProps\nfunction Native({ nativeBalance , address  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \"Wallet: \",\n                    address\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/native.jsx\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \"Native Balance: \",\n                    nativeBalance,\n                    \" ETH\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/native.jsx\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/native.jsx\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, this);\n}\n// This gets called on every page render\nasync function getServerSideProps(context) {\n    // reads the api key from .env.local and starts Moralis SDK\n    await moralis__WEBPACK_IMPORTED_MODULE_1___default().start({\n        apiKey: process.env.MORALIS_API_KEY\n    });\n    const address = \"0x0B1957617336b8446CF05003E47CBe9CDa78Cb3e\";\n    const nativeBalance = await moralis__WEBPACK_IMPORTED_MODULE_1___default().EvmApi.balance.getNativeBalance({\n        chain: _moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_2__.EvmChain.ETHEREUM,\n        address\n    });\n    return {\n        props: {\n            address,\n            // Return the native balance formatted in ether via the .ether getter\n            nativeBalance: nativeBalance.result.balance.ether\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Native);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9uYXRpdmUuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBOEI7QUFDb0I7QUFFbEQsMkNBQTJDO0FBQzNDLFNBQVNFLE9BQU8sRUFBRUMsY0FBYSxFQUFFQyxRQUFPLEVBQUUsRUFBRTtJQUN4QyxxQkFDSSw4REFBQ0M7OzBCQUNHLDhEQUFDQzs7b0JBQUc7b0JBQVNGOzs7Ozs7OzBCQUNiLDhEQUFDRTs7b0JBQUc7b0JBQWlCSDtvQkFBYzs7Ozs7Ozs7Ozs7OztBQUcvQztBQUVBLHdDQUF3QztBQUNqQyxlQUFlSSxtQkFBbUJDLE9BQU8sRUFBRTtJQUNoRCwyREFBMkQ7SUFDM0QsTUFBTVIsb0RBQWEsQ0FBQztRQUFFVSxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLGVBQWU7SUFBQztJQUUxRCxNQUFNVCxVQUFVO0lBRWhCLE1BQU1ELGdCQUFnQixNQUFNSCw4RUFBdUMsQ0FBQztRQUNoRWlCLE9BQU9oQixxRUFBaUI7UUFDeEJHO0lBQ0o7SUFFQSxPQUFPO1FBQ0hlLE9BQU87WUFDSGY7WUFDQSxxRUFBcUU7WUFDckVELGVBQWVBLGNBQWNpQixNQUFNLENBQUNMLE9BQU8sQ0FBQ00sS0FBSztRQUNyRDtJQUNKO0FBQ0YsQ0FBQztBQUVELGlFQUFlbkIsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RhcHBlcmRhcHAvLi9wYWdlcy9uYXRpdmUuanN4P2UyNzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vcmFsaXMgZnJvbSAnbW9yYWxpcyc7XG5pbXBvcnQgeyBFdm1DaGFpbiB9IGZyb20gJ0Btb3JhbGlzd2ViMy9ldm0tdXRpbHMnO1xuXG4vLyBwcm9wcyBhcmUgcGFzc2VkIGZyb20gZ2V0U2VydmVyU2lkZVByb3BzXG5mdW5jdGlvbiBOYXRpdmUoeyBuYXRpdmVCYWxhbmNlLCBhZGRyZXNzIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgzPldhbGxldDoge2FkZHJlc3N9PC9oMz5cbiAgICAgICAgICAgIDxoMz5OYXRpdmUgQmFsYW5jZToge25hdGl2ZUJhbGFuY2V9IEVUSDwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbi8vIFRoaXMgZ2V0cyBjYWxsZWQgb24gZXZlcnkgcGFnZSByZW5kZXJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuICAvLyByZWFkcyB0aGUgYXBpIGtleSBmcm9tIC5lbnYubG9jYWwgYW5kIHN0YXJ0cyBNb3JhbGlzIFNES1xuICBhd2FpdCBNb3JhbGlzLnN0YXJ0KHsgYXBpS2V5OiBwcm9jZXNzLmVudi5NT1JBTElTX0FQSV9LRVkgfSk7XG5cbiAgY29uc3QgYWRkcmVzcyA9ICcweDBCMTk1NzYxNzMzNmI4NDQ2Q0YwNTAwM0U0N0NCZTlDRGE3OENiM2UnO1xuXG4gIGNvbnN0IG5hdGl2ZUJhbGFuY2UgPSBhd2FpdCBNb3JhbGlzLkV2bUFwaS5iYWxhbmNlLmdldE5hdGl2ZUJhbGFuY2Uoe1xuICAgICAgY2hhaW46IEV2bUNoYWluLkVUSEVSRVVNLFxuICAgICAgYWRkcmVzcyxcbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7IFxuICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgLy8gUmV0dXJuIHRoZSBuYXRpdmUgYmFsYW5jZSBmb3JtYXR0ZWQgaW4gZXRoZXIgdmlhIHRoZSAuZXRoZXIgZ2V0dGVyXG4gICAgICAgICAgbmF0aXZlQmFsYW5jZTogbmF0aXZlQmFsYW5jZS5yZXN1bHQuYmFsYW5jZS5ldGhlciBcbiAgICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdGl2ZTsiXSwibmFtZXMiOlsiTW9yYWxpcyIsIkV2bUNoYWluIiwiTmF0aXZlIiwibmF0aXZlQmFsYW5jZSIsImFkZHJlc3MiLCJkaXYiLCJoMyIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJzdGFydCIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJNT1JBTElTX0FQSV9LRVkiLCJFdm1BcGkiLCJiYWxhbmNlIiwiZ2V0TmF0aXZlQmFsYW5jZSIsImNoYWluIiwiRVRIRVJFVU0iLCJwcm9wcyIsInJlc3VsdCIsImV0aGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/native.jsx\n");

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