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
exports.id = "pages/contract";
exports.ids = ["pages/contract"];
exports.modules = {

/***/ "./pages/contract.jsx":
/*!****************************!*\
  !*** ./pages/contract.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Contract({ nfts  }) {\n    const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(nfts);\n    const renderItems = ()=>{\n        return items.map(({ tokenHash , tokenId , blockNumberMinted , amount , name , metadata  })=>{\n            function getImgUrl(metadata) {\n                if (!metadata.image.includes(\"ipfs://\")) {\n                    return metadata.image;\n                } else {\n                    return \"https://ipfs.io/ipfs/\" + metadata.image.substring(7);\n                }\n            }\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"card\",\n                style: {\n                    width: \"25rem\",\n                    padding: \"2rem\",\n                    margin: \"2rem\",\n                    backgroundColor: \"#FFFFF7\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: getImgUrl(metadata),\n                        class: \"card-img-top\",\n                        alt: \"why\"\n                    }, void 0, false, {\n                        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                        lineNumber: 20,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"card-body\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                class: \"card-title\",\n                                children: [\n                                    \"Name: \",\n                                    name\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                                lineNumber: 22,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                class: \"card-text\",\n                                children: [\n                                    \"Token Id: \",\n                                    tokenId\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                                lineNumber: 23,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                class: \"card-text\",\n                                children: [\n                                    \"Block Number Minted: \",\n                                    blockNumberMinted\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                                lineNumber: 24,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                class: \"card-text\",\n                                children: [\n                                    \"Amount Minted: \",\n                                    amount\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                                lineNumber: 25,\n                                columnNumber: 29\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 25\n                    }, this)\n                ]\n            }, tokenHash, true, {\n                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                lineNumber: 19,\n                columnNumber: 20\n            }, this);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            class: \"row\",\n            children: renderItems()\n        }, void 0, false, {\n            fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n            lineNumber: 34,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\nContract.getInitialProps = async (ctx)=>{\n    const res = await fetch(`http://localhost:3000/api/nftsByContract`);\n    const json = await res.json();\n    return {\n        nfts: json.contractNfts\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contract);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb250cmFjdC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUFpQztBQUVqQyxTQUFTQyxTQUFTLEVBQUVDLEtBQUksRUFBRSxFQUFFO0lBQ3hCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSiwrQ0FBUUEsQ0FBQ0U7SUFFbkMsTUFBTUcsY0FBYyxJQUFNO1FBQ3RCLE9BQU9GLE1BQU1HLEdBQUcsQ0FBQyxDQUFDLEVBQUVDLFVBQVMsRUFBRUMsUUFBTyxFQUFFQyxrQkFBaUIsRUFBRUMsT0FBTSxFQUFFQyxLQUFJLEVBQUVDLFNBQVEsRUFBRSxHQUFLO1lBRXBGLFNBQVNDLFVBQVVELFFBQVEsRUFBRTtnQkFFekIsSUFBSSxDQUFDQSxTQUFTRSxLQUFLLENBQUNDLFFBQVEsQ0FBQyxZQUFZO29CQUNyQyxPQUFPSCxTQUFTRSxLQUFLO2dCQUN6QixPQUFPO29CQUNILE9BQU8sMEJBQTBCRixTQUFTRSxLQUFLLENBQUNFLFNBQVMsQ0FBQztnQkFDOUQsQ0FBQztZQUNMO1lBR0EscUJBQU8sOERBQUNDO2dCQUFvQkMsT0FBTTtnQkFBT0MsT0FBTztvQkFBQ0MsT0FBTztvQkFBU0MsU0FBUztvQkFBUUMsUUFBUTtvQkFBUUMsaUJBQWlCO2dCQUFTOztrQ0FDaEgsOERBQUNDO3dCQUFJQyxLQUFLWixVQUFVRDt3QkFBV00sT0FBTTt3QkFBZVEsS0FBSTs7Ozs7O2tDQUN4RCw4REFBQ1Q7d0JBQUlDLE9BQU07OzBDQUNQLDhEQUFDUztnQ0FBR1QsT0FBTTs7b0NBQWE7b0NBQU9QOzs7Ozs7OzBDQUM5Qiw4REFBQ2lCO2dDQUFFVixPQUFNOztvQ0FBWTtvQ0FBV1Y7Ozs7Ozs7MENBQ2hDLDhEQUFDb0I7Z0NBQUVWLE9BQU07O29DQUFZO29DQUFzQlQ7Ozs7Ozs7MENBQzNDLDhEQUFDbUI7Z0NBQUVWLE9BQU07O29DQUFZO29DQUFnQlI7Ozs7Ozs7Ozs7Ozs7O2VBTnBDSDs7Ozs7UUFVckI7SUFDSjtJQUVBLHFCQUNJO2tCQUNJLDRFQUFDVTtZQUFJQyxPQUFNO3NCQUNOYjs7Ozs7OztBQUlqQjtBQUVJSixTQUFTNEIsZUFBZSxHQUFHLE9BQU9DLE1BQVE7SUFDdEMsTUFBTUMsTUFBTSxNQUFNQyxNQUFNLENBQUMsd0NBQXdDLENBQUM7SUFDbEUsTUFBTUMsT0FBTyxNQUFNRixJQUFJRSxJQUFJO0lBQzNCLE9BQU87UUFDSC9CLE1BQU0rQixLQUFLQyxZQUFZO0lBQzNCO0FBQ0o7QUFFQSxpRUFBZWpDLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXBwZXJkYXBwLy4vcGFnZXMvY29udHJhY3QuanN4PzQwNTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIENvbnRyYWN0KHsgbmZ0cyB9KSB7XG4gICAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShuZnRzKTtcblxuICAgIGNvbnN0IHJlbmRlckl0ZW1zID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gaXRlbXMubWFwKCh7IHRva2VuSGFzaCwgdG9rZW5JZCwgYmxvY2tOdW1iZXJNaW50ZWQsIGFtb3VudCwgbmFtZSwgbWV0YWRhdGEgfSkgPT4ge1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRJbWdVcmwobWV0YWRhdGEpIHtcblxuICAgICAgICAgICAgICAgIGlmICghbWV0YWRhdGEuaW1hZ2UuaW5jbHVkZXMoXCJpcGZzOi8vXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtZXRhZGF0YS5pbWFnZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJodHRwczovL2lwZnMuaW8vaXBmcy9cIiArIG1ldGFkYXRhLmltYWdlLnN1YnN0cmluZyg3KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXt0b2tlbkhhc2h9IGNsYXNzPVwiY2FyZFwiIHN0eWxlPXt7d2lkdGg6IFwiMjVyZW1cIiwgcGFkZGluZzogXCIycmVtXCIsIG1hcmdpbjogXCIycmVtXCIsIGJhY2tncm91bmRDb2xvcjogXCIjRkZGRkY3XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtnZXRJbWdVcmwobWV0YWRhdGEpfSBjbGFzcz1cImNhcmQtaW1nLXRvcFwiIGFsdD1cIndoeVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzPVwiY2FyZC10aXRsZVwiPk5hbWU6IHtuYW1lfTwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLXRleHRcIj5Ub2tlbiBJZDoge3Rva2VuSWR9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0XCI+QmxvY2sgTnVtYmVyIE1pbnRlZDoge2Jsb2NrTnVtYmVyTWludGVkfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dFwiPkFtb3VudCBNaW50ZWQ6IHthbW91bnR9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICB7cmVuZGVySXRlbXMoKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuXG4gICAgQ29udHJhY3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9uZnRzQnlDb250cmFjdGApXG4gICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXG4gICAgICAgIHJldHVybiB7IFxuICAgICAgICAgICAgbmZ0czoganNvbi5jb250cmFjdE5mdHMgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgZGVmYXVsdCBDb250cmFjdDsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJDb250cmFjdCIsIm5mdHMiLCJpdGVtcyIsInNldEl0ZW1zIiwicmVuZGVySXRlbXMiLCJtYXAiLCJ0b2tlbkhhc2giLCJ0b2tlbklkIiwiYmxvY2tOdW1iZXJNaW50ZWQiLCJhbW91bnQiLCJuYW1lIiwibWV0YWRhdGEiLCJnZXRJbWdVcmwiLCJpbWFnZSIsImluY2x1ZGVzIiwic3Vic3RyaW5nIiwiZGl2IiwiY2xhc3MiLCJzdHlsZSIsIndpZHRoIiwicGFkZGluZyIsIm1hcmdpbiIsImJhY2tncm91bmRDb2xvciIsImltZyIsInNyYyIsImFsdCIsImg2IiwicCIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInJlcyIsImZldGNoIiwianNvbiIsImNvbnRyYWN0TmZ0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/contract.jsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_exports__ = (__webpack_exec__("./pages/contract.jsx"));
module.exports = __webpack_exports__;

})();