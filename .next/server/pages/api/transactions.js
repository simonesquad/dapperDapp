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
exports.id = "pages/api/transactions";
exports.ids = ["pages/api/transactions"];
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

/***/ "(api)/./pages/api/transactions.js":
/*!***********************************!*\
  !*** ./pages/api/transactions.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moralis */ \"moralis\");\n/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moralis__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @moralisweb3/evm-utils */ \"@moralisweb3/evm-utils\");\n/* harmony import */ var _moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function handler(req, res) {\n    await moralis__WEBPACK_IMPORTED_MODULE_0___default().start({\n        apiKey: process.env.MORALIS_API_KEY\n    });\n    const address = process.env.METAMASK_ADDRESS;\n    const [walletTransactions] = await Promise.all([\n        moralis__WEBPACK_IMPORTED_MODULE_0___default().EvmApi.transaction.getWalletTransactions({\n            address,\n            chain: _moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_1__.EvmChain.ETHEREUM\n        })\n    ]);\n    res.status(200).json({\n        walletTransactions: walletTransactions.result.map((transaction)=>transaction)\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdHJhbnNhY3Rpb25zLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQThCO0FBQ29CO0FBRW5DLGVBQWVFLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzVDLE1BQU1KLG9EQUFhLENBQUM7UUFBRU0sUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxlQUFlO0lBQUE7SUFFekQsTUFBTUMsVUFBVUgsUUFBUUMsR0FBRyxDQUFDRyxnQkFBZ0I7SUFFNUMsTUFBTSxDQUFDQyxtQkFBbUIsR0FBRyxNQUFNQyxRQUFRQyxHQUFHLENBQUM7UUFDM0NkLHVGQUFnRCxDQUFDO1lBQzdDVTtZQUNBUSxPQUFPakIscUVBQWlCO1FBQzVCO0tBQ0g7SUFDREcsSUFBSWdCLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7UUFDakJULG9CQUFvQkEsbUJBQW1CVSxNQUFNLENBQUNDLEdBQUcsQ0FBQyxDQUFDUCxjQUFnQkE7SUFDdkU7QUFDSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGFwcGVyZGFwcC8uL3BhZ2VzL2FwaS90cmFuc2FjdGlvbnMuanM/YjU5YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW9yYWxpcyBmcm9tICdtb3JhbGlzJztcbmltcG9ydCB7IEV2bUNoYWluIH0gZnJvbSAnQG1vcmFsaXN3ZWIzL2V2bS11dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgICBhd2FpdCBNb3JhbGlzLnN0YXJ0KHsgYXBpS2V5OiBwcm9jZXNzLmVudi5NT1JBTElTX0FQSV9LRVl9KTtcblxuICAgIGNvbnN0IGFkZHJlc3MgPSBwcm9jZXNzLmVudi5NRVRBTUFTS19BRERSRVNTO1xuXG4gICAgY29uc3QgW3dhbGxldFRyYW5zYWN0aW9uc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgIE1vcmFsaXMuRXZtQXBpLnRyYW5zYWN0aW9uLmdldFdhbGxldFRyYW5zYWN0aW9ucyh7XG4gICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgY2hhaW46IEV2bUNoYWluLkVUSEVSRVVNXG4gICAgICAgIH0pLFxuICAgIF0pO1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgICAgd2FsbGV0VHJhbnNhY3Rpb25zOiB3YWxsZXRUcmFuc2FjdGlvbnMucmVzdWx0Lm1hcCgodHJhbnNhY3Rpb24pID0+IHRyYW5zYWN0aW9uKSxcbiAgICB9KTtcbn0iXSwibmFtZXMiOlsiTW9yYWxpcyIsIkV2bUNoYWluIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInN0YXJ0IiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIk1PUkFMSVNfQVBJX0tFWSIsImFkZHJlc3MiLCJNRVRBTUFTS19BRERSRVNTIiwid2FsbGV0VHJhbnNhY3Rpb25zIiwiUHJvbWlzZSIsImFsbCIsIkV2bUFwaSIsInRyYW5zYWN0aW9uIiwiZ2V0V2FsbGV0VHJhbnNhY3Rpb25zIiwiY2hhaW4iLCJFVEhFUkVVTSIsInN0YXR1cyIsImpzb24iLCJyZXN1bHQiLCJtYXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/transactions.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/transactions.js"));
module.exports = __webpack_exports__;

})();