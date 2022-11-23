"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/signin",{

/***/ "./pages/signin.jsx":
/*!**************************!*\
  !*** ./pages/signin.jsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var wagmi_connectors_metaMask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi/connectors/metaMask */ \"./node_modules/wagmi/dist/connectors/metaMask.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _web3uikit_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @web3uikit/core */ \"./node_modules/@web3uikit/core/dist/index.es.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n//** */ style stuff **//\n\nfunction SignIn() {\n    _s();\n    const { connectAsync  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useConnect)();\n    const { disconnectAsync  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useDisconnect)();\n    const { isConnected  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount)();\n    const { signMessageAsync  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useSignMessage)();\n    const { push  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleAuth = async ()=>{\n        if (isConnected) {\n            await disconnectAsync();\n        }\n        const { account , chain  } = await connectAsync({\n            connector: new wagmi_connectors_metaMask__WEBPACK_IMPORTED_MODULE_5__.MetaMaskConnector()\n        });\n        const userData = {\n            address: account,\n            chain: chain.id,\n            network: \"evm\"\n        };\n        const { data  } = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"/api/auth/request-message\", userData, {\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        const message = data.message;\n        const signature = await signMessageAsync({\n            message\n        });\n        // redirect user after success authentication to '/user' page\n        const { url  } = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(\"credentials\", {\n            message,\n            signature,\n            redirect: false,\n            callbackUrl: \"/user\"\n        });\n        /**\n         * instead of using signIn(..., redirect: \"/user\")\n         * we get the url from callback and push it to the router to avoid page refreshing\n         */ push(url);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_web3uikit_core__WEBPACK_IMPORTED_MODULE_6__.Illustration, {\n                logo: \"marketplace\"\n            }, void 0, false, {\n                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/signin.jsx\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Welcome to Dappyland! Authenticate via your Metamask wallet to Enter\"\n            }, void 0, false, {\n                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/signin.jsx\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_web3uikit_core__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                onClick: ()=>handleAuth(),\n                text: \"Authenticate via Metamask\",\n                theme: \"primary\"\n            }, void 0, false, {\n                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/signin.jsx\",\n                lineNumber: 49,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/signin.jsx\",\n        lineNumber: 46,\n        columnNumber: 9\n    }, this);\n}\n_s(SignIn, \"kCrycUxBvRHc5aoHL4AgY9xMqHM=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_4__.useConnect,\n        wagmi__WEBPACK_IMPORTED_MODULE_4__.useDisconnect,\n        wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount,\n        wagmi__WEBPACK_IMPORTED_MODULE_4__.useSignMessage,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = SignIn;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignIn);\nvar _c;\n$RefreshReg$(_c, \"SignIn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaWduaW4uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQThEO0FBQ3JCO0FBQ3FDO0FBQ3RDO0FBQ2Q7QUFFMUIsd0JBQXdCO0FBQytCO0FBRXZELFNBQVNVLFNBQVM7O0lBQ2QsTUFBTSxFQUFFQyxhQUFZLEVBQUUsR0FBR1IsaURBQVVBO0lBQ25DLE1BQU0sRUFBRVMsZ0JBQWUsRUFBRSxHQUFHUCxvREFBYUE7SUFDekMsTUFBTSxFQUFFUSxZQUFXLEVBQUUsR0FBR1gsaURBQVVBO0lBQ2xDLE1BQU0sRUFBRVksaUJBQWdCLEVBQUUsR0FBR1YscURBQWNBO0lBQzNDLE1BQU0sRUFBRVcsS0FBSSxFQUFFLEdBQUdULHNEQUFTQTtJQUUxQixNQUFNVSxhQUFhLFVBQVk7UUFDM0IsSUFBSUgsYUFBYTtZQUNiLE1BQU1EO1FBQ1YsQ0FBQztRQUVELE1BQU0sRUFBRUssUUFBTyxFQUFFQyxNQUFLLEVBQUUsR0FBRyxNQUFNUCxhQUFhO1lBQUVRLFdBQVcsSUFBSW5CLHdFQUFpQkE7UUFBRztRQUVuRixNQUFNb0IsV0FBVztZQUFFQyxTQUFTSjtZQUFTQyxPQUFPQSxNQUFNSSxFQUFFO1lBQUVDLFNBQVM7UUFBTTtRQUVyRSxNQUFNLEVBQUVDLEtBQUksRUFBRSxHQUFHLE1BQU1qQixrREFBVSxDQUFDLDZCQUE2QmEsVUFBVTtZQUNyRU0sU0FBUztnQkFDTCxnQkFBZ0I7WUFDcEI7UUFDSjtRQUVBLE1BQU1DLFVBQVVILEtBQUtHLE9BQU87UUFFNUIsTUFBTUMsWUFBWSxNQUFNZCxpQkFBaUI7WUFBRWE7UUFBUTtRQUVuRCw2REFBNkQ7UUFDN0QsTUFBTSxFQUFFRSxJQUFHLEVBQUUsR0FBRyxNQUFNNUIsdURBQU1BLENBQUMsZUFBZTtZQUFFMEI7WUFBU0M7WUFBV0UsVUFBVSxLQUFLO1lBQUVDLGFBQWE7UUFBUTtRQUN4Rzs7O1NBR0MsR0FDRGhCLEtBQUtjO0lBQ1Q7SUFFQSxxQkFDSSw4REFBQ0c7OzBCQUNHLDhEQUFDeEIseURBQVlBO2dCQUFDeUIsTUFBSzs7Ozs7OzBCQUNuQiw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDQSw4REFBQ3pCLG1EQUFNQTtnQkFDSDBCLFNBQVMsSUFBTW5CO2dCQUNmb0IsTUFBSztnQkFDTEMsT0FBTTs7Ozs7Ozs7Ozs7O0FBSTFCO0dBOUNTM0I7O1FBQ29CUCw2Q0FBVUE7UUFDUEUsZ0RBQWFBO1FBQ2pCSCw2Q0FBVUE7UUFDTEUsaURBQWNBO1FBQzFCRSxrREFBU0E7OztLQUxyQkk7QUFnRFQsK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbmluLmpzeD8wNTNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1ldGFNYXNrQ29ubmVjdG9yIH0gZnJvbSAnd2FnbWkvY29ubmVjdG9ycy9tZXRhTWFzayc7XG5pbXBvcnQgeyBzaWduSW4gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xuaW1wb3J0IHsgdXNlQWNjb3VudCwgdXNlQ29ubmVjdCwgdXNlU2lnbk1lc3NhZ2UsIHVzZURpc2Nvbm5lY3QgfSBmcm9tICd3YWdtaSc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG4vLyoqICovIHN0eWxlIHN0dWZmICoqLy9cbmltcG9ydCB7IElsbHVzdHJhdGlvbiwgQnV0dG9uIH0gZnJvbSAnQHdlYjN1aWtpdC9jb3JlJztcblxuZnVuY3Rpb24gU2lnbkluKCkge1xuICAgIGNvbnN0IHsgY29ubmVjdEFzeW5jIH0gPSB1c2VDb25uZWN0KCk7XG4gICAgY29uc3QgeyBkaXNjb25uZWN0QXN5bmMgfSA9IHVzZURpc2Nvbm5lY3QoKTtcbiAgICBjb25zdCB7IGlzQ29ubmVjdGVkIH0gPSB1c2VBY2NvdW50KCk7XG4gICAgY29uc3QgeyBzaWduTWVzc2FnZUFzeW5jIH0gPSB1c2VTaWduTWVzc2FnZSgpO1xuICAgIGNvbnN0IHsgcHVzaCB9ID0gdXNlUm91dGVyKCk7XG5cbiAgICBjb25zdCBoYW5kbGVBdXRoID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBpZiAoaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIGF3YWl0IGRpc2Nvbm5lY3RBc3luYygpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgeyBhY2NvdW50LCBjaGFpbiB9ID0gYXdhaXQgY29ubmVjdEFzeW5jKHsgY29ubmVjdG9yOiBuZXcgTWV0YU1hc2tDb25uZWN0b3IoKSB9KTtcblxuICAgICAgICBjb25zdCB1c2VyRGF0YSA9IHsgYWRkcmVzczogYWNjb3VudCwgY2hhaW46IGNoYWluLmlkLCBuZXR3b3JrOiAnZXZtJyB9O1xuXG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdCgnL2FwaS9hdXRoL3JlcXVlc3QtbWVzc2FnZScsIHVzZXJEYXRhLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBkYXRhLm1lc3NhZ2U7XG5cbiAgICAgICAgY29uc3Qgc2lnbmF0dXJlID0gYXdhaXQgc2lnbk1lc3NhZ2VBc3luYyh7IG1lc3NhZ2UgfSk7XG5cbiAgICAgICAgLy8gcmVkaXJlY3QgdXNlciBhZnRlciBzdWNjZXNzIGF1dGhlbnRpY2F0aW9uIHRvICcvdXNlcicgcGFnZVxuICAgICAgICBjb25zdCB7IHVybCB9ID0gYXdhaXQgc2lnbkluKCdjcmVkZW50aWFscycsIHsgbWVzc2FnZSwgc2lnbmF0dXJlLCByZWRpcmVjdDogZmFsc2UsIGNhbGxiYWNrVXJsOiAnL3VzZXInIH0pO1xuICAgICAgICAvKipcbiAgICAgICAgICogaW5zdGVhZCBvZiB1c2luZyBzaWduSW4oLi4uLCByZWRpcmVjdDogXCIvdXNlclwiKVxuICAgICAgICAgKiB3ZSBnZXQgdGhlIHVybCBmcm9tIGNhbGxiYWNrIGFuZCBwdXNoIGl0IHRvIHRoZSByb3V0ZXIgdG8gYXZvaWQgcGFnZSByZWZyZXNoaW5nXG4gICAgICAgICAqL1xuICAgICAgICBwdXNoKHVybCk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SWxsdXN0cmF0aW9uIGxvZ289XCJtYXJrZXRwbGFjZVwiIC8+XG4gICAgICAgICAgICA8aDM+V2VsY29tZSB0byBEYXBweWxhbmQhIEF1dGhlbnRpY2F0ZSB2aWEgeW91ciBNZXRhbWFzayB3YWxsZXQgdG8gRW50ZXI8L2gzPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUF1dGgoKX1cbiAgICAgICAgICAgICAgICAgICAgdGV4dD1cIkF1dGhlbnRpY2F0ZSB2aWEgTWV0YW1hc2tcIlxuICAgICAgICAgICAgICAgICAgICB0aGVtZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ25JbjsiXSwibmFtZXMiOlsiTWV0YU1hc2tDb25uZWN0b3IiLCJzaWduSW4iLCJ1c2VBY2NvdW50IiwidXNlQ29ubmVjdCIsInVzZVNpZ25NZXNzYWdlIiwidXNlRGlzY29ubmVjdCIsInVzZVJvdXRlciIsImF4aW9zIiwiSWxsdXN0cmF0aW9uIiwiQnV0dG9uIiwiU2lnbkluIiwiY29ubmVjdEFzeW5jIiwiZGlzY29ubmVjdEFzeW5jIiwiaXNDb25uZWN0ZWQiLCJzaWduTWVzc2FnZUFzeW5jIiwicHVzaCIsImhhbmRsZUF1dGgiLCJhY2NvdW50IiwiY2hhaW4iLCJjb25uZWN0b3IiLCJ1c2VyRGF0YSIsImFkZHJlc3MiLCJpZCIsIm5ldHdvcmsiLCJkYXRhIiwicG9zdCIsImhlYWRlcnMiLCJtZXNzYWdlIiwic2lnbmF0dXJlIiwidXJsIiwicmVkaXJlY3QiLCJjYWxsYmFja1VybCIsImRpdiIsImxvZ28iLCJoMyIsIm9uQ2xpY2siLCJ0ZXh0IiwidGhlbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/signin.jsx\n"));

/***/ })

});