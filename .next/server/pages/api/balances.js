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
exports.id = "pages/api/balances";
exports.ids = ["pages/api/balances"];
exports.modules = {

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

/***/ "(api)/./pages/api/balances.js":
/*!*******************************!*\
  !*** ./pages/api/balances.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moralis */ \"moralis\");\n/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moralis__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @moralisweb3/evm-utils */ \"@moralisweb3/evm-utils\");\n/* harmony import */ var _moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function handler(req, res) {\n    // reads the api key from .env.local and starts Moralis SDK\n    await moralis__WEBPACK_IMPORTED_MODULE_0___default().start({\n        apiKey: process.env.MORALIS_API_KEY\n    });\n    const address = process.env.METAMASK_ADDRESS;\n    // Promise.all() for receiving data async from two endpoints\n    const [nativeBalance, tokenBalances] = await Promise.all([\n        moralis__WEBPACK_IMPORTED_MODULE_0___default().EvmApi.balance.getNativeBalance({\n            chain: _moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_1__.EvmChain.ETHEREUM,\n            address\n        }),\n        moralis__WEBPACK_IMPORTED_MODULE_0___default().EvmApi.token.getWalletTokenBalances({\n            chain: _moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_1__.EvmChain.ETHEREUM,\n            address\n        })\n    ]);\n    res.status(200).json({\n        // formatting the output\n        nativeBalance: nativeBalance.result.balance.ether,\n        tokenBalances: tokenBalances.result.map((token)=>token.display())\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYmFsYW5jZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBOEI7QUFDb0I7QUFFbkMsZUFBZUUsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDNUMsMkRBQTJEO0lBQzNELE1BQU1KLG9EQUFhLENBQUM7UUFBRU0sUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxlQUFlO0lBQUM7SUFFMUQsTUFBTUMsVUFBVUgsUUFBUUMsR0FBRyxDQUFDRyxnQkFBZ0I7SUFFNUMsNERBQTREO0lBQzVELE1BQU0sQ0FBQ0MsZUFBZUMsY0FBYyxHQUFHLE1BQU1DLFFBQVFDLEdBQUcsQ0FBQztRQUNyRGYsOEVBQXVDLENBQUM7WUFDcENtQixPQUFPbEIscUVBQWlCO1lBQ3hCUztRQUNKO1FBQ0FWLGtGQUEyQyxDQUFDO1lBQ3hDbUIsT0FBT2xCLHFFQUFpQjtZQUN4QlM7UUFDSjtLQUNIO0lBQ0ROLElBQUltQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1FBQ2pCLHdCQUF3QjtRQUN4QlosZUFBZUEsY0FBY2EsTUFBTSxDQUFDUixPQUFPLENBQUNTLEtBQUs7UUFDakRiLGVBQWVBLGNBQWNZLE1BQU0sQ0FBQ0UsR0FBRyxDQUFDLENBQUNOLFFBQVVBLE1BQU1PLE9BQU87SUFDcEU7QUFDSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGFwcGVyZGFwcC8uL3BhZ2VzL2FwaS9iYWxhbmNlcy5qcz8wYjQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb3JhbGlzIGZyb20gJ21vcmFsaXMnO1xuaW1wb3J0IHsgRXZtQ2hhaW4gfSBmcm9tICdAbW9yYWxpc3dlYjMvZXZtLXV0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICAgIC8vIHJlYWRzIHRoZSBhcGkga2V5IGZyb20gLmVudi5sb2NhbCBhbmQgc3RhcnRzIE1vcmFsaXMgU0RLXG4gICAgYXdhaXQgTW9yYWxpcy5zdGFydCh7IGFwaUtleTogcHJvY2Vzcy5lbnYuTU9SQUxJU19BUElfS0VZIH0pO1xuXG4gICAgY29uc3QgYWRkcmVzcyA9IHByb2Nlc3MuZW52Lk1FVEFNQVNLX0FERFJFU1M7XG5cbiAgICAvLyBQcm9taXNlLmFsbCgpIGZvciByZWNlaXZpbmcgZGF0YSBhc3luYyBmcm9tIHR3byBlbmRwb2ludHNcbiAgICBjb25zdCBbbmF0aXZlQmFsYW5jZSwgdG9rZW5CYWxhbmNlc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgIE1vcmFsaXMuRXZtQXBpLmJhbGFuY2UuZ2V0TmF0aXZlQmFsYW5jZSh7XG4gICAgICAgICAgICBjaGFpbjogRXZtQ2hhaW4uRVRIRVJFVU0sXG4gICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICB9KSxcbiAgICAgICAgTW9yYWxpcy5Fdm1BcGkudG9rZW4uZ2V0V2FsbGV0VG9rZW5CYWxhbmNlcyh7XG4gICAgICAgICAgICBjaGFpbjogRXZtQ2hhaW4uRVRIRVJFVU0sXG4gICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICB9KSxcbiAgICBdKTtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICAgIC8vIGZvcm1hdHRpbmcgdGhlIG91dHB1dFxuICAgICAgICBuYXRpdmVCYWxhbmNlOiBuYXRpdmVCYWxhbmNlLnJlc3VsdC5iYWxhbmNlLmV0aGVyLFxuICAgICAgICB0b2tlbkJhbGFuY2VzOiB0b2tlbkJhbGFuY2VzLnJlc3VsdC5tYXAoKHRva2VuKSA9PiB0b2tlbi5kaXNwbGF5KCkpLFxuICAgIH0pO1xufSJdLCJuYW1lcyI6WyJNb3JhbGlzIiwiRXZtQ2hhaW4iLCJoYW5kbGVyIiwicmVxIiwicmVzIiwic3RhcnQiLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiTU9SQUxJU19BUElfS0VZIiwiYWRkcmVzcyIsIk1FVEFNQVNLX0FERFJFU1MiLCJuYXRpdmVCYWxhbmNlIiwidG9rZW5CYWxhbmNlcyIsIlByb21pc2UiLCJhbGwiLCJFdm1BcGkiLCJiYWxhbmNlIiwiZ2V0TmF0aXZlQmFsYW5jZSIsImNoYWluIiwiRVRIRVJFVU0iLCJ0b2tlbiIsImdldFdhbGxldFRva2VuQmFsYW5jZXMiLCJzdGF0dXMiLCJqc29uIiwicmVzdWx0IiwiZXRoZXIiLCJtYXAiLCJkaXNwbGF5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/balances.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/balances.js"));
module.exports = __webpack_exports__;

})();