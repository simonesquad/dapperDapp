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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Contract(param) {\n    let { nfts , metaRaw  } = param;\n    _s();\n    const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(nfts);\n    // const [meta, setMeta] = useState(metaRaw);\n    const renderItems = ()=>{\n        return items.map((param)=>{\n            let { tokenHash , tokenAddress , tokenId , blockNumberMinted , amount , contractType , name , symbol , tokenUri , metadata , lastTokenUriSync , lastMetadataSync , minterAddress , chain  } = param;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: tokenAddress\n                    }, void 0, false, {\n                        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                        lineNumber: 10,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: tokenId\n                    }, void 0, false, {\n                        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                        lineNumber: 11,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: blockNumberMinted\n                    }, void 0, false, {\n                        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                        lineNumber: 12,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: amount\n                    }, void 0, false, {\n                        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                        lineNumber: 13,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: contractType\n                    }, void 0, false, {\n                        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                        lineNumber: 14,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: name\n                    }, void 0, false, {\n                        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                        lineNumber: 15,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: symbol\n                    }, void 0, false, {\n                        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                        lineNumber: 16,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: tokenUri\n                    }, void 0, false, {\n                        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                        lineNumber: 17,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: minterAddress\n                    }, void 0, false, {\n                        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                        lineNumber: 18,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: chain\n                    }, void 0, false, {\n                        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                        lineNumber: 19,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: lastTokenUriSync\n                    }, void 0, false, {\n                        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                        lineNumber: 20,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: lastMetadataSync\n                    }, void 0, false, {\n                        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, tokenHash, true, {\n                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                lineNumber: 9,\n                columnNumber: 20\n            }, this);\n        });\n    };\n    // const renderMeta = () => {\n    //     return meta(({ image, attributes }) => {\n    //         return <img src={image} alt=\"nft-img\" />\n    //     })\n    // }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: renderItems()\n        }, void 0, false, {\n            fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n            lineNumber: 37,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(Contract, \"1tF4uectYrFEBj/rIWeiUusI0j8=\");\n_c = Contract;\nContract.getInitialProps = async (ctx)=>{\n    const res = await fetch(\"http://localhost:3000/api/nftsByContract\");\n    const json = await res.json();\n    return {\n        nfts: json.contractNfts\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contract);\nvar _c;\n$RefreshReg$(_c, \"Contract\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb250cmFjdC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFBaUM7QUFFakMsU0FBU0MsU0FBUyxLQUFpQixFQUFFO1FBQW5CLEVBQUVDLEtBQUksRUFBRUMsUUFBTyxFQUFFLEdBQWpCOztJQUNkLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBQ0U7SUFDbkMsNkNBQTZDO0lBRTdDLE1BQU1JLGNBQWMsSUFBTTtRQUN0QixPQUFPRixNQUFNRyxHQUFHLENBQUMsU0FBK0s7Z0JBQTlLLEVBQUVDLFVBQVMsRUFBRUMsYUFBWSxFQUFFQyxRQUFPLEVBQUVDLGtCQUFpQixFQUFFQyxPQUFNLEVBQUVDLGFBQVksRUFBRUMsS0FBSSxFQUFFQyxPQUFNLEVBQUVDLFNBQVEsRUFBRUMsU0FBUSxFQUFFQyxpQkFBZ0IsRUFBRUMsaUJBQWdCLEVBQUVDLGNBQWEsRUFBRUMsTUFBSyxFQUFFO1lBQ3ZMLHFCQUFPLDhEQUFDQzs7a0NBQ0EsOERBQUNDO2tDQUFJZDs7Ozs7O2tDQUNMLDhEQUFDYztrQ0FBSWI7Ozs7OztrQ0FDTCw4REFBQ2E7a0NBQUlaOzs7Ozs7a0NBQ0wsOERBQUNZO2tDQUFJWDs7Ozs7O2tDQUNMLDhEQUFDVztrQ0FBSVY7Ozs7OztrQ0FDTCw4REFBQ1U7a0NBQUlUOzs7Ozs7a0NBQ0wsOERBQUNTO2tDQUFJUjs7Ozs7O2tDQUNMLDhEQUFDUTtrQ0FBSVA7Ozs7OztrQ0FDTCw4REFBQ087a0NBQUlIOzs7Ozs7a0NBQ0wsOERBQUNHO2tDQUFJRjs7Ozs7O2tDQUNMLDhEQUFDRTtrQ0FBSUw7Ozs7OztrQ0FDTCw4REFBQ0s7a0NBQUlKOzs7Ozs7O2VBWkdYOzs7OztRQWNwQjtJQUNKO0lBRUEsNkJBQTZCO0lBQzdCLCtDQUErQztJQUMvQyxtREFBbUQ7SUFDbkQsU0FBUztJQUNULElBQUk7SUFFSixxQkFDSTtrQkFJSSw0RUFBQ2dCO3NCQUNJbEI7Ozs7Ozs7QUFJakI7R0F2Q1NMO0tBQUFBO0FBeUNMQSxTQUFTd0IsZUFBZSxHQUFHLE9BQU9DLE1BQVE7SUFDdEMsTUFBTUMsTUFBTSxNQUFNQyxNQUFPO0lBQ3pCLE1BQU1DLE9BQU8sTUFBTUYsSUFBSUUsSUFBSTtJQUMzQixPQUFPO1FBQ0gzQixNQUFNMkIsS0FBS0MsWUFBWTtJQUUzQjtBQUNKO0FBRUEsK0RBQWU3QixRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbnRyYWN0LmpzeD80MDU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBDb250cmFjdCh7IG5mdHMsIG1ldGFSYXcgfSkge1xuICAgIGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGUobmZ0cyk7XG4gICAgLy8gY29uc3QgW21ldGEsIHNldE1ldGFdID0gdXNlU3RhdGUobWV0YVJhdyk7XG5cbiAgICBjb25zdCByZW5kZXJJdGVtcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGl0ZW1zLm1hcCgoeyB0b2tlbkhhc2gsIHRva2VuQWRkcmVzcywgdG9rZW5JZCwgYmxvY2tOdW1iZXJNaW50ZWQsIGFtb3VudCwgY29udHJhY3RUeXBlLCBuYW1lLCBzeW1ib2wsIHRva2VuVXJpLCBtZXRhZGF0YSwgbGFzdFRva2VuVXJpU3luYywgbGFzdE1ldGFkYXRhU3luYywgbWludGVyQWRkcmVzcywgY2hhaW4gfSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIDx1bCBrZXk9e3Rva2VuSGFzaH0+XG4gICAgICAgICAgICAgICAgICAgIDxsaT57dG9rZW5BZGRyZXNzfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT57dG9rZW5JZH08L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+e2Jsb2NrTnVtYmVyTWludGVkfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT57YW1vdW50fTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT57Y29udHJhY3RUeXBlfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT57bmFtZX08L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+e3N5bWJvbH08L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+e3Rva2VuVXJpfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT57bWludGVyQWRkcmVzc308L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+e2NoYWlufTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT57bGFzdFRva2VuVXJpU3luY308L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+e2xhc3RNZXRhZGF0YVN5bmN9PC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vIGNvbnN0IHJlbmRlck1ldGEgPSAoKSA9PiB7XG4gICAgLy8gICAgIHJldHVybiBtZXRhKCh7IGltYWdlLCBhdHRyaWJ1dGVzIH0pID0+IHtcbiAgICAvLyAgICAgICAgIHJldHVybiA8aW1nIHNyYz17aW1hZ2V9IGFsdD1cIm5mdC1pbWdcIiAvPlxuICAgIC8vICAgICB9KVxuICAgIC8vIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7LyogPGRpdj5cbiAgICAgICAgICAgICAgICB7cmVuZGVyTWV0YSgpfVxuICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7cmVuZGVySXRlbXMoKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuXG4gICAgQ29udHJhY3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9uZnRzQnlDb250cmFjdGApXG4gICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXG4gICAgICAgIHJldHVybiB7IFxuICAgICAgICAgICAgbmZ0czoganNvbi5jb250cmFjdE5mdHNcbiAgICAgICAgICAgIC8vIG1ldGFSYXc6IGpzb24uY29udHJhY3ROZnRzLm1ldGFkYXRhICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGRlZmF1bHQgQ29udHJhY3Q7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQ29udHJhY3QiLCJuZnRzIiwibWV0YVJhdyIsIml0ZW1zIiwic2V0SXRlbXMiLCJyZW5kZXJJdGVtcyIsIm1hcCIsInRva2VuSGFzaCIsInRva2VuQWRkcmVzcyIsInRva2VuSWQiLCJibG9ja051bWJlck1pbnRlZCIsImFtb3VudCIsImNvbnRyYWN0VHlwZSIsIm5hbWUiLCJzeW1ib2wiLCJ0b2tlblVyaSIsIm1ldGFkYXRhIiwibGFzdFRva2VuVXJpU3luYyIsImxhc3RNZXRhZGF0YVN5bmMiLCJtaW50ZXJBZGRyZXNzIiwiY2hhaW4iLCJ1bCIsImxpIiwiZGl2IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwicmVzIiwiZmV0Y2giLCJqc29uIiwiY29udHJhY3ROZnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/contract.jsx\n"));

/***/ })

});