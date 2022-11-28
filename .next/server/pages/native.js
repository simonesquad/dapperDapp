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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moralis */ \"moralis\");\n/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moralis__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @moralisweb3/evm-utils */ \"@moralisweb3/evm-utils\");\n/* harmony import */ var _moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n// style stuff //\n\n// props are passed from getServerSideProps\nfunction Native({ nativeBalance , address  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \"Wallet: \",\n                    address\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/native.jsx\",\n                lineNumber: 11,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \"Native Balance: \",\n                    nativeBalance,\n                    \" ETH\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/native.jsx\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/native.jsx\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, this);\n}\n// This gets called on every page render\nasync function getServerSideProps(context) {\n    // reads the api key from .env.local and starts Moralis SDK\n    await moralis__WEBPACK_IMPORTED_MODULE_1___default().start({\n        apiKey: process.env.MORALIS_API_KEY\n    });\n    const address = process.env.METAMASK_ADDRESS;\n    const nativeBalance = await moralis__WEBPACK_IMPORTED_MODULE_1___default().EvmApi.balance.getNativeBalance({\n        chain: _moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_2__.EvmChain.ETHEREUM,\n        address\n    });\n    //   const tokenBalances = await Moralis.EvmApi.token.getWalletTokenBalances({\n    //     chain: EvmChain.ETHEREUM,\n    //     address,\n    //   }),\n    return {\n        props: {\n            address,\n            // Return the native balance formatted in ether via the .ether getter\n            nativeBalance: nativeBalance.result.balance.ether\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Native);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9uYXRpdmUuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBOEI7QUFDb0I7QUFFbEQsaUJBQWlCO0FBQzJCO0FBRTVDLDJDQUEyQztBQUMzQyxTQUFTRyxPQUFPLEVBQUVDLGNBQWEsRUFBRUMsUUFBTyxFQUFFLEVBQUU7SUFDeEMscUJBQ0ksOERBQUNDOzswQkFDRyw4REFBQ0M7O29CQUFHO29CQUFTRjs7Ozs7OzswQkFDYiw4REFBQ0U7O29CQUFHO29CQUFpQkg7b0JBQWM7Ozs7Ozs7Ozs7Ozs7QUFRL0M7QUFFQSx3Q0FBd0M7QUFDakMsZUFBZUksbUJBQW1CQyxPQUFPLEVBQUU7SUFDaEQsMkRBQTJEO0lBQzNELE1BQU1ULG9EQUFhLENBQUM7UUFBRVcsUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxlQUFlO0lBQUM7SUFFMUQsTUFBTVQsVUFBVU8sUUFBUUMsR0FBRyxDQUFDRSxnQkFBZ0I7SUFFNUMsTUFBTVgsZ0JBQWdCLE1BQU1KLDhFQUF1QyxDQUFDO1FBQ2hFbUIsT0FBT2xCLHFFQUFpQjtRQUN4Qkk7SUFDSjtJQUVGLDhFQUE4RTtJQUM5RSxnQ0FBZ0M7SUFDaEMsZUFBZTtJQUNmLFFBQVE7SUFFSixPQUFPO1FBQ0hnQixPQUFPO1lBQ0hoQjtZQUNBLHFFQUFxRTtZQUNyRUQsZUFBZUEsY0FBY2tCLE1BQU0sQ0FBQ0wsT0FBTyxDQUFDTSxLQUFLO1FBRXJEO0lBQ0o7QUFDQSxDQUFDO0FBRUwsaUVBQWVwQixNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGFwcGVyZGFwcC8uL3BhZ2VzL25hdGl2ZS5qc3g/ZTI3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW9yYWxpcyBmcm9tICdtb3JhbGlzJztcbmltcG9ydCB7IEV2bUNoYWluIH0gZnJvbSAnQG1vcmFsaXN3ZWIzL2V2bS11dGlscyc7XG5cbi8vIHN0eWxlIHN0dWZmIC8vXG5pbXBvcnQgeyBFTlNBdmF0YXIgfSBmcm9tICdAd2ViM3Vpa2l0L2NvcmUnO1xuXG4vLyBwcm9wcyBhcmUgcGFzc2VkIGZyb20gZ2V0U2VydmVyU2lkZVByb3BzXG5mdW5jdGlvbiBOYXRpdmUoeyBuYXRpdmVCYWxhbmNlLCBhZGRyZXNzIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgzPldhbGxldDoge2FkZHJlc3N9PC9oMz5cbiAgICAgICAgICAgIDxoMz5OYXRpdmUgQmFsYW5jZToge25hdGl2ZUJhbGFuY2V9IEVUSDwvaDM+XG4gICAgICAgICAgICB7LyogPGgzPlRva2VuIEJhbGFuY2U6IHt0b2tlbkJhbGFuY2VzfSA8L2gzPiAqL31cbiAgICBcbiAgICAgICAgICAgIHsvKiA8RU5TQXZhdGFyXG4gICAgICAgICAgICBhZGRyZXNzPVwiMHhkOGRBNkJGMjY5NjRhRjlEN2VFZDllMDNFNTM0MTVEMzdhQTk2MDQ1XCJcbiAgICAgICAgICAgIHNpemU9ezEwMH0vPiAqL31cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuLy8gVGhpcyBnZXRzIGNhbGxlZCBvbiBldmVyeSBwYWdlIHJlbmRlclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4gIC8vIHJlYWRzIHRoZSBhcGkga2V5IGZyb20gLmVudi5sb2NhbCBhbmQgc3RhcnRzIE1vcmFsaXMgU0RLXG4gIGF3YWl0IE1vcmFsaXMuc3RhcnQoeyBhcGlLZXk6IHByb2Nlc3MuZW52Lk1PUkFMSVNfQVBJX0tFWSB9KTtcblxuICBjb25zdCBhZGRyZXNzID0gcHJvY2Vzcy5lbnYuTUVUQU1BU0tfQUREUkVTUztcblxuICBjb25zdCBuYXRpdmVCYWxhbmNlID0gYXdhaXQgTW9yYWxpcy5Fdm1BcGkuYmFsYW5jZS5nZXROYXRpdmVCYWxhbmNlKHtcbiAgICAgIGNoYWluOiBFdm1DaGFpbi5FVEhFUkVVTSxcbiAgICAgIGFkZHJlc3MsXG4gIH0pO1xuXG4vLyAgIGNvbnN0IHRva2VuQmFsYW5jZXMgPSBhd2FpdCBNb3JhbGlzLkV2bUFwaS50b2tlbi5nZXRXYWxsZXRUb2tlbkJhbGFuY2VzKHtcbi8vICAgICBjaGFpbjogRXZtQ2hhaW4uRVRIRVJFVU0sXG4vLyAgICAgYWRkcmVzcyxcbi8vICAgfSksXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczogeyBcbiAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICAvLyBSZXR1cm4gdGhlIG5hdGl2ZSBiYWxhbmNlIGZvcm1hdHRlZCBpbiBldGhlciB2aWEgdGhlIC5ldGhlciBnZXR0ZXJcbiAgICAgICAgICAgIG5hdGl2ZUJhbGFuY2U6IG5hdGl2ZUJhbGFuY2UucmVzdWx0LmJhbGFuY2UuZXRoZXJcbiAgICAgICAgICAgIC8vIHRva2VuQmFsYW5jZXM6IHRva2VuQmFsYW5jZXMucmVzdWx0Lm1hcCgodG9rZW4pID0+IHRva2VuLmRpc3BsYXkoKSkgXG4gICAgICAgIH0sXG4gICAgfTtcbiAgICB9XG5cbmV4cG9ydCBkZWZhdWx0IE5hdGl2ZTsiXSwibmFtZXMiOlsiTW9yYWxpcyIsIkV2bUNoYWluIiwiRU5TQXZhdGFyIiwiTmF0aXZlIiwibmF0aXZlQmFsYW5jZSIsImFkZHJlc3MiLCJkaXYiLCJoMyIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJzdGFydCIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJNT1JBTElTX0FQSV9LRVkiLCJNRVRBTUFTS19BRERSRVNTIiwiRXZtQXBpIiwiYmFsYW5jZSIsImdldE5hdGl2ZUJhbGFuY2UiLCJjaGFpbiIsIkVUSEVSRVVNIiwicHJvcHMiLCJyZXN1bHQiLCJldGhlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/native.jsx\n");

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