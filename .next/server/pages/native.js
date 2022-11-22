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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moralis */ \"moralis\");\n/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moralis__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @moralisweb3/evm-utils */ \"@moralisweb3/evm-utils\");\n/* harmony import */ var _moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n// props are passed from getServerSideProps\nfunction Native({ nativeBalance , address  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \"Wallet: \",\n                    address\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/native.jsx\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \"Native Balance: \",\n                    nativeBalance,\n                    \" ETH\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/native.jsx\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/native.jsx\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, this);\n}\n// This gets called on every page render\nasync function getServerSideProps(context) {\n    // reads the api key from .env.local and starts Moralis SDK\n    await moralis__WEBPACK_IMPORTED_MODULE_1___default().start({\n        apiKey: process.env.MORALIS_API_KEY\n    });\n    const address = process.env.METAMASK_ADDRESS;\n    const nativeBalance = await moralis__WEBPACK_IMPORTED_MODULE_1___default().EvmApi.balance.getNativeBalance({\n        chain: _moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_2__.EvmChain.ETHEREUM,\n        address\n    });\n    //   const tokenBalances = await Moralis.EvmApi.token.getWalletTokenBalances({\n    //     chain: EvmChain.ETHEREUM,\n    //     address,\n    //   }),\n    return {\n        props: {\n            address,\n            // Return the native balance formatted in ether via the .ether getter\n            nativeBalance: nativeBalance.result.balance.ether\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Native);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9uYXRpdmUuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBOEI7QUFDb0I7QUFFbEQsMkNBQTJDO0FBQzNDLFNBQVNFLE9BQU8sRUFBRUMsY0FBYSxFQUFFQyxRQUFPLEVBQUUsRUFBRTtJQUN4QyxxQkFDSSw4REFBQ0M7OzBCQUNHLDhEQUFDQzs7b0JBQUc7b0JBQVNGOzs7Ozs7OzBCQUNiLDhEQUFDRTs7b0JBQUc7b0JBQWlCSDtvQkFBYzs7Ozs7Ozs7Ozs7OztBQUkvQztBQUVBLHdDQUF3QztBQUNqQyxlQUFlSSxtQkFBbUJDLE9BQU8sRUFBRTtJQUNoRCwyREFBMkQ7SUFDM0QsTUFBTVIsb0RBQWEsQ0FBQztRQUFFVSxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLGVBQWU7SUFBQztJQUUxRCxNQUFNVCxVQUFVTyxRQUFRQyxHQUFHLENBQUNFLGdCQUFnQjtJQUU1QyxNQUFNWCxnQkFBZ0IsTUFBTUgsOEVBQXVDLENBQUM7UUFDaEVrQixPQUFPakIscUVBQWlCO1FBQ3hCRztJQUNKO0lBRUYsOEVBQThFO0lBQzlFLGdDQUFnQztJQUNoQyxlQUFlO0lBQ2YsUUFBUTtJQUVKLE9BQU87UUFDSGdCLE9BQU87WUFDSGhCO1lBQ0EscUVBQXFFO1lBQ3JFRCxlQUFlQSxjQUFja0IsTUFBTSxDQUFDTCxPQUFPLENBQUNNLEtBQUs7UUFFckQ7SUFDSjtBQUNBLENBQUM7QUFFTCxpRUFBZXBCLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXBwZXJkYXBwLy4vcGFnZXMvbmF0aXZlLmpzeD9lMjc2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb3JhbGlzIGZyb20gJ21vcmFsaXMnO1xuaW1wb3J0IHsgRXZtQ2hhaW4gfSBmcm9tICdAbW9yYWxpc3dlYjMvZXZtLXV0aWxzJztcblxuLy8gcHJvcHMgYXJlIHBhc3NlZCBmcm9tIGdldFNlcnZlclNpZGVQcm9wc1xuZnVuY3Rpb24gTmF0aXZlKHsgbmF0aXZlQmFsYW5jZSwgYWRkcmVzcyB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMz5XYWxsZXQ6IHthZGRyZXNzfTwvaDM+XG4gICAgICAgICAgICA8aDM+TmF0aXZlIEJhbGFuY2U6IHtuYXRpdmVCYWxhbmNlfSBFVEg8L2gzPlxuICAgICAgICAgICAgey8qIDxoMz5Ub2tlbiBCYWxhbmNlOiB7dG9rZW5CYWxhbmNlc30gPC9oMz4gKi99XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbi8vIFRoaXMgZ2V0cyBjYWxsZWQgb24gZXZlcnkgcGFnZSByZW5kZXJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuICAvLyByZWFkcyB0aGUgYXBpIGtleSBmcm9tIC5lbnYubG9jYWwgYW5kIHN0YXJ0cyBNb3JhbGlzIFNES1xuICBhd2FpdCBNb3JhbGlzLnN0YXJ0KHsgYXBpS2V5OiBwcm9jZXNzLmVudi5NT1JBTElTX0FQSV9LRVkgfSk7XG5cbiAgY29uc3QgYWRkcmVzcyA9IHByb2Nlc3MuZW52Lk1FVEFNQVNLX0FERFJFU1M7XG5cbiAgY29uc3QgbmF0aXZlQmFsYW5jZSA9IGF3YWl0IE1vcmFsaXMuRXZtQXBpLmJhbGFuY2UuZ2V0TmF0aXZlQmFsYW5jZSh7XG4gICAgICBjaGFpbjogRXZtQ2hhaW4uRVRIRVJFVU0sXG4gICAgICBhZGRyZXNzLFxuICB9KTtcblxuLy8gICBjb25zdCB0b2tlbkJhbGFuY2VzID0gYXdhaXQgTW9yYWxpcy5Fdm1BcGkudG9rZW4uZ2V0V2FsbGV0VG9rZW5CYWxhbmNlcyh7XG4vLyAgICAgY2hhaW46IEV2bUNoYWluLkVUSEVSRVVNLFxuLy8gICAgIGFkZHJlc3MsXG4vLyAgIH0pLFxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHsgXG4gICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgLy8gUmV0dXJuIHRoZSBuYXRpdmUgYmFsYW5jZSBmb3JtYXR0ZWQgaW4gZXRoZXIgdmlhIHRoZSAuZXRoZXIgZ2V0dGVyXG4gICAgICAgICAgICBuYXRpdmVCYWxhbmNlOiBuYXRpdmVCYWxhbmNlLnJlc3VsdC5iYWxhbmNlLmV0aGVyXG4gICAgICAgICAgICAvLyB0b2tlbkJhbGFuY2VzOiB0b2tlbkJhbGFuY2VzLnJlc3VsdC5tYXAoKHRva2VuKSA9PiB0b2tlbi5kaXNwbGF5KCkpIFxuICAgICAgICB9LFxuICAgIH07XG4gICAgfVxuXG5leHBvcnQgZGVmYXVsdCBOYXRpdmU7Il0sIm5hbWVzIjpbIk1vcmFsaXMiLCJFdm1DaGFpbiIsIk5hdGl2ZSIsIm5hdGl2ZUJhbGFuY2UiLCJhZGRyZXNzIiwiZGl2IiwiaDMiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0Iiwic3RhcnQiLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiTU9SQUxJU19BUElfS0VZIiwiTUVUQU1BU0tfQUREUkVTUyIsIkV2bUFwaSIsImJhbGFuY2UiLCJnZXROYXRpdmVCYWxhbmNlIiwiY2hhaW4iLCJFVEhFUkVVTSIsInByb3BzIiwicmVzdWx0IiwiZXRoZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/native.jsx\n");

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