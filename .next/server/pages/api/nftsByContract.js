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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moralis */ \"moralis\");\n/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moralis__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @moralisweb3/evm-utils */ \"@moralisweb3/evm-utils\");\n/* harmony import */ var _moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function handler(req, res) {\n    await moralis__WEBPACK_IMPORTED_MODULE_0___default().start({\n        apiKey: process.env.MORALIS_API_KEY\n    });\n    const chain = _moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_1__.EvmChain.ETHEREUM;\n    const address = \"0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d\";\n    const totalRanges = 1000;\n    const range = 1;\n    const [contractNfts] = await Promise.all([\n        moralis__WEBPACK_IMPORTED_MODULE_0___default().EvmApi.nft.getContractNFTs({\n            address,\n            chain,\n            totalRanges,\n            range\n        })\n    ]);\n    res.status(200).json({\n        contractNfts: contractNfts.result.map((nft)=>nft)\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmZ0c0J5Q29udHJhY3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBK0I7QUFDbUI7QUFFbkMsZUFBZUUsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDNUMsTUFBTUosb0RBQWEsQ0FBQztRQUFFTSxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLGVBQWU7SUFBQTtJQUV6RCxNQUFNQyxRQUFRVCxxRUFBaUI7SUFFL0IsTUFBTVcsVUFBVTtJQUVoQixNQUFNQyxjQUFjO0lBRXBCLE1BQU1DLFFBQVE7SUFFZCxNQUFNLENBQUNDLGFBQWEsR0FBRyxNQUFNQyxRQUFRQyxHQUFHLENBQUM7UUFDckNqQix5RUFBa0MsQ0FBQztZQUMvQlk7WUFDQUY7WUFDQUc7WUFDQUM7UUFDSjtLQUNIO0lBRURWLElBQUlpQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1FBQ2pCUCxjQUFjQSxhQUFhUSxNQUFNLENBQUNDLEdBQUcsQ0FBQyxDQUFDTCxNQUFRQTtJQUNuRDtBQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXBwZXJkYXBwLy4vcGFnZXMvYXBpL25mdHNCeUNvbnRyYWN0LmpzP2JjNjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vcmFsaXMgIGZyb20gJ21vcmFsaXMnO1xuaW1wb3J0IHsgRXZtQ2hhaW4gfSBmcm9tICdAbW9yYWxpc3dlYjMvZXZtLXV0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICAgIGF3YWl0IE1vcmFsaXMuc3RhcnQoeyBhcGlLZXk6IHByb2Nlc3MuZW52Lk1PUkFMSVNfQVBJX0tFWX0pO1xuXG4gICAgY29uc3QgY2hhaW4gPSBFdm1DaGFpbi5FVEhFUkVVTTtcblxuICAgIGNvbnN0IGFkZHJlc3MgPSAnMHhiYzRjYTBlZGE3NjQ3YThhYjdjMjA2MWMyZTExOGExOGE5MzZmMTNkJztcblxuICAgIGNvbnN0IHRvdGFsUmFuZ2VzID0gMTAwMDtcblxuICAgIGNvbnN0IHJhbmdlID0gMTtcblxuICAgIGNvbnN0IFtjb250cmFjdE5mdHNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICBNb3JhbGlzLkV2bUFwaS5uZnQuZ2V0Q29udHJhY3RORlRzKHtcbiAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICBjaGFpbixcbiAgICAgICAgICAgIHRvdGFsUmFuZ2VzLFxuICAgICAgICAgICAgcmFuZ2UsXG4gICAgICAgIH0pLFxuICAgIF0pO1xuXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICBjb250cmFjdE5mdHM6IGNvbnRyYWN0TmZ0cy5yZXN1bHQubWFwKChuZnQpID0+IG5mdCksXG4gICAgfSk7XG59Il0sIm5hbWVzIjpbIk1vcmFsaXMiLCJFdm1DaGFpbiIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJzdGFydCIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJNT1JBTElTX0FQSV9LRVkiLCJjaGFpbiIsIkVUSEVSRVVNIiwiYWRkcmVzcyIsInRvdGFsUmFuZ2VzIiwicmFuZ2UiLCJjb250cmFjdE5mdHMiLCJQcm9taXNlIiwiYWxsIiwiRXZtQXBpIiwibmZ0IiwiZ2V0Q29udHJhY3RORlRzIiwic3RhdHVzIiwianNvbiIsInJlc3VsdCIsIm1hcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/nftsByContract.js\n");

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