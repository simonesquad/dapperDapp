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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var wagmi_connectors_metaMask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi/connectors/metaMask */ \"./node_modules/wagmi/dist/connectors/metaMask.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _web3uikit_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @web3uikit/core */ \"./node_modules/@web3uikit/core/dist/index.es.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n//** */ style stuff **//\n\nfunction SignIn() {\n    _s();\n    const { connectAsync  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useConnect)();\n    const { disconnectAsync  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useDisconnect)();\n    const { isConnected  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount)();\n    const { signMessageAsync  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useSignMessage)();\n    const { push  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleAuth = async ()=>{\n        if (isConnected) {\n            await disconnectAsync();\n        }\n        const { account , chain  } = await connectAsync({\n            connector: new wagmi_connectors_metaMask__WEBPACK_IMPORTED_MODULE_5__.MetaMaskConnector()\n        });\n        const userData = {\n            address: account,\n            chain: chain.id,\n            network: \"evm\"\n        };\n        const { data  } = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"/api/auth/request-message\", userData, {\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        const message = data.message;\n        const signature = await signMessageAsync({\n            message\n        });\n        // redirect user after success authentication to '/user' page\n        const { url  } = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(\"credentials\", {\n            message,\n            signature,\n            redirect: false,\n            callbackUrl: \"/user\"\n        });\n        /**\n         * instead of using signIn(..., redirect: \"/user\")\n         * we get the url from callback and push it to the router to avoid page refreshing\n         */ push(url);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_web3uikit_core__WEBPACK_IMPORTED_MODULE_6__.Illustration, {\n                logo: \"marketplace\"\n            }, void 0, false, {\n                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/signin.jsx\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Col, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"Welcome to Dappyland! Authenticate via your Metamask wallet to Enter the Mystery\"\n                    }, void 0, false, {\n                        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/signin.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_web3uikit_core__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                        onClick: ()=>handleAuth(),\n                        text: \"Authenticate via Metamask\",\n                        theme: \"primary\"\n                    }, void 0, false, {\n                        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/signin.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/signin.jsx\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/signin.jsx\",\n        lineNumber: 46,\n        columnNumber: 9\n    }, this);\n}\n_s(SignIn, \"kCrycUxBvRHc5aoHL4AgY9xMqHM=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_4__.useConnect,\n        wagmi__WEBPACK_IMPORTED_MODULE_4__.useDisconnect,\n        wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount,\n        wagmi__WEBPACK_IMPORTED_MODULE_4__.useSignMessage,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = SignIn;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignIn);\nvar _c;\n$RefreshReg$(_c, \"SignIn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaWduaW4uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQThEO0FBQ3JCO0FBQ3FDO0FBQ3RDO0FBQ2Q7QUFFMUIsd0JBQXdCO0FBQ29DO0FBRTVELFNBQVNXLFNBQVM7O0lBQ2QsTUFBTSxFQUFFQyxhQUFZLEVBQUUsR0FBR1QsaURBQVVBO0lBQ25DLE1BQU0sRUFBRVUsZ0JBQWUsRUFBRSxHQUFHUixvREFBYUE7SUFDekMsTUFBTSxFQUFFUyxZQUFXLEVBQUUsR0FBR1osaURBQVVBO0lBQ2xDLE1BQU0sRUFBRWEsaUJBQWdCLEVBQUUsR0FBR1gscURBQWNBO0lBQzNDLE1BQU0sRUFBRVksS0FBSSxFQUFFLEdBQUdWLHNEQUFTQTtJQUUxQixNQUFNVyxhQUFhLFVBQVk7UUFDM0IsSUFBSUgsYUFBYTtZQUNiLE1BQU1EO1FBQ1YsQ0FBQztRQUVELE1BQU0sRUFBRUssUUFBTyxFQUFFQyxNQUFLLEVBQUUsR0FBRyxNQUFNUCxhQUFhO1lBQUVRLFdBQVcsSUFBSXBCLHdFQUFpQkE7UUFBRztRQUVuRixNQUFNcUIsV0FBVztZQUFFQyxTQUFTSjtZQUFTQyxPQUFPQSxNQUFNSSxFQUFFO1lBQUVDLFNBQVM7UUFBTTtRQUVyRSxNQUFNLEVBQUVDLEtBQUksRUFBRSxHQUFHLE1BQU1sQixrREFBVSxDQUFDLDZCQUE2QmMsVUFBVTtZQUNyRU0sU0FBUztnQkFDTCxnQkFBZ0I7WUFDcEI7UUFDSjtRQUVBLE1BQU1DLFVBQVVILEtBQUtHLE9BQU87UUFFNUIsTUFBTUMsWUFBWSxNQUFNZCxpQkFBaUI7WUFBRWE7UUFBUTtRQUVuRCw2REFBNkQ7UUFDN0QsTUFBTSxFQUFFRSxJQUFHLEVBQUUsR0FBRyxNQUFNN0IsdURBQU1BLENBQUMsZUFBZTtZQUFFMkI7WUFBU0M7WUFBV0UsVUFBVSxLQUFLO1lBQUVDLGFBQWE7UUFBUTtRQUN4Rzs7O1NBR0MsR0FDRGhCLEtBQUtjO0lBQ1Q7SUFFQSxxQkFDSSw4REFBQ0c7OzBCQUNHLDhEQUFDekIseURBQVlBO2dCQUFDMEIsTUFBSzs7Ozs7OzBCQUNuQiw4REFBQ0M7O2tDQUNHLDhEQUFDQztrQ0FBRzs7Ozs7O2tDQUNBLDhEQUFDM0IsbURBQU1BO3dCQUNINEIsU0FBUyxJQUFNcEI7d0JBQ2ZxQixNQUFLO3dCQUNMQyxPQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLOUI7R0FoRFM1Qjs7UUFDb0JSLDZDQUFVQTtRQUNQRSxnREFBYUE7UUFDakJILDZDQUFVQTtRQUNMRSxpREFBY0E7UUFDMUJFLGtEQUFTQTs7O0tBTHJCSztBQWtEVCwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zaWduaW4uanN4PzA1M2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWV0YU1hc2tDb25uZWN0b3IgfSBmcm9tICd3YWdtaS9jb25uZWN0b3JzL21ldGFNYXNrJztcbmltcG9ydCB7IHNpZ25JbiB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCc7XG5pbXBvcnQgeyB1c2VBY2NvdW50LCB1c2VDb25uZWN0LCB1c2VTaWduTWVzc2FnZSwgdXNlRGlzY29ubmVjdCB9IGZyb20gJ3dhZ21pJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbi8vKiogKi8gc3R5bGUgc3R1ZmYgKiovL1xuaW1wb3J0IHsgSWxsdXN0cmF0aW9uLCBCdXR0b24sIFJvdyB9IGZyb20gJ0B3ZWIzdWlraXQvY29yZSc7XG5cbmZ1bmN0aW9uIFNpZ25JbigpIHtcbiAgICBjb25zdCB7IGNvbm5lY3RBc3luYyB9ID0gdXNlQ29ubmVjdCgpO1xuICAgIGNvbnN0IHsgZGlzY29ubmVjdEFzeW5jIH0gPSB1c2VEaXNjb25uZWN0KCk7XG4gICAgY29uc3QgeyBpc0Nvbm5lY3RlZCB9ID0gdXNlQWNjb3VudCgpO1xuICAgIGNvbnN0IHsgc2lnbk1lc3NhZ2VBc3luYyB9ID0gdXNlU2lnbk1lc3NhZ2UoKTtcbiAgICBjb25zdCB7IHB1c2ggfSA9IHVzZVJvdXRlcigpO1xuXG4gICAgY29uc3QgaGFuZGxlQXV0aCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgaWYgKGlzQ29ubmVjdGVkKSB7XG4gICAgICAgICAgICBhd2FpdCBkaXNjb25uZWN0QXN5bmMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHsgYWNjb3VudCwgY2hhaW4gfSA9IGF3YWl0IGNvbm5lY3RBc3luYyh7IGNvbm5lY3RvcjogbmV3IE1ldGFNYXNrQ29ubmVjdG9yKCkgfSk7XG5cbiAgICAgICAgY29uc3QgdXNlckRhdGEgPSB7IGFkZHJlc3M6IGFjY291bnQsIGNoYWluOiBjaGFpbi5pZCwgbmV0d29yazogJ2V2bScgfTtcblxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvYXV0aC9yZXF1ZXN0LW1lc3NhZ2UnLCB1c2VyRGF0YSwge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBtZXNzYWdlID0gZGF0YS5tZXNzYWdlO1xuXG4gICAgICAgIGNvbnN0IHNpZ25hdHVyZSA9IGF3YWl0IHNpZ25NZXNzYWdlQXN5bmMoeyBtZXNzYWdlIH0pO1xuXG4gICAgICAgIC8vIHJlZGlyZWN0IHVzZXIgYWZ0ZXIgc3VjY2VzcyBhdXRoZW50aWNhdGlvbiB0byAnL3VzZXInIHBhZ2VcbiAgICAgICAgY29uc3QgeyB1cmwgfSA9IGF3YWl0IHNpZ25JbignY3JlZGVudGlhbHMnLCB7IG1lc3NhZ2UsIHNpZ25hdHVyZSwgcmVkaXJlY3Q6IGZhbHNlLCBjYWxsYmFja1VybDogJy91c2VyJyB9KTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIGluc3RlYWQgb2YgdXNpbmcgc2lnbkluKC4uLiwgcmVkaXJlY3Q6IFwiL3VzZXJcIilcbiAgICAgICAgICogd2UgZ2V0IHRoZSB1cmwgZnJvbSBjYWxsYmFjayBhbmQgcHVzaCBpdCB0byB0aGUgcm91dGVyIHRvIGF2b2lkIHBhZ2UgcmVmcmVzaGluZ1xuICAgICAgICAgKi9cbiAgICAgICAgcHVzaCh1cmwpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPElsbHVzdHJhdGlvbiBsb2dvPVwibWFya2V0cGxhY2VcIiAvPlxuICAgICAgICAgICAgPENvbD5cbiAgICAgICAgICAgICAgICA8aDM+V2VsY29tZSB0byBEYXBweWxhbmQhIEF1dGhlbnRpY2F0ZSB2aWEgeW91ciBNZXRhbWFzayB3YWxsZXQgdG8gRW50ZXIgdGhlIE15c3Rlcnk8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQXV0aCgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD1cIkF1dGhlbnRpY2F0ZSB2aWEgTWV0YW1hc2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaWduSW47Il0sIm5hbWVzIjpbIk1ldGFNYXNrQ29ubmVjdG9yIiwic2lnbkluIiwidXNlQWNjb3VudCIsInVzZUNvbm5lY3QiLCJ1c2VTaWduTWVzc2FnZSIsInVzZURpc2Nvbm5lY3QiLCJ1c2VSb3V0ZXIiLCJheGlvcyIsIklsbHVzdHJhdGlvbiIsIkJ1dHRvbiIsIlJvdyIsIlNpZ25JbiIsImNvbm5lY3RBc3luYyIsImRpc2Nvbm5lY3RBc3luYyIsImlzQ29ubmVjdGVkIiwic2lnbk1lc3NhZ2VBc3luYyIsInB1c2giLCJoYW5kbGVBdXRoIiwiYWNjb3VudCIsImNoYWluIiwiY29ubmVjdG9yIiwidXNlckRhdGEiLCJhZGRyZXNzIiwiaWQiLCJuZXR3b3JrIiwiZGF0YSIsInBvc3QiLCJoZWFkZXJzIiwibWVzc2FnZSIsInNpZ25hdHVyZSIsInVybCIsInJlZGlyZWN0IiwiY2FsbGJhY2tVcmwiLCJkaXYiLCJsb2dvIiwiQ29sIiwiaDMiLCJvbkNsaWNrIiwidGV4dCIsInRoZW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/signin.jsx\n"));

/***/ })

});