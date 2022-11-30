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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst TITLES = [\n    \"Value\",\n    \"Block Number\",\n    \"Total Gas Used\",\n    \"Gas Price at Time\",\n    \"Timestamp\"\n];\nfunction Transactions(param) {\n    let { transactions  } = param;\n    _s();\n    const [values, setValues] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(transactions);\n    const renderValues = ()=>{\n        return values.map((param)=>{\n            let { hash , value , blockNumber , cumulativeGasUsed , gasPrice , blockTimestamp  } = param;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: value\n                    }, void 0, false, {\n                        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/transactions.jsx\",\n                        lineNumber: 13,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: blockNumber\n                    }, void 0, false, {\n                        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/transactions.jsx\",\n                        lineNumber: 14,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: cumulativeGasUsed\n                    }, void 0, false, {\n                        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/transactions.jsx\",\n                        lineNumber: 15,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: gasPrice\n                    }, void 0, false, {\n                        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/transactions.jsx\",\n                        lineNumber: 16,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: blockTimestamp\n                    }, void 0, false, {\n                        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/transactions.jsx\",\n                        lineNumber: 17,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, hash, true, {\n                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/transactions.jsx\",\n                lineNumber: 12,\n                columnNumber: 20\n            }, this);\n        });\n    };\n    const renderHeader = ()=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n            children: Object.keys()\n        }, void 0, false, {\n            fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/transactions.jsx\",\n            lineNumber: 23,\n            columnNumber: 16\n        }, this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Wallet Transactions:\"\n            }, void 0, false, {\n                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/transactions.jsx\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                    class: \"table\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thread\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        scope: \"col\",\n                                        children: \"ID\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/transactions.jsx\",\n                                        lineNumber: 35,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        scope: \"col\",\n                                        children: \"Value\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/transactions.jsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        scope: \"col\",\n                                        children: \"Block Number\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/transactions.jsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        scope: \"col\",\n                                        children: \"Total Gas Used\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/transactions.jsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        scope: \"col\",\n                                        children: \"Gas Price at Time\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/transactions.jsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        scope: \"col\",\n                                        children: \"Timestamp\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/transactions.jsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/transactions.jsx\",\n                                lineNumber: 34,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/transactions.jsx\",\n                            lineNumber: 33,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                            children: renderValues()\n                        }, void 0, false, {\n                            fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/transactions.jsx\",\n                            lineNumber: 43,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/transactions.jsx\",\n                    lineNumber: 32,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/transactions.jsx\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/transactions.jsx\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, this);\n}\n_s(Transactions, \"kEmkR2qlbVRLVIvg0L/dcZKJ060=\");\n_c = Transactions;\nTransactions.getInitialProps = async (ctx)=>{\n    const res = await fetch(\"http://localhost:3000/api/transactions\");\n    const json = await res.json();\n    return {\n        transactions: json.walletTransactions\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Transactions);\n{}var _c;\n$RefreshReg$(_c, \"Transactions\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90cmFuc2FjdGlvbnMuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQWlDO0FBRWpDLE1BQU1DLFNBQVM7SUFDWDtJQUFTO0lBQWdCO0lBQWtCO0lBQXFCO0NBQ25FO0FBRUQsU0FBU0MsYUFBYSxLQUFnQixFQUFFO1FBQWxCLEVBQUVDLGFBQVksRUFBRSxHQUFoQjs7SUFDbEIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdMLCtDQUFRQSxDQUFDRztJQUVyQyxNQUFNRyxlQUFlLElBQU07UUFDdkIsT0FBT0YsT0FBT0csR0FBRyxDQUFDLFNBQThFO2dCQUE3RSxFQUFFQyxLQUFJLEVBQUVDLE1BQUssRUFBRUMsWUFBVyxFQUFFQyxrQkFBaUIsRUFBRUMsU0FBUSxFQUFFQyxlQUFjLEVBQUM7WUFDdkYscUJBQU8sOERBQUNDOztrQ0FDSiw4REFBQ0M7a0NBQUlOOzs7Ozs7a0NBQ0wsOERBQUNNO2tDQUFJTDs7Ozs7O2tDQUNMLDhEQUFDSztrQ0FBSUo7Ozs7OztrQ0FDTCw4REFBQ0k7a0NBQUlIOzs7Ozs7a0NBQ0wsOERBQUNHO2tDQUFJRjs7Ozs7OztlQUxPTDs7Ozs7UUFPcEI7SUFDSjtJQUVBLE1BQU1RLGVBQWUsSUFBTTtRQUN2QixxQkFBTyw4REFBQ0Y7c0JBQ0hHLE9BQU9DLElBQUk7Ozs7OztJQUVwQjtJQUVBLHFCQUNJLDhEQUFDQzs7MEJBQ0csOERBQUNDOzBCQUFFOzs7Ozs7MEJBQ0gsOERBQUNEOzBCQUNHLDRFQUFDRTtvQkFBTUMsT0FBTTs7c0NBQ1QsOERBQUNDO3NDQUNHLDRFQUFDVDs7a0RBQ0csOERBQUNVO3dDQUFHQyxPQUFNO2tEQUFNOzs7Ozs7a0RBQ2hCLDhEQUFDRDt3Q0FBR0MsT0FBTTtrREFBTTs7Ozs7O2tEQUNoQiw4REFBQ0Q7d0NBQUdDLE9BQU07a0RBQU07Ozs7OztrREFDaEIsOERBQUNEO3dDQUFHQyxPQUFNO2tEQUFNOzs7Ozs7a0RBQ2hCLDhEQUFDRDt3Q0FBR0MsT0FBTTtrREFBTTs7Ozs7O2tEQUNoQiw4REFBQ0Q7d0NBQUdDLE9BQU07a0RBQU07Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUd4Qiw4REFBQ0M7c0NBQ0lwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNekI7R0EzQ1NKO0tBQUFBO0FBNkNUQSxhQUFheUIsZUFBZSxHQUFHLE9BQU9DLE1BQVE7SUFDMUMsTUFBTUMsTUFBTSxNQUFNQyxNQUFPO0lBQ3pCLE1BQU1DLE9BQU8sTUFBTUYsSUFBSUUsSUFBSTtJQUMzQixPQUFPO1FBQUU1QixjQUFjNEIsS0FBS0Msa0JBQWtCO0lBQUM7QUFDbkQ7QUFFQSwrREFBZTlCLFlBQVlBLEVBQUM7QUFFNUIsQ0E0QlEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdHJhbnNhY3Rpb25zLmpzeD9jZDIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBUSVRMRVMgPSBbXG4gICAgJ1ZhbHVlJywgJ0Jsb2NrIE51bWJlcicsICdUb3RhbCBHYXMgVXNlZCcsICdHYXMgUHJpY2UgYXQgVGltZScsICdUaW1lc3RhbXAnXG5dXG5cbmZ1bmN0aW9uIFRyYW5zYWN0aW9ucyh7IHRyYW5zYWN0aW9ucyB9KSB7XG4gICAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHRyYW5zYWN0aW9ucyk7XG5cbiAgICBjb25zdCByZW5kZXJWYWx1ZXMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB2YWx1ZXMubWFwKCh7IGhhc2gsIHZhbHVlLCBibG9ja051bWJlciwgY3VtdWxhdGl2ZUdhc1VzZWQsIGdhc1ByaWNlLCBibG9ja1RpbWVzdGFtcH0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8dHIga2V5PXtoYXNofSA+XG4gICAgICAgICAgICAgICAgPHRkPnt2YWx1ZX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57YmxvY2tOdW1iZXJ9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e2N1bXVsYXRpdmVHYXNVc2VkfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntnYXNQcmljZX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57YmxvY2tUaW1lc3RhbXB9PC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVySGVhZGVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gPHRyPlxuICAgICAgICAgICAge09iamVjdC5rZXlzKCl9XG4gICAgICAgIDwvdHI+XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwPldhbGxldCBUcmFuc2FjdGlvbnM6PC9wPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8dGhyZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPklEPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5WYWx1ZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+QmxvY2sgTnVtYmVyPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5Ub3RhbCBHYXMgVXNlZDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+R2FzIFByaWNlIGF0IFRpbWU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlRpbWVzdGFtcDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8L3RocmVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAge3JlbmRlclZhbHVlcygpfVxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8L2Rpdj4gICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cblRyYW5zYWN0aW9ucy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdHJhbnNhY3Rpb25zYClcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxuICAgIHJldHVybiB7IHRyYW5zYWN0aW9uczoganNvbi53YWxsZXRUcmFuc2FjdGlvbnMgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmFuc2FjdGlvbnM7XG5cbnsvKiA8dGggc2NvcGU9XCJjb2xcIj5cbnt0cmFuc2FjdGlvbnMubWFwKCh0cmFuc2FjdGlvbikgPT4gKFxuICAgIDx0ZCBrZXk9e3RyYW5zYWN0aW9uLmhhc2h9Pnt0cmFuc2FjdGlvbi52YWx1ZX0vPC90ZD5cbiAgICApKX1cbjwvdGg+XG5cbjx0aCBzY29wZT1cImNvbFwiPlxue3RyYW5zYWN0aW9ucy5tYXAoKHRyYW5zYWN0aW9uKSA9PiAoXG4gICAgPHRkIGtleT17dHJhbnNhY3Rpb24uaGFzaH0+e3RyYW5zYWN0aW9uLmJsb2NrTnVtYmVyfS88L3RkPlxuICAgICkpfVxuPC90aD5cblxuPHRoIHNjb3BlPVwiY29sXCI+XG57dHJhbnNhY3Rpb25zLm1hcCgodHJhbnNhY3Rpb24pID0+IChcbiAgICA8dGQga2V5PXt0cmFuc2FjdGlvbi5oYXNofT57dHJhbnNhY3Rpb24uY3VtdWxhdGl2ZUdhc1VzZWR9LzwvdGQ+XG4gICAgKSl9XG48L3RoPlxuXG48dGggc2NvcGU9XCJjb2xcIj5cbnt0cmFuc2FjdGlvbnMubWFwKCh0cmFuc2FjdGlvbikgPT4gKFxuICAgIDx0ZCBrZXk9e3RyYW5zYWN0aW9uLmhhc2h9Pnt0cmFuc2FjdGlvbi5nYXNQcmljZX0vPC90ZD5cbiAgICApKX1cbjwvdGg+XG5cbjx0aCBzY29wZT1cImNvbFwiPlxue3RyYW5zYWN0aW9ucy5tYXAoKHRyYW5zYWN0aW9uKSA9PiAoXG4gICAgPHRkIGtleT17dHJhbnNhY3Rpb24uaGFzaH0+e3RyYW5zYWN0aW9uLmJsb2NrVGltZXN0YW1wfS88L3RkPlxuICAgICkpfVxuPC90aD4gKi99Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiVElUTEVTIiwiVHJhbnNhY3Rpb25zIiwidHJhbnNhY3Rpb25zIiwidmFsdWVzIiwic2V0VmFsdWVzIiwicmVuZGVyVmFsdWVzIiwibWFwIiwiaGFzaCIsInZhbHVlIiwiYmxvY2tOdW1iZXIiLCJjdW11bGF0aXZlR2FzVXNlZCIsImdhc1ByaWNlIiwiYmxvY2tUaW1lc3RhbXAiLCJ0ciIsInRkIiwicmVuZGVySGVhZGVyIiwiT2JqZWN0Iiwia2V5cyIsImRpdiIsInAiLCJ0YWJsZSIsImNsYXNzIiwidGhyZWFkIiwidGgiLCJzY29wZSIsInRib2R5IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwicmVzIiwiZmV0Y2giLCJqc29uIiwid2FsbGV0VHJhbnNhY3Rpb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/transactions.jsx\n"));

/***/ })

});