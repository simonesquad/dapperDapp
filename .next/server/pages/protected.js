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
exports.id = "pages/protected";
exports.ids = ["pages/protected"];
exports.modules = {

/***/ "./pages/protected.jsx":
/*!*****************************!*\
  !*** ./pages/protected.jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moralis */ \"moralis\");\n/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moralis__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @moralisweb3/evm-utils */ \"@moralisweb3/evm-utils\");\n/* harmony import */ var _moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction Protected({ message , nftList  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Protected content\"\n            }, void 0, false, {\n                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/protected.jsx\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: message\n            }, void 0, false, {\n                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/protected.jsx\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                children: JSON.stringify(nftList, null, 2)\n            }, void 0, false, {\n                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/protected.jsx\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/protected.jsx\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, this);\n}\nasync function getServerSideProps(context) {\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)(context);\n    if (!session) {\n        return {\n            redirect: {\n                destination: \"/signin\",\n                permanent: false\n            }\n        };\n    }\n    await moralis__WEBPACK_IMPORTED_MODULE_2___default().start({\n        apiKey: process.env.MORALIS_API_KEY\n    });\n    const nftList = await moralis__WEBPACK_IMPORTED_MODULE_2___default().EvmApi.nft.getWalletNFTs({\n        chain: _moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_3__.EvmChain.ETHEREUM,\n        address: session.user.address,\n        tokenAddress: \"0x...\"\n    });\n    return {\n        props: {\n            message: // if user has at least one NFT he will get congrats message\n            nftList.raw.total > 0 ? \"Nice! You have our NFT\" : \"Sorry, you don't have our NFT\"\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Protected);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm90ZWN0ZWQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUE2QztBQUNmO0FBQ29CO0FBRWxELFNBQVNHLFVBQVUsRUFBRUMsUUFBTyxFQUFFQyxRQUFPLEVBQUUsRUFBRTtJQUNyQyxxQkFDSSw4REFBQ0M7OzBCQUNHLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQzswQkFBR0o7Ozs7OzswQkFDSiw4REFBQ0s7MEJBQUtDLEtBQUtDLFNBQVMsQ0FBQ04sU0FBUyxJQUFJLEVBQUU7Ozs7Ozs7Ozs7OztBQUdoRDtBQUVPLGVBQWVPLG1CQUFtQkMsT0FBTyxFQUFFO0lBQzlDLE1BQU1DLFVBQVUsTUFBTWQsMkRBQVVBLENBQUNhO0lBRWpDLElBQUksQ0FBQ0MsU0FBUztRQUNWLE9BQU87WUFDSEMsVUFBVTtnQkFDTkMsYUFBYTtnQkFDYkMsV0FBVyxLQUFLO1lBQ3BCO1FBQ0o7SUFDSixDQUFDO0lBRUQsTUFBTWhCLG9EQUFhLENBQUM7UUFBRWtCLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsZUFBZTtJQUFDO0lBRTFELE1BQU1qQixVQUFVLE1BQU1KLHVFQUFnQyxDQUFDO1FBQ25EeUIsT0FBT3hCLHFFQUFpQjtRQUN4QjBCLFNBQVNkLFFBQVFlLElBQUksQ0FBQ0QsT0FBTztRQUM3QkUsY0FBYztJQUNsQjtJQUVBLE9BQU87UUFDSEMsT0FBTztZQUNIM0IsU0FDSSw0REFBNEQ7WUFDNURDLFFBQVEyQixHQUFHLENBQUNDLEtBQUssR0FBRyxJQUFJLDJCQUEyQiwrQkFBK0I7UUFDMUY7SUFDSjtBQUNKLENBQUM7QUFDRCxpRUFBZTlCLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXBwZXJkYXBwLy4vcGFnZXMvcHJvdGVjdGVkLmpzeD8wY2Q0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xuaW1wb3J0IE1vcmFsaXMgZnJvbSAnbW9yYWxpcyc7XG5pbXBvcnQgeyBFdm1DaGFpbiB9IGZyb20gJ0Btb3JhbGlzd2ViMy9ldm0tdXRpbHMnO1xuXG5mdW5jdGlvbiBQcm90ZWN0ZWQoeyBtZXNzYWdlLCBuZnRMaXN0IH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgzPlByb3RlY3RlZCBjb250ZW50PC9oMz5cbiAgICAgICAgICAgIDxwPnttZXNzYWdlfTwvcD5cbiAgICAgICAgICAgIDxwcmU+e0pTT04uc3RyaW5naWZ5KG5mdExpc3QsIG51bGwsIDIpfTwvcHJlPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihjb250ZXh0KTtcblxuICAgIGlmICghc2Vzc2lvbikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVkaXJlY3Q6IHtcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbjogJy9zaWduaW4nLFxuICAgICAgICAgICAgICAgIHBlcm1hbmVudDogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGF3YWl0IE1vcmFsaXMuc3RhcnQoeyBhcGlLZXk6IHByb2Nlc3MuZW52Lk1PUkFMSVNfQVBJX0tFWSB9KTtcblxuICAgIGNvbnN0IG5mdExpc3QgPSBhd2FpdCBNb3JhbGlzLkV2bUFwaS5uZnQuZ2V0V2FsbGV0TkZUcyh7XG4gICAgICAgIGNoYWluOiBFdm1DaGFpbi5FVEhFUkVVTSxcbiAgICAgICAgYWRkcmVzczogc2Vzc2lvbi51c2VyLmFkZHJlc3MsXG4gICAgICAgIHRva2VuQWRkcmVzczogJzB4Li4uJyxcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBtZXNzYWdlOlxuICAgICAgICAgICAgICAgIC8vIGlmIHVzZXIgaGFzIGF0IGxlYXN0IG9uZSBORlQgaGUgd2lsbCBnZXQgY29uZ3JhdHMgbWVzc2FnZVxuICAgICAgICAgICAgICAgIG5mdExpc3QucmF3LnRvdGFsID4gMCA/ICdOaWNlISBZb3UgaGF2ZSBvdXIgTkZUJyA6IFwiU29ycnksIHlvdSBkb24ndCBoYXZlIG91ciBORlRcIixcbiAgICAgICAgfSxcbiAgICB9O1xufVxuZXhwb3J0IGRlZmF1bHQgUHJvdGVjdGVkOyJdLCJuYW1lcyI6WyJnZXRTZXNzaW9uIiwiTW9yYWxpcyIsIkV2bUNoYWluIiwiUHJvdGVjdGVkIiwibWVzc2FnZSIsIm5mdExpc3QiLCJkaXYiLCJoMyIsInAiLCJwcmUiLCJKU09OIiwic3RyaW5naWZ5IiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInNlc3Npb24iLCJyZWRpcmVjdCIsImRlc3RpbmF0aW9uIiwicGVybWFuZW50Iiwic3RhcnQiLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiTU9SQUxJU19BUElfS0VZIiwiRXZtQXBpIiwibmZ0IiwiZ2V0V2FsbGV0TkZUcyIsImNoYWluIiwiRVRIRVJFVU0iLCJhZGRyZXNzIiwidXNlciIsInRva2VuQWRkcmVzcyIsInByb3BzIiwicmF3IiwidG90YWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/protected.jsx\n");

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

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

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
var __webpack_exports__ = (__webpack_exec__("./pages/protected.jsx"));
module.exports = __webpack_exports__;

})();