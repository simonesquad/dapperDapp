"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/contract",{

/***/ "./pages/contract.jsx":
/*!****************************!*\
  !*** ./pages/contract.jsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Contract(param) {\n    let { nfts  } = param;\n    _s();\n    const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(nfts);\n    const renderItems = ()=>{\n        return items.map((param)=>{\n            let { tokenHash , tokenAddress , tokenId , blockNumberMinted , amount , contractType , name , symbol , tokenUri , metadata , lastTokenUriSync , lastMetadataSync , minterAddress , chain  } = param;\n            function getImgUrl(metadata) {\n                if (!metadata.image.includes(\"ipfs://\")) {\n                    return metadata.image;\n                } else {\n                    return \"https://ipfs.io/ipfs/\" + metadata.image.substring(7);\n                }\n            }\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: tokenAddress\n                    }, void 0, false, {\n                        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                        lineNumber: 22,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: tokenId\n                    }, void 0, false, {\n                        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: blockNumberMinted\n                    }, void 0, false, {\n                        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                        lineNumber: 24,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: amount\n                    }, void 0, false, {\n                        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: contractType\n                    }, void 0, false, {\n                        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: name\n                    }, void 0, false, {\n                        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: symbol\n                    }, void 0, false, {\n                        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: tokenUri\n                    }, void 0, false, {\n                        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: minterAddress\n                    }, void 0, false, {\n                        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: chain\n                    }, void 0, false, {\n                        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: lastTokenUriSync\n                    }, void 0, false, {\n                        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: lastMetadataSync\n                    }, void 0, false, {\n                        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: getImgUrl(metadata),\n                        alt: \"why\"\n                    }, void 0, false, {\n                        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, tokenHash, true, {\n                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                lineNumber: 21,\n                columnNumber: 20\n            }, this);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: renderItems()\n        }, void 0, false, {\n            fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n            lineNumber: 41,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(Contract, \"1tF4uectYrFEBj/rIWeiUusI0j8=\");\n_c = Contract;\nContract.getInitialProps = async (ctx)=>{\n    const res = await fetch(\"http://localhost:3000/api/nftsByContract\");\n    const json = await res.json();\n    return {\n        nfts: json.contractNfts\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contract);\nvar _c;\n$RefreshReg$(_c, \"Contract\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb250cmFjdC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFBaUM7QUFFakMsU0FBU0MsU0FBUyxLQUFRLEVBQUU7UUFBVixFQUFFQyxLQUFJLEVBQUUsR0FBUjs7SUFDZCxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0osK0NBQVFBLENBQUNFO0lBSW5DLE1BQU1HLGNBQWMsSUFBTTtRQUN0QixPQUFPRixNQUFNRyxHQUFHLENBQUMsU0FBK0s7Z0JBQTlLLEVBQUVDLFVBQVMsRUFBRUMsYUFBWSxFQUFFQyxRQUFPLEVBQUVDLGtCQUFpQixFQUFFQyxPQUFNLEVBQUVDLGFBQVksRUFBRUMsS0FBSSxFQUFFQyxPQUFNLEVBQUVDLFNBQVEsRUFBRUMsU0FBUSxFQUFFQyxpQkFBZ0IsRUFBRUMsaUJBQWdCLEVBQUVDLGNBQWEsRUFBRUMsTUFBSyxFQUFFO1lBRXZMLFNBQVNDLFVBQVVMLFFBQVEsRUFBRTtnQkFFekIsSUFBSSxDQUFDQSxTQUFTTSxLQUFLLENBQUNDLFFBQVEsQ0FBQyxZQUFZO29CQUNyQyxPQUFPUCxTQUFTTSxLQUFLO2dCQUN6QixPQUFPO29CQUNILE9BQU8sMEJBQTBCTixTQUFTTSxLQUFLLENBQUNFLFNBQVMsQ0FBQztnQkFDOUQsQ0FBQztZQUNMO1lBR0EscUJBQU8sOERBQUNDOztrQ0FDQSw4REFBQ0M7a0NBQUlsQjs7Ozs7O2tDQUNMLDhEQUFDa0I7a0NBQUlqQjs7Ozs7O2tDQUNMLDhEQUFDaUI7a0NBQUloQjs7Ozs7O2tDQUNMLDhEQUFDZ0I7a0NBQUlmOzs7Ozs7a0NBQ0wsOERBQUNlO2tDQUFJZDs7Ozs7O2tDQUNMLDhEQUFDYztrQ0FBSWI7Ozs7OztrQ0FDTCw4REFBQ2E7a0NBQUlaOzs7Ozs7a0NBQ0wsOERBQUNZO2tDQUFJWDs7Ozs7O2tDQUNMLDhEQUFDVztrQ0FBSVA7Ozs7OztrQ0FDTCw4REFBQ087a0NBQUlOOzs7Ozs7a0NBQ0wsOERBQUNNO2tDQUFJVDs7Ozs7O2tDQUNMLDhEQUFDUztrQ0FBSVI7Ozs7OztrQ0FDTCw4REFBQ1M7d0JBQUlDLEtBQUtQLFVBQVVMO3dCQUFXYSxLQUFJOzs7Ozs7O2VBYjNCdEI7Ozs7O1FBZXBCO0lBQ0o7SUFFQSxxQkFDSTtrQkFDSSw0RUFBQ3VCO3NCQUNJekI7Ozs7Ozs7QUFJakI7R0EzQ1NKO0tBQUFBO0FBNkNMQSxTQUFTOEIsZUFBZSxHQUFHLE9BQU9DLE1BQVE7SUFDdEMsTUFBTUMsTUFBTSxNQUFNQyxNQUFPO0lBQ3pCLE1BQU1DLE9BQU8sTUFBTUYsSUFBSUUsSUFBSTtJQUMzQixPQUFPO1FBQ0hqQyxNQUFNaUMsS0FBS0MsWUFBWTtJQUUzQjtBQUNKO0FBRUEsK0RBQWVuQyxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbnRyYWN0LmpzeD80MDU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBDb250cmFjdCh7IG5mdHMgfSkge1xuICAgIGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGUobmZ0cyk7XG5cbiAgICBcblxuICAgIGNvbnN0IHJlbmRlckl0ZW1zID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gaXRlbXMubWFwKCh7IHRva2VuSGFzaCwgdG9rZW5BZGRyZXNzLCB0b2tlbklkLCBibG9ja051bWJlck1pbnRlZCwgYW1vdW50LCBjb250cmFjdFR5cGUsIG5hbWUsIHN5bWJvbCwgdG9rZW5VcmksIG1ldGFkYXRhLCBsYXN0VG9rZW5VcmlTeW5jLCBsYXN0TWV0YWRhdGFTeW5jLCBtaW50ZXJBZGRyZXNzLCBjaGFpbiB9KSA9PiB7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldEltZ1VybChtZXRhZGF0YSkge1xuXG4gICAgICAgICAgICAgICAgaWYgKCFtZXRhZGF0YS5pbWFnZS5pbmNsdWRlcyhcImlwZnM6Ly9cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1ldGFkYXRhLmltYWdlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcImh0dHBzOi8vaXBmcy5pby9pcGZzL1wiICsgbWV0YWRhdGEuaW1hZ2Uuc3Vic3RyaW5nKDcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICByZXR1cm4gPHVsIGtleT17dG9rZW5IYXNofT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPnt0b2tlbkFkZHJlc3N9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPnt0b2tlbklkfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT57YmxvY2tOdW1iZXJNaW50ZWR9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPnthbW91bnR9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPntjb250cmFjdFR5cGV9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPntuYW1lfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT57c3ltYm9sfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT57dG9rZW5Vcml9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPnttaW50ZXJBZGRyZXNzfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT57Y2hhaW59PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPntsYXN0VG9rZW5VcmlTeW5jfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT57bGFzdE1ldGFkYXRhU3luY308L2xpPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Z2V0SW1nVXJsKG1ldGFkYXRhKX0gYWx0PVwid2h5XCIgLz5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtyZW5kZXJJdGVtcygpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICk7XG59XG5cbiAgICBDb250cmFjdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL25mdHNCeUNvbnRyYWN0YClcbiAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKClcbiAgICAgICAgcmV0dXJuIHsgXG4gICAgICAgICAgICBuZnRzOiBqc29uLmNvbnRyYWN0TmZ0c1xuICAgICAgICAgICAgLy8gbWV0YVJhdzoganNvbi5jb250cmFjdE5mdHMubWV0YWRhdGEgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgZGVmYXVsdCBDb250cmFjdDsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJDb250cmFjdCIsIm5mdHMiLCJpdGVtcyIsInNldEl0ZW1zIiwicmVuZGVySXRlbXMiLCJtYXAiLCJ0b2tlbkhhc2giLCJ0b2tlbkFkZHJlc3MiLCJ0b2tlbklkIiwiYmxvY2tOdW1iZXJNaW50ZWQiLCJhbW91bnQiLCJjb250cmFjdFR5cGUiLCJuYW1lIiwic3ltYm9sIiwidG9rZW5VcmkiLCJtZXRhZGF0YSIsImxhc3RUb2tlblVyaVN5bmMiLCJsYXN0TWV0YWRhdGFTeW5jIiwibWludGVyQWRkcmVzcyIsImNoYWluIiwiZ2V0SW1nVXJsIiwiaW1hZ2UiLCJpbmNsdWRlcyIsInN1YnN0cmluZyIsInVsIiwibGkiLCJpbWciLCJzcmMiLCJhbHQiLCJkaXYiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJyZXMiLCJmZXRjaCIsImpzb24iLCJjb250cmFjdE5mdHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/contract.jsx\n"));

/***/ })

});