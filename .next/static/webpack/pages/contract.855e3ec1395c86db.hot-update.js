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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Contract(param) {\n    let { nfts  } = param;\n    _s();\n    const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(nfts);\n    const renderItems = ()=>{\n        return items.map((param)=>{\n            let { tokenHash , tokenId , blockNumberMinted , amount , name , metadata  } = param;\n            function getImgUrl(metadata) {\n                if (!metadata.image.includes(\"ipfs://\")) {\n                    return metadata.image;\n                } else {\n                    return \"https://ipfs.io/ipfs/\" + metadata.image.substring(7);\n                }\n            }\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"card\",\n                style: {\n                    width: \"25rem\",\n                    padding: \"2rem\",\n                    margin: \"2rem\",\n                    backgroundColor: \"#FFFFF7\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: getImgUrl(metadata),\n                        class: \"card-img-top\",\n                        alt: \"why\"\n                    }, void 0, false, {\n                        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                        lineNumber: 20,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"card-body\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                class: \"card-title\",\n                                children: [\n                                    \"Name: \",\n                                    name\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                                lineNumber: 22,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                class: \"card-text\",\n                                children: [\n                                    \"Token Id: \",\n                                    tokenId\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                                lineNumber: 23,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                class: \"card-text\",\n                                children: [\n                                    \"Block Number Minted: \",\n                                    blockNumberMinted\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                                lineNumber: 24,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                class: \"card-text\",\n                                children: [\n                                    \"Amount Minted: \",\n                                    amount\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                                lineNumber: 25,\n                                columnNumber: 29\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 25\n                    }, this)\n                ]\n            }, tokenHash, true, {\n                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                lineNumber: 19,\n                columnNumber: 20\n            }, this);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: renderItems()\n        }, void 0, false, {\n            fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n            lineNumber: 34,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(Contract, \"1tF4uectYrFEBj/rIWeiUusI0j8=\");\n_c = Contract;\nContract.getInitialProps = async (ctx)=>{\n    const res = await fetch(\"http://localhost:3000/api/nftsByContract\");\n    const json = await res.json();\n    return {\n        nfts: json.contractNfts\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contract);\nvar _c;\n$RefreshReg$(_c, \"Contract\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb250cmFjdC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFBaUM7QUFFakMsU0FBU0MsU0FBUyxLQUFRLEVBQUU7UUFBVixFQUFFQyxLQUFJLEVBQUUsR0FBUjs7SUFDZCxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0osK0NBQVFBLENBQUNFO0lBRW5DLE1BQU1HLGNBQWMsSUFBTTtRQUN0QixPQUFPRixNQUFNRyxHQUFHLENBQUMsU0FBdUU7Z0JBQXRFLEVBQUVDLFVBQVMsRUFBRUMsUUFBTyxFQUFFQyxrQkFBaUIsRUFBRUMsT0FBTSxFQUFFQyxLQUFJLEVBQUVDLFNBQVEsRUFBRTtZQUUvRSxTQUFTQyxVQUFVRCxRQUFRLEVBQUU7Z0JBRXpCLElBQUksQ0FBQ0EsU0FBU0UsS0FBSyxDQUFDQyxRQUFRLENBQUMsWUFBWTtvQkFDckMsT0FBT0gsU0FBU0UsS0FBSztnQkFDekIsT0FBTztvQkFDSCxPQUFPLDBCQUEwQkYsU0FBU0UsS0FBSyxDQUFDRSxTQUFTLENBQUM7Z0JBQzlELENBQUM7WUFDTDtZQUdBLHFCQUFPLDhEQUFDQztnQkFBb0JDLE9BQU07Z0JBQU9DLE9BQU87b0JBQUNDLE9BQU87b0JBQVNDLFNBQVM7b0JBQVFDLFFBQVE7b0JBQVFDLGlCQUFpQjtnQkFBUzs7a0NBQ2hILDhEQUFDQzt3QkFBSUMsS0FBS1osVUFBVUQ7d0JBQVdNLE9BQU07d0JBQWVRLEtBQUk7Ozs7OztrQ0FDeEQsOERBQUNUO3dCQUFJQyxPQUFNOzswQ0FDUCw4REFBQ1M7Z0NBQUdULE9BQU07O29DQUFhO29DQUFPUDs7Ozs7OzswQ0FDOUIsOERBQUNpQjtnQ0FBRVYsT0FBTTs7b0NBQVk7b0NBQVdWOzs7Ozs7OzBDQUNoQyw4REFBQ29CO2dDQUFFVixPQUFNOztvQ0FBWTtvQ0FBc0JUOzs7Ozs7OzBDQUMzQyw4REFBQ21CO2dDQUFFVixPQUFNOztvQ0FBWTtvQ0FBZ0JSOzs7Ozs7Ozs7Ozs7OztlQU5wQ0g7Ozs7O1FBVXJCO0lBQ0o7SUFFQSxxQkFDSTtrQkFDSSw0RUFBQ1U7c0JBQ0laOzs7Ozs7O0FBSWpCO0dBcENTSjtLQUFBQTtBQXNDTEEsU0FBUzRCLGVBQWUsR0FBRyxPQUFPQyxNQUFRO0lBQ3RDLE1BQU1DLE1BQU0sTUFBTUMsTUFBTztJQUN6QixNQUFNQyxPQUFPLE1BQU1GLElBQUlFLElBQUk7SUFDM0IsT0FBTztRQUNIL0IsTUFBTStCLEtBQUtDLFlBQVk7SUFDM0I7QUFDSjtBQUVBLCtEQUFlakMsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb250cmFjdC5qc3g/NDA1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gQ29udHJhY3QoeyBuZnRzIH0pIHtcbiAgICBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlKG5mdHMpO1xuXG4gICAgY29uc3QgcmVuZGVySXRlbXMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBpdGVtcy5tYXAoKHsgdG9rZW5IYXNoLCB0b2tlbklkLCBibG9ja051bWJlck1pbnRlZCwgYW1vdW50LCBuYW1lLCBtZXRhZGF0YSB9KSA9PiB7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldEltZ1VybChtZXRhZGF0YSkge1xuXG4gICAgICAgICAgICAgICAgaWYgKCFtZXRhZGF0YS5pbWFnZS5pbmNsdWRlcyhcImlwZnM6Ly9cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1ldGFkYXRhLmltYWdlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcImh0dHBzOi8vaXBmcy5pby9pcGZzL1wiICsgbWV0YWRhdGEuaW1hZ2Uuc3Vic3RyaW5nKDcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e3Rva2VuSGFzaH0gY2xhc3M9XCJjYXJkXCIgc3R5bGU9e3t3aWR0aDogXCIyNXJlbVwiLCBwYWRkaW5nOiBcIjJyZW1cIiwgbWFyZ2luOiBcIjJyZW1cIiwgYmFja2dyb3VuZENvbG9yOiBcIiNGRkZGRjdcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2dldEltZ1VybChtZXRhZGF0YSl9IGNsYXNzPVwiY2FyZC1pbWctdG9wXCIgYWx0PVwid2h5XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3M9XCJjYXJkLXRpdGxlXCI+TmFtZToge25hbWV9PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dFwiPlRva2VuIElkOiB7dG9rZW5JZH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLXRleHRcIj5CbG9jayBOdW1iZXIgTWludGVkOiB7YmxvY2tOdW1iZXJNaW50ZWR9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0XCI+QW1vdW50IE1pbnRlZDoge2Ftb3VudH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7cmVuZGVySXRlbXMoKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuXG4gICAgQ29udHJhY3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9uZnRzQnlDb250cmFjdGApXG4gICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXG4gICAgICAgIHJldHVybiB7IFxuICAgICAgICAgICAgbmZ0czoganNvbi5jb250cmFjdE5mdHMgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgZGVmYXVsdCBDb250cmFjdDsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJDb250cmFjdCIsIm5mdHMiLCJpdGVtcyIsInNldEl0ZW1zIiwicmVuZGVySXRlbXMiLCJtYXAiLCJ0b2tlbkhhc2giLCJ0b2tlbklkIiwiYmxvY2tOdW1iZXJNaW50ZWQiLCJhbW91bnQiLCJuYW1lIiwibWV0YWRhdGEiLCJnZXRJbWdVcmwiLCJpbWFnZSIsImluY2x1ZGVzIiwic3Vic3RyaW5nIiwiZGl2IiwiY2xhc3MiLCJzdHlsZSIsIndpZHRoIiwicGFkZGluZyIsIm1hcmdpbiIsImJhY2tncm91bmRDb2xvciIsImltZyIsInNyYyIsImFsdCIsImg2IiwicCIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInJlcyIsImZldGNoIiwianNvbiIsImNvbnRyYWN0TmZ0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/contract.jsx\n"));

/***/ })

});