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
exports.id = "pages/api/nftsByContract";
exports.ids = ["pages/api/nftsByContract"];
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

/***/ "(api)/./pages/api/nftsByContract.js":
/*!*************************************!*\
  !*** ./pages/api/nftsByContract.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moralis */ \"moralis\");\n/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moralis__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @moralisweb3/evm-utils */ \"@moralisweb3/evm-utils\");\n/* harmony import */ var _moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function handler(req, res) {\n    await moralis__WEBPACK_IMPORTED_MODULE_0___default().start({\n        apiKey: process.env.MORALIS_API_KEY\n    });\n    // console.log(req.method);\n    // console.log(req.body);\n    // console.log(req.body.address);\n    // const address = req.body.address\n    const address = \"0xC178994cB9b66307Cd62dB8b411759Dd36D9C2EE\";\n    const chain = _moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_1__.EvmChain.ETHEREUM;\n    const totalRanges = 1000;\n    const range = 1;\n    const [contractNfts] = await Promise.all([\n        moralis__WEBPACK_IMPORTED_MODULE_0___default().EvmApi.nft.getContractNFTs({\n            address,\n            chain,\n            totalRanges,\n            range\n        })\n    ]);\n    res.status(200).json({\n        contractNfts: contractNfts.result.map((nft)=>nft)\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmZ0c0J5Q29udHJhY3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBK0I7QUFDbUI7QUFFbkMsZUFBZUUsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDNUMsTUFBTUosb0RBQWEsQ0FBQztRQUFFTSxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLGVBQWU7SUFBQTtJQUV6RCwyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLGlDQUFpQztJQUVqQyxtQ0FBbUM7SUFFbkMsTUFBTUMsVUFBVTtJQUVoQixNQUFNQyxRQUFRVixxRUFBaUI7SUFFL0IsTUFBTVksY0FBYztJQUVwQixNQUFNQyxRQUFRO0lBRWQsTUFBTSxDQUFDQyxhQUFhLEdBQUcsTUFBTUMsUUFBUUMsR0FBRyxDQUFDO1FBQ3JDakIseUVBQWtDLENBQUM7WUFDL0JVO1lBQ0FDO1lBQ0FFO1lBQ0FDO1FBQ0o7S0FDSDtJQUVEVixJQUFJaUIsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztRQUNqQlAsY0FBY0EsYUFBYVEsTUFBTSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0wsTUFBUUE7SUFDbkQ7QUFDSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGFwcGVyZGFwcC8uL3BhZ2VzL2FwaS9uZnRzQnlDb250cmFjdC5qcz9iYzYxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb3JhbGlzICBmcm9tICdtb3JhbGlzJztcbmltcG9ydCB7IEV2bUNoYWluIH0gZnJvbSAnQG1vcmFsaXN3ZWIzL2V2bS11dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgICBhd2FpdCBNb3JhbGlzLnN0YXJ0KHsgYXBpS2V5OiBwcm9jZXNzLmVudi5NT1JBTElTX0FQSV9LRVl9KTtcblxuICAgIC8vIGNvbnNvbGUubG9nKHJlcS5tZXRob2QpO1xuICAgIC8vIGNvbnNvbGUubG9nKHJlcS5ib2R5KTtcbiAgICAvLyBjb25zb2xlLmxvZyhyZXEuYm9keS5hZGRyZXNzKTtcblxuICAgIC8vIGNvbnN0IGFkZHJlc3MgPSByZXEuYm9keS5hZGRyZXNzXG4gICAgXG4gICAgY29uc3QgYWRkcmVzcyA9ICcweEMxNzg5OTRjQjliNjYzMDdDZDYyZEI4YjQxMTc1OURkMzZEOUMyRUUnO1xuXG4gICAgY29uc3QgY2hhaW4gPSBFdm1DaGFpbi5FVEhFUkVVTTtcblxuICAgIGNvbnN0IHRvdGFsUmFuZ2VzID0gMTAwMDtcblxuICAgIGNvbnN0IHJhbmdlID0gMTtcblxuICAgIGNvbnN0IFtjb250cmFjdE5mdHNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICBNb3JhbGlzLkV2bUFwaS5uZnQuZ2V0Q29udHJhY3RORlRzKHtcbiAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICBjaGFpbixcbiAgICAgICAgICAgIHRvdGFsUmFuZ2VzLFxuICAgICAgICAgICAgcmFuZ2UsXG4gICAgICAgIH0pLFxuICAgIF0pO1xuXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICBjb250cmFjdE5mdHM6IGNvbnRyYWN0TmZ0cy5yZXN1bHQubWFwKChuZnQpID0+IG5mdCksXG4gICAgfSk7XG59XG4iXSwibmFtZXMiOlsiTW9yYWxpcyIsIkV2bUNoYWluIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInN0YXJ0IiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIk1PUkFMSVNfQVBJX0tFWSIsImFkZHJlc3MiLCJjaGFpbiIsIkVUSEVSRVVNIiwidG90YWxSYW5nZXMiLCJyYW5nZSIsImNvbnRyYWN0TmZ0cyIsIlByb21pc2UiLCJhbGwiLCJFdm1BcGkiLCJuZnQiLCJnZXRDb250cmFjdE5GVHMiLCJzdGF0dXMiLCJqc29uIiwicmVzdWx0IiwibWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/nftsByContract.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/nftsByContract.js"));
module.exports = __webpack_exports__;

})();