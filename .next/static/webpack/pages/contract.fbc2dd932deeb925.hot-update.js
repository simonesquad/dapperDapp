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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Contract(param) {\n    let { nfts  } = param;\n    _s();\n    const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(nfts);\n    const renderItems = ()=>{\n        return items.map((param)=>{\n            let { tokenHash , tokenId , blockNumberMinted , amount , name , metadata  } = param;\n            function getImgUrl(metadata) {\n                if (!metadata.image.includes(\"ipfs://\")) {\n                    return metadata.image;\n                } else {\n                    return \"https://ipfs.io/ipfs/\" + metadata.image.substring(7);\n                }\n            }\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"card\",\n                style: {\n                    width: \"25rem\",\n                    padding: \"2rem\",\n                    margin: \"2rem\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: getImgUrl(metadata),\n                        class: \"card-img-top\",\n                        alt: \"why\"\n                    }, void 0, false, {\n                        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                        lineNumber: 20,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"card-body\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                class: \"card-title\",\n                                children: [\n                                    \"Name: \",\n                                    name\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                                lineNumber: 22,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                class: \"card-text\",\n                                children: [\n                                    \"Token Id: \",\n                                    tokenId\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                                lineNumber: 23,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                class: \"card-text\",\n                                children: [\n                                    \"Block Number Minted: \",\n                                    blockNumberMinted\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                                lineNumber: 24,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                class: \"card-text\",\n                                children: [\n                                    \"Amount Minted: \",\n                                    amount\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                                lineNumber: 25,\n                                columnNumber: 29\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 25\n                    }, this)\n                ]\n            }, tokenHash, true, {\n                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                lineNumber: 19,\n                columnNumber: 20\n            }, this);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: renderItems()\n        }, void 0, false, {\n            fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n            lineNumber: 34,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(Contract, \"1tF4uectYrFEBj/rIWeiUusI0j8=\");\n_c = Contract;\nContract.getInitialProps = async (ctx)=>{\n    const res = await fetch(\"http://localhost:3000/api/nftsByContract\");\n    const json = await res.json();\n    return {\n        nfts: json.contractNfts\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contract);\nvar _c;\n$RefreshReg$(_c, \"Contract\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb250cmFjdC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFBaUM7QUFFakMsU0FBU0MsU0FBUyxLQUFRLEVBQUU7UUFBVixFQUFFQyxLQUFJLEVBQUUsR0FBUjs7SUFDZCxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0osK0NBQVFBLENBQUNFO0lBRW5DLE1BQU1HLGNBQWMsSUFBTTtRQUN0QixPQUFPRixNQUFNRyxHQUFHLENBQUMsU0FBdUU7Z0JBQXRFLEVBQUVDLFVBQVMsRUFBRUMsUUFBTyxFQUFFQyxrQkFBaUIsRUFBRUMsT0FBTSxFQUFFQyxLQUFJLEVBQUVDLFNBQVEsRUFBRTtZQUUvRSxTQUFTQyxVQUFVRCxRQUFRLEVBQUU7Z0JBRXpCLElBQUksQ0FBQ0EsU0FBU0UsS0FBSyxDQUFDQyxRQUFRLENBQUMsWUFBWTtvQkFDckMsT0FBT0gsU0FBU0UsS0FBSztnQkFDekIsT0FBTztvQkFDSCxPQUFPLDBCQUEwQkYsU0FBU0UsS0FBSyxDQUFDRSxTQUFTLENBQUM7Z0JBQzlELENBQUM7WUFDTDtZQUdBLHFCQUFPLDhEQUFDQztnQkFBb0JDLE9BQU07Z0JBQU9DLE9BQU87b0JBQUNDLE9BQU87b0JBQVNDLFNBQVM7b0JBQVFDLFFBQVE7Z0JBQU07O2tDQUNwRiw4REFBQ0M7d0JBQUlDLEtBQUtYLFVBQVVEO3dCQUFXTSxPQUFNO3dCQUFlTyxLQUFJOzs7Ozs7a0NBQ3hELDhEQUFDUjt3QkFBSUMsT0FBTTs7MENBQ1AsOERBQUNRO2dDQUFHUixPQUFNOztvQ0FBYTtvQ0FBT1A7Ozs7Ozs7MENBQzlCLDhEQUFDZ0I7Z0NBQUVULE9BQU07O29DQUFZO29DQUFXVjs7Ozs7OzswQ0FDaEMsOERBQUNtQjtnQ0FBRVQsT0FBTTs7b0NBQVk7b0NBQXNCVDs7Ozs7OzswQ0FDM0MsOERBQUNrQjtnQ0FBRVQsT0FBTTs7b0NBQVk7b0NBQWdCUjs7Ozs7Ozs7Ozs7Ozs7ZUFOcENIOzs7OztRQVVyQjtJQUNKO0lBRUEscUJBQ0k7a0JBQ0ksNEVBQUNVO3NCQUNJWjs7Ozs7OztBQUlqQjtHQXBDU0o7S0FBQUE7QUFzQ0xBLFNBQVMyQixlQUFlLEdBQUcsT0FBT0MsTUFBUTtJQUN0QyxNQUFNQyxNQUFNLE1BQU1DLE1BQU87SUFDekIsTUFBTUMsT0FBTyxNQUFNRixJQUFJRSxJQUFJO0lBQzNCLE9BQU87UUFDSDlCLE1BQU04QixLQUFLQyxZQUFZO0lBQzNCO0FBQ0o7QUFFQSwrREFBZWhDLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29udHJhY3QuanN4PzQwNTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIENvbnRyYWN0KHsgbmZ0cyB9KSB7XG4gICAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShuZnRzKTtcblxuICAgIGNvbnN0IHJlbmRlckl0ZW1zID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gaXRlbXMubWFwKCh7IHRva2VuSGFzaCwgdG9rZW5JZCwgYmxvY2tOdW1iZXJNaW50ZWQsIGFtb3VudCwgbmFtZSwgbWV0YWRhdGEgfSkgPT4ge1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRJbWdVcmwobWV0YWRhdGEpIHtcblxuICAgICAgICAgICAgICAgIGlmICghbWV0YWRhdGEuaW1hZ2UuaW5jbHVkZXMoXCJpcGZzOi8vXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtZXRhZGF0YS5pbWFnZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJodHRwczovL2lwZnMuaW8vaXBmcy9cIiArIG1ldGFkYXRhLmltYWdlLnN1YnN0cmluZyg3KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXt0b2tlbkhhc2h9IGNsYXNzPVwiY2FyZFwiIHN0eWxlPXt7d2lkdGg6IFwiMjVyZW1cIiwgcGFkZGluZzogXCIycmVtXCIsIG1hcmdpbjogXCIycmVtXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtnZXRJbWdVcmwobWV0YWRhdGEpfSBjbGFzcz1cImNhcmQtaW1nLXRvcFwiIGFsdD1cIndoeVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzPVwiY2FyZC10aXRsZVwiPk5hbWU6IHtuYW1lfTwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLXRleHRcIj5Ub2tlbiBJZDoge3Rva2VuSWR9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0XCI+QmxvY2sgTnVtYmVyIE1pbnRlZDoge2Jsb2NrTnVtYmVyTWludGVkfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dFwiPkFtb3VudCBNaW50ZWQ6IHthbW91bnR9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge3JlbmRlckl0ZW1zKCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cblxuICAgIENvbnRyYWN0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvbmZ0c0J5Q29udHJhY3RgKVxuICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxuICAgICAgICByZXR1cm4geyBcbiAgICAgICAgICAgIG5mdHM6IGpzb24uY29udHJhY3ROZnRzIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGRlZmF1bHQgQ29udHJhY3Q7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQ29udHJhY3QiLCJuZnRzIiwiaXRlbXMiLCJzZXRJdGVtcyIsInJlbmRlckl0ZW1zIiwibWFwIiwidG9rZW5IYXNoIiwidG9rZW5JZCIsImJsb2NrTnVtYmVyTWludGVkIiwiYW1vdW50IiwibmFtZSIsIm1ldGFkYXRhIiwiZ2V0SW1nVXJsIiwiaW1hZ2UiLCJpbmNsdWRlcyIsInN1YnN0cmluZyIsImRpdiIsImNsYXNzIiwic3R5bGUiLCJ3aWR0aCIsInBhZGRpbmciLCJtYXJnaW4iLCJpbWciLCJzcmMiLCJhbHQiLCJoNiIsInAiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJyZXMiLCJmZXRjaCIsImpzb24iLCJjb250cmFjdE5mdHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/contract.jsx\n"));

/***/ })

});