"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/transactions",{

/***/ "./pages/transactions.jsx":
/*!********************************!*\
  !*** ./pages/transactions.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction Transactions(param) {\n    let { transactions  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Wallet Transactions:\"\n            }, void 0, false, {\n                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/transactions.jsx\",\n                lineNumber: 6,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                    class: \"table\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thread\", {}, void 0, false, {\n                            fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/transactions.jsx\",\n                            lineNumber: 9,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            scope: \"col\",\n                                            children: \"Value\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/transactions.jsx\",\n                                            lineNumber: 12,\n                                            columnNumber: 29\n                                        }, this),\n                                        transactions.map((transaction)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                children: [\n                                                    transaction.value,\n                                                    \"/\"\n                                                ]\n                                            }, transaction.hash, true, {\n                                                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/transactions.jsx\",\n                                                lineNumber: 14,\n                                                columnNumber: 33\n                                            }, this))\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/transactions.jsx\",\n                                    lineNumber: 11,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: transactions.map((transaction)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: [\n                                                transaction.blockNumber,\n                                                \"/\"\n                                            ]\n                                        }, transaction.hash, true, {\n                                            fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/transactions.jsx\",\n                                            lineNumber: 20,\n                                            columnNumber: 29\n                                        }, this))\n                                }, void 0, false, {\n                                    fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/transactions.jsx\",\n                                    lineNumber: 18,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: transactions.map((transaction)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: [\n                                                transaction.cumulativeGasUsed,\n                                                \"/\"\n                                            ]\n                                        }, transaction.hash, true, {\n                                            fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/transactions.jsx\",\n                                            lineNumber: 26,\n                                            columnNumber: 29\n                                        }, this))\n                                }, void 0, false, {\n                                    fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/transactions.jsx\",\n                                    lineNumber: 24,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: transactions.map((transaction)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: [\n                                                transaction.gasPrice,\n                                                \"/\"\n                                            ]\n                                        }, transaction.hash, true, {\n                                            fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/transactions.jsx\",\n                                            lineNumber: 32,\n                                            columnNumber: 29\n                                        }, this))\n                                }, void 0, false, {\n                                    fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/transactions.jsx\",\n                                    lineNumber: 30,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: transactions.map((transaction)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: [\n                                                transaction.blockTimestamp,\n                                                \"/\"\n                                            ]\n                                        }, transaction.hash, true, {\n                                            fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/transactions.jsx\",\n                                            lineNumber: 38,\n                                            columnNumber: 29\n                                        }, this))\n                                }, void 0, false, {\n                                    fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/transactions.jsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/transactions.jsx\",\n                            lineNumber: 10,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/transactions.jsx\",\n                    lineNumber: 8,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/transactions.jsx\",\n                lineNumber: 7,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/transactions.jsx\",\n        lineNumber: 5,\n        columnNumber: 9\n    }, this);\n}\n_c = Transactions;\nTransactions.getInitialProps = async (ctx)=>{\n    const res = await fetch(\"http://localhost:3000/api/transactions\");\n    const json = await res.json();\n    return {\n        transactions: json.walletTransactions\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Transactions);\nvar _c;\n$RefreshReg$(_c, \"Transactions\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90cmFuc2FjdGlvbnMuanN4LmpzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQXdDO0FBRXhDLFNBQVNDLGFBQWEsS0FBZ0IsRUFBRTtRQUFsQixFQUFFQyxhQUFZLEVBQUUsR0FBaEI7SUFDbEIscUJBQ0ksOERBQUNDOzswQkFDRyw4REFBQ0M7MEJBQUU7Ozs7OzswQkFDSCw4REFBQ0Q7MEJBQ0csNEVBQUNFO29CQUFNQyxPQUFNOztzQ0FDVCw4REFBQ0M7Ozs7O3NDQUNELDhEQUFDQzs7OENBQ0csOERBQUNDOztzREFDRyw4REFBQ0M7NENBQUdDLE9BQU07c0RBQU07Ozs7Ozt3Q0FDZlQsYUFBYVUsR0FBRyxDQUFDLENBQUNDLDRCQUNmLDhEQUFDQzs7b0RBQTJCRCxZQUFZRSxLQUFLO29EQUFDOzsrQ0FBckNGLFlBQVlHLElBQUk7Ozs7Ozs7Ozs7OzhDQUlqQyw4REFBQ1A7OENBQ0FQLGFBQWFVLEdBQUcsQ0FBQyxDQUFDQyw0QkFDZiw4REFBQ0M7O2dEQUEyQkQsWUFBWUksV0FBVztnREFBQzs7MkNBQTNDSixZQUFZRyxJQUFJOzs7Ozs7Ozs7OzhDQUk3Qiw4REFBQ1A7OENBQ0FQLGFBQWFVLEdBQUcsQ0FBQyxDQUFDQyw0QkFDZiw4REFBQ0M7O2dEQUEyQkQsWUFBWUssaUJBQWlCO2dEQUFDOzsyQ0FBakRMLFlBQVlHLElBQUk7Ozs7Ozs7Ozs7OENBSTdCLDhEQUFDUDs4Q0FDQVAsYUFBYVUsR0FBRyxDQUFDLENBQUNDLDRCQUNmLDhEQUFDQzs7Z0RBQTJCRCxZQUFZTSxRQUFRO2dEQUFDOzsyQ0FBeENOLFlBQVlHLElBQUk7Ozs7Ozs7Ozs7OENBSTdCLDhEQUFDUDs4Q0FDQVAsYUFBYVUsR0FBRyxDQUFDLENBQUNDLDRCQUNmLDhEQUFDQzs7Z0RBQTJCRCxZQUFZTyxjQUFjO2dEQUFDOzsyQ0FBOUNQLFlBQVlHLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNyRDtLQTVDU2Y7QUE4Q1RBLGFBQWFvQixlQUFlLEdBQUcsT0FBT0MsTUFBUTtJQUMxQyxNQUFNQyxNQUFNLE1BQU1DLE1BQU87SUFDekIsTUFBTUMsT0FBTyxNQUFNRixJQUFJRSxJQUFJO0lBQzNCLE9BQU87UUFBRXZCLGNBQWN1QixLQUFLQyxrQkFBa0I7SUFBQztBQUNuRDtBQUVBLCtEQUFlekIsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90cmFuc2FjdGlvbnMuanN4P2NkMjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGFibGUgfSBmcm9tICdAd2ViM3Vpa2l0L2NvcmUnO1xuXG5mdW5jdGlvbiBUcmFuc2FjdGlvbnMoeyB0cmFuc2FjdGlvbnMgfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cD5XYWxsZXQgVHJhbnNhY3Rpb25zOjwvcD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRocmVhZD48L3RocmVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlZhbHVlPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHJhbnNhY3Rpb25zLm1hcCgodHJhbnNhY3Rpb24pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17dHJhbnNhY3Rpb24uaGFzaH0+e3RyYW5zYWN0aW9uLnZhbHVlfS88L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0cmFuc2FjdGlvbnMubWFwKCh0cmFuc2FjdGlvbikgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e3RyYW5zYWN0aW9uLmhhc2h9Pnt0cmFuc2FjdGlvbi5ibG9ja051bWJlcn0vPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0cmFuc2FjdGlvbnMubWFwKCh0cmFuc2FjdGlvbikgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e3RyYW5zYWN0aW9uLmhhc2h9Pnt0cmFuc2FjdGlvbi5jdW11bGF0aXZlR2FzVXNlZH0vPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0cmFuc2FjdGlvbnMubWFwKCh0cmFuc2FjdGlvbikgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e3RyYW5zYWN0aW9uLmhhc2h9Pnt0cmFuc2FjdGlvbi5nYXNQcmljZX0vPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0cmFuc2FjdGlvbnMubWFwKCh0cmFuc2FjdGlvbikgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e3RyYW5zYWN0aW9uLmhhc2h9Pnt0cmFuc2FjdGlvbi5ibG9ja1RpbWVzdGFtcH0vPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cblxuICAgICAgICAgICAgPC9kaXY+ICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5UcmFuc2FjdGlvbnMuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3RyYW5zYWN0aW9uc2ApXG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKClcbiAgICByZXR1cm4geyB0cmFuc2FjdGlvbnM6IGpzb24ud2FsbGV0VHJhbnNhY3Rpb25zIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJhbnNhY3Rpb25zOyJdLCJuYW1lcyI6WyJUYWJsZSIsIlRyYW5zYWN0aW9ucyIsInRyYW5zYWN0aW9ucyIsImRpdiIsInAiLCJ0YWJsZSIsImNsYXNzIiwidGhyZWFkIiwidGJvZHkiLCJ0ciIsInRoIiwic2NvcGUiLCJtYXAiLCJ0cmFuc2FjdGlvbiIsInRkIiwidmFsdWUiLCJoYXNoIiwiYmxvY2tOdW1iZXIiLCJjdW11bGF0aXZlR2FzVXNlZCIsImdhc1ByaWNlIiwiYmxvY2tUaW1lc3RhbXAiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJyZXMiLCJmZXRjaCIsImpzb24iLCJ3YWxsZXRUcmFuc2FjdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/transactions.jsx\n"));

/***/ })

});