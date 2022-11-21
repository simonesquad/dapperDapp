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
exports.id = "pages/signin";
exports.ids = ["pages/signin"];
exports.modules = {

/***/ "./pages/signin.jsx":
/*!**************************!*\
  !*** ./pages/signin.jsx ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var wagmi_connectors_metaMask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wagmi/connectors/metaMask */ \"wagmi/connectors/metaMask\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([wagmi_connectors_metaMask__WEBPACK_IMPORTED_MODULE_1__, wagmi__WEBPACK_IMPORTED_MODULE_3__, axios__WEBPACK_IMPORTED_MODULE_5__]);\n([wagmi_connectors_metaMask__WEBPACK_IMPORTED_MODULE_1__, wagmi__WEBPACK_IMPORTED_MODULE_3__, axios__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nfunction SignIn() {\n    const { connectAsync  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useConnect)();\n    const { disconnectAsync  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useDisconnect)();\n    const { isConnected  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useAccount)();\n    const { signMessageAsync  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useSignMessage)();\n    const { push  } = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const handleAuth = async ()=>{\n        if (isConnected) {\n            await disconnectAsync();\n        }\n        const { account , chain  } = await connectAsync({\n            connector: new wagmi_connectors_metaMask__WEBPACK_IMPORTED_MODULE_1__.MetaMaskConnector()\n        });\n        const userData = {\n            address: account,\n            chain: chain.id,\n            network: \"evm\"\n        };\n        const { data  } = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"/api/auth/request-message\", userData, {\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        const message = data.message;\n        const signature = await signMessageAsync({\n            message\n        });\n        // redirect user after success authentication to '/user' page\n        const { url  } = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signIn)(\"credentials\", {\n            message,\n            signature,\n            redirect: false,\n            callbackUrl: \"/user\"\n        });\n        /**\n         * instead of using signIn(..., redirect: \"/user\")\n         * we get the url from callback and push it to the router to avoid page refreshing\n         */ push(url);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Web3 Authentication\"\n            }, void 0, false, {\n                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/signin.jsx\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>handleAuth(),\n                children: \"Authenticate via Metamask\"\n            }, void 0, false, {\n                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/signin.jsx\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/signin.jsx\",\n        lineNumber: 43,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignIn);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaWduaW4uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUE4RDtBQUNyQjtBQUNxQztBQUN0QztBQUNkO0FBRTFCLFNBQVNRLFNBQVM7SUFDZCxNQUFNLEVBQUVDLGFBQVksRUFBRSxHQUFHTixpREFBVUE7SUFDbkMsTUFBTSxFQUFFTyxnQkFBZSxFQUFFLEdBQUdMLG9EQUFhQTtJQUN6QyxNQUFNLEVBQUVNLFlBQVcsRUFBRSxHQUFHVCxpREFBVUE7SUFDbEMsTUFBTSxFQUFFVSxpQkFBZ0IsRUFBRSxHQUFHUixxREFBY0E7SUFDM0MsTUFBTSxFQUFFUyxLQUFJLEVBQUUsR0FBR1Asc0RBQVNBO0lBRTFCLE1BQU1RLGFBQWEsVUFBWTtRQUMzQixJQUFJSCxhQUFhO1lBQ2IsTUFBTUQ7UUFDVixDQUFDO1FBRUQsTUFBTSxFQUFFSyxRQUFPLEVBQUVDLE1BQUssRUFBRSxHQUFHLE1BQU1QLGFBQWE7WUFBRVEsV0FBVyxJQUFJakIsd0VBQWlCQTtRQUFHO1FBRW5GLE1BQU1rQixXQUFXO1lBQUVDLFNBQVNKO1lBQVNDLE9BQU9BLE1BQU1JLEVBQUU7WUFBRUMsU0FBUztRQUFNO1FBRXJFLE1BQU0sRUFBRUMsS0FBSSxFQUFFLEdBQUcsTUFBTWYsa0RBQVUsQ0FBQyw2QkFBNkJXLFVBQVU7WUFDckVNLFNBQVM7Z0JBQ0wsZ0JBQWdCO1lBQ3BCO1FBQ0o7UUFFQSxNQUFNQyxVQUFVSCxLQUFLRyxPQUFPO1FBRTVCLE1BQU1DLFlBQVksTUFBTWQsaUJBQWlCO1lBQUVhO1FBQVE7UUFFbkQsNkRBQTZEO1FBQzdELE1BQU0sRUFBRUUsSUFBRyxFQUFFLEdBQUcsTUFBTTFCLHVEQUFNQSxDQUFDLGVBQWU7WUFBRXdCO1lBQVNDO1lBQVdFLFVBQVUsS0FBSztZQUFFQyxhQUFhO1FBQVE7UUFDeEc7OztTQUdDLEdBQ0RoQixLQUFLYztJQUNUO0lBRUEscUJBQ0ksOERBQUNHOzswQkFDRyw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7Z0JBQU9DLFNBQVMsSUFBTW5COzBCQUFjOzs7Ozs7Ozs7Ozs7QUFHakQ7QUFFQSxpRUFBZU4sTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RhcHBlcmRhcHAvLi9wYWdlcy9zaWduaW4uanN4PzA1M2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWV0YU1hc2tDb25uZWN0b3IgfSBmcm9tICd3YWdtaS9jb25uZWN0b3JzL21ldGFNYXNrJztcbmltcG9ydCB7IHNpZ25JbiB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCc7XG5pbXBvcnQgeyB1c2VBY2NvdW50LCB1c2VDb25uZWN0LCB1c2VTaWduTWVzc2FnZSwgdXNlRGlzY29ubmVjdCB9IGZyb20gJ3dhZ21pJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmZ1bmN0aW9uIFNpZ25JbigpIHtcbiAgICBjb25zdCB7IGNvbm5lY3RBc3luYyB9ID0gdXNlQ29ubmVjdCgpO1xuICAgIGNvbnN0IHsgZGlzY29ubmVjdEFzeW5jIH0gPSB1c2VEaXNjb25uZWN0KCk7XG4gICAgY29uc3QgeyBpc0Nvbm5lY3RlZCB9ID0gdXNlQWNjb3VudCgpO1xuICAgIGNvbnN0IHsgc2lnbk1lc3NhZ2VBc3luYyB9ID0gdXNlU2lnbk1lc3NhZ2UoKTtcbiAgICBjb25zdCB7IHB1c2ggfSA9IHVzZVJvdXRlcigpO1xuXG4gICAgY29uc3QgaGFuZGxlQXV0aCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgaWYgKGlzQ29ubmVjdGVkKSB7XG4gICAgICAgICAgICBhd2FpdCBkaXNjb25uZWN0QXN5bmMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHsgYWNjb3VudCwgY2hhaW4gfSA9IGF3YWl0IGNvbm5lY3RBc3luYyh7IGNvbm5lY3RvcjogbmV3IE1ldGFNYXNrQ29ubmVjdG9yKCkgfSk7XG5cbiAgICAgICAgY29uc3QgdXNlckRhdGEgPSB7IGFkZHJlc3M6IGFjY291bnQsIGNoYWluOiBjaGFpbi5pZCwgbmV0d29yazogJ2V2bScgfTtcblxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvYXV0aC9yZXF1ZXN0LW1lc3NhZ2UnLCB1c2VyRGF0YSwge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBtZXNzYWdlID0gZGF0YS5tZXNzYWdlO1xuXG4gICAgICAgIGNvbnN0IHNpZ25hdHVyZSA9IGF3YWl0IHNpZ25NZXNzYWdlQXN5bmMoeyBtZXNzYWdlIH0pO1xuXG4gICAgICAgIC8vIHJlZGlyZWN0IHVzZXIgYWZ0ZXIgc3VjY2VzcyBhdXRoZW50aWNhdGlvbiB0byAnL3VzZXInIHBhZ2VcbiAgICAgICAgY29uc3QgeyB1cmwgfSA9IGF3YWl0IHNpZ25JbignY3JlZGVudGlhbHMnLCB7IG1lc3NhZ2UsIHNpZ25hdHVyZSwgcmVkaXJlY3Q6IGZhbHNlLCBjYWxsYmFja1VybDogJy91c2VyJyB9KTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIGluc3RlYWQgb2YgdXNpbmcgc2lnbkluKC4uLiwgcmVkaXJlY3Q6IFwiL3VzZXJcIilcbiAgICAgICAgICogd2UgZ2V0IHRoZSB1cmwgZnJvbSBjYWxsYmFjayBhbmQgcHVzaCBpdCB0byB0aGUgcm91dGVyIHRvIGF2b2lkIHBhZ2UgcmVmcmVzaGluZ1xuICAgICAgICAgKi9cbiAgICAgICAgcHVzaCh1cmwpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgzPldlYjMgQXV0aGVudGljYXRpb248L2gzPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBdXRoKCl9PkF1dGhlbnRpY2F0ZSB2aWEgTWV0YW1hc2s8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lnbkluOyJdLCJuYW1lcyI6WyJNZXRhTWFza0Nvbm5lY3RvciIsInNpZ25JbiIsInVzZUFjY291bnQiLCJ1c2VDb25uZWN0IiwidXNlU2lnbk1lc3NhZ2UiLCJ1c2VEaXNjb25uZWN0IiwidXNlUm91dGVyIiwiYXhpb3MiLCJTaWduSW4iLCJjb25uZWN0QXN5bmMiLCJkaXNjb25uZWN0QXN5bmMiLCJpc0Nvbm5lY3RlZCIsInNpZ25NZXNzYWdlQXN5bmMiLCJwdXNoIiwiaGFuZGxlQXV0aCIsImFjY291bnQiLCJjaGFpbiIsImNvbm5lY3RvciIsInVzZXJEYXRhIiwiYWRkcmVzcyIsImlkIiwibmV0d29yayIsImRhdGEiLCJwb3N0IiwiaGVhZGVycyIsIm1lc3NhZ2UiLCJzaWduYXR1cmUiLCJ1cmwiLCJyZWRpcmVjdCIsImNhbGxiYWNrVXJsIiwiZGl2IiwiaDMiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/signin.jsx\n");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

module.exports = import("wagmi");;

/***/ }),

/***/ "wagmi/connectors/metaMask":
/*!********************************************!*\
  !*** external "wagmi/connectors/metaMask" ***!
  \********************************************/
/***/ ((module) => {

module.exports = import("wagmi/connectors/metaMask");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/signin.jsx"));
module.exports = __webpack_exports__;

})();