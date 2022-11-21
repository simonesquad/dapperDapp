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
exports.id = "pages/balances";
exports.ids = ["pages/balances"];
exports.modules = {

/***/ "./pages/balances.jsx":
/*!****************************!*\
  !*** ./pages/balances.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moralis */ \"moralis\");\n/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moralis__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @moralisweb3/evm-utils */ \"@moralisweb3/evm-utils\");\n/* harmony import */ var _moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n//refactor\nfunction Balances({ nativeBalance , tokenBalances  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \"Native Balance: \",\n                    nativeBalance,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/balances.jsx\",\n                lineNumber: 8,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \"Token Balance: \",\n                    tokenBalances,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/balances.jsx\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/balances.jsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\nasync function getServerSideProps(context) {\n    // reads the api key from .env.local and starts Moralis SDK\n    await moralis__WEBPACK_IMPORTED_MODULE_1___default().start({\n        apiKey: process.env.MORALIS_API_KEY\n    });\n    const address = process.env.METAMASK_ADDRESS;\n    const [nativeBalance, tokenBalances] = await Promise.all([\n        moralis__WEBPACK_IMPORTED_MODULE_1___default().EvmApi.balance.getNativeBalance({\n            chain: _moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_2__.EvmChain.ETHEREUM,\n            address\n        }),\n        moralis__WEBPACK_IMPORTED_MODULE_1___default().EvmApi.token.getWalletTokenBalances({\n            chain: _moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_2__.EvmChain.ETHEREUM,\n            address\n        })\n    ]);\n    return {\n        props: {\n            nativeBalance: nativeBalance.result.balance.ether,\n            tokenBalances: tokenBalances.result.map((token)=>token.display())\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Balances);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9iYWxhbmNlcy5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUE4QjtBQUNvQjtBQUVsRCxVQUFVO0FBQ1YsU0FBU0UsU0FBUyxFQUFFQyxjQUFhLEVBQUVDLGNBQWEsRUFBRSxFQUFFO0lBQ2hELHFCQUNBLDhEQUFDQzs7MEJBQ0csOERBQUNDOztvQkFBRztvQkFBaUJIO29CQUFjOzs7Ozs7OzBCQUNuQyw4REFBQ0c7O29CQUFHO29CQUFnQkY7b0JBQWM7Ozs7Ozs7Ozs7Ozs7QUFHMUM7QUFFTyxlQUFlRyxtQkFBbUJDLE9BQU8sRUFBRTtJQUM5QywyREFBMkQ7SUFDM0QsTUFBTVIsb0RBQWEsQ0FBQztRQUFFVSxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLGVBQWU7SUFBQztJQUUxRCxNQUFNQyxVQUFVSCxRQUFRQyxHQUFHLENBQUNHLGdCQUFnQjtJQUU1QyxNQUFNLENBQUNaLGVBQWVDLGNBQWMsR0FBRyxNQUFNWSxRQUFRQyxHQUFHLENBQUM7UUFDckRqQiw4RUFBdUMsQ0FBQztZQUNwQ3FCLE9BQU9wQixxRUFBaUI7WUFDeEJhO1FBQ0o7UUFDQWQsa0ZBQTJDLENBQUM7WUFDeENxQixPQUFPcEIscUVBQWlCO1lBQ3hCYTtRQUNKO0tBQ0g7SUFFRCxPQUFPO1FBQ0hXLE9BQU87WUFDSHRCLGVBQWVBLGNBQWN1QixNQUFNLENBQUNQLE9BQU8sQ0FBQ1EsS0FBSztZQUNqRHZCLGVBQWVBLGNBQWNzQixNQUFNLENBQUNFLEdBQUcsQ0FBQyxDQUFDTCxRQUFVQSxNQUFNTSxPQUFPO1FBQ3BFO0lBQ0o7QUFDSixDQUFDO0FBRUQsaUVBQWUzQixRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGFwcGVyZGFwcC8uL3BhZ2VzL2JhbGFuY2VzLmpzeD8zYjU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb3JhbGlzIGZyb20gJ21vcmFsaXMnO1xuaW1wb3J0IHsgRXZtQ2hhaW4gfSBmcm9tICdAbW9yYWxpc3dlYjMvZXZtLXV0aWxzJztcblxuLy9yZWZhY3RvclxuZnVuY3Rpb24gQmFsYW5jZXMoeyBuYXRpdmVCYWxhbmNlLCB0b2tlbkJhbGFuY2VzIH0pIHtcbiAgICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICAgIDxoMz5OYXRpdmUgQmFsYW5jZToge25hdGl2ZUJhbGFuY2V9IDwvaDM+XG4gICAgICAgIDxoMz5Ub2tlbiBCYWxhbmNlOiB7dG9rZW5CYWxhbmNlc30gPC9oMz5cbiAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuICAgIC8vIHJlYWRzIHRoZSBhcGkga2V5IGZyb20gLmVudi5sb2NhbCBhbmQgc3RhcnRzIE1vcmFsaXMgU0RLXG4gICAgYXdhaXQgTW9yYWxpcy5zdGFydCh7IGFwaUtleTogcHJvY2Vzcy5lbnYuTU9SQUxJU19BUElfS0VZIH0pO1xuXG4gICAgY29uc3QgYWRkcmVzcyA9IHByb2Nlc3MuZW52Lk1FVEFNQVNLX0FERFJFU1M7XG5cbiAgICBjb25zdCBbbmF0aXZlQmFsYW5jZSwgdG9rZW5CYWxhbmNlc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgIE1vcmFsaXMuRXZtQXBpLmJhbGFuY2UuZ2V0TmF0aXZlQmFsYW5jZSh7XG4gICAgICAgICAgICBjaGFpbjogRXZtQ2hhaW4uRVRIRVJFVU0sXG4gICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICB9KSxcbiAgICAgICAgTW9yYWxpcy5Fdm1BcGkudG9rZW4uZ2V0V2FsbGV0VG9rZW5CYWxhbmNlcyh7XG4gICAgICAgICAgICBjaGFpbjogRXZtQ2hhaW4uRVRIRVJFVU0sXG4gICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICB9KSxcbiAgICBdKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBuYXRpdmVCYWxhbmNlOiBuYXRpdmVCYWxhbmNlLnJlc3VsdC5iYWxhbmNlLmV0aGVyLFxuICAgICAgICAgICAgdG9rZW5CYWxhbmNlczogdG9rZW5CYWxhbmNlcy5yZXN1bHQubWFwKCh0b2tlbikgPT4gdG9rZW4uZGlzcGxheSgpKVxuICAgICAgICB9LFxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhbGFuY2VzO1xuIl0sIm5hbWVzIjpbIk1vcmFsaXMiLCJFdm1DaGFpbiIsIkJhbGFuY2VzIiwibmF0aXZlQmFsYW5jZSIsInRva2VuQmFsYW5jZXMiLCJkaXYiLCJoMyIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJzdGFydCIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJNT1JBTElTX0FQSV9LRVkiLCJhZGRyZXNzIiwiTUVUQU1BU0tfQUREUkVTUyIsIlByb21pc2UiLCJhbGwiLCJFdm1BcGkiLCJiYWxhbmNlIiwiZ2V0TmF0aXZlQmFsYW5jZSIsImNoYWluIiwiRVRIRVJFVU0iLCJ0b2tlbiIsImdldFdhbGxldFRva2VuQmFsYW5jZXMiLCJwcm9wcyIsInJlc3VsdCIsImV0aGVyIiwibWFwIiwiZGlzcGxheSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/balances.jsx\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/balances.jsx"));
module.exports = __webpack_exports__;

})();