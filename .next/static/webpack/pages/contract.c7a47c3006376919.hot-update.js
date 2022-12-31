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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Contract() {\n    _s();\n    const [address, setAddress] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [nfts, setNfts] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    // const [result, setResult] = useState(nfts);\n    async function getNfts() {\n        console.log(address);\n        const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"http://localhost:5000/api/contract\", {\n            params: {\n                address: address\n            }\n        });\n        console.log(response.data);\n        setNfts(response.data);\n    }\n    function handleChangeSearch(e) {\n        setAddress(e.target.vlaue);\n    }\n    const renderItems = ()=>{\n        return nfts.map((param)=>{\n            let { tokenHash , tokenId , blockNumberMinted , amount , name , metadata  } = param;\n            function getImgUrl(metadata) {\n                if (!metadata.image.includes(\"ipfs://\")) {\n                    return metadata.image;\n                } else {\n                    return \"https://ipfs.io/ipfs/\" + metadata.image.substring(7);\n                }\n            }\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"card\",\n                style: {\n                    width: \"25rem\",\n                    padding: \"2rem\",\n                    margin: \"2rem\",\n                    backgroundColor: \"#FFFFF7\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: getImgUrl(metadata),\n                        class: \"card-img-top\",\n                        alt: \"why\"\n                    }, void 0, false, {\n                        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"card-body\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                class: \"card-title\",\n                                children: [\n                                    \"Name: \",\n                                    name\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                                lineNumber: 40,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                class: \"card-text\",\n                                children: [\n                                    \"Token Id: \",\n                                    tokenId\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                                lineNumber: 41,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                class: \"card-text\",\n                                children: [\n                                    \"Block Number Minted: \",\n                                    blockNumberMinted\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                                lineNumber: 42,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                class: \"card-text\",\n                                children: [\n                                    \"Amount Minted: \",\n                                    amount\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                                lineNumber: 43,\n                                columnNumber: 29\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 25\n                    }, this)\n                ]\n            }, tokenHash, true, {\n                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                lineNumber: 37,\n                columnNumber: 20\n            }, this);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"container-fluid\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        class: \"fw-semibold\",\n                        children: \"NFT Gallery\"\n                    }, void 0, false, {\n                        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        children: \"Search for an NFT Collection by Contract\"\n                    }, void 0, false, {\n                        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        class: \"d-flex\",\n                        role: \"search\",\n                        style: {\n                            width: \"35rem\",\n                            height: \"3rem\"\n                        },\n                        method: \"post\",\n                        action: \"/api/contract\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"address\",\n                                children: \"Address\"\n                            }, void 0, false, {\n                                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                                lineNumber: 63,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                class: \"form-control me-3\",\n                                type: \"text\",\n                                placeholder: \"NFT Contract Address\",\n                                \"aria-label\": \"Search Contract Address\",\n                                id: \"searchField\",\n                                name: \"search_term\",\n                                value: address,\n                                onChange: handleChangeSearch,\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                                lineNumber: 64,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                class: \"btn btn-outline-success\",\n                                onClick: getNfts,\n                                children: \"Search for NFTs\"\n                            }, void 0, false, {\n                                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                                lineNumber: 75,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                        lineNumber: 55,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"row\",\n                children: renderItems()\n            }, void 0, false, {\n                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                lineNumber: 82,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Contract, \"KRnGIGMfXab4DMyLLoSRQWfK/sI=\");\n_c = Contract;\n// Contract.getInitialProps = async (ctx) => {\n//     const res = await fetch(`http://localhost:3000/api/nftsByContract`)\n//     const json = await res.json()\n//     return { nfts: json.contractNfts }\n// }\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contract);\nvar _c;\n$RefreshReg$(_c, \"Contract\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b250cmFjdC5qc3g/NDA1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gQ29udHJhY3QoKSB7XG4gICAgY29uc3QgW2FkZHJlc3MsIHNldEFkZHJlc3NdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW25mdHMsIHNldE5mdHNdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgLy8gY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKG5mdHMpO1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0TmZ0cygpe1xuICAgICAgICBjb25zb2xlLmxvZyhhZGRyZXNzKVxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvY29udHJhY3RcIiwge1xuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgYWRkcmVzczogYWRkcmVzc1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgc2V0TmZ0cyhyZXNwb25zZS5kYXRhKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZVNlYXJjaChlKSB7XG4gICAgICAgIHNldEFkZHJlc3MoZS50YXJnZXQudmxhdWUpXG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVySXRlbXMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBuZnRzLm1hcCgoeyB0b2tlbkhhc2gsIHRva2VuSWQsIGJsb2NrTnVtYmVyTWludGVkLCBhbW91bnQsIG5hbWUsIG1ldGFkYXRhIH0pID0+IHtcblxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0SW1nVXJsKG1ldGFkYXRhKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoIW1ldGFkYXRhLmltYWdlLmluY2x1ZGVzKFwiaXBmczovL1wiKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWV0YWRhdGEuaW1hZ2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiaHR0cHM6Ly9pcGZzLmlvL2lwZnMvXCIgKyBtZXRhZGF0YS5pbWFnZS5zdWJzdHJpbmcoNyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17dG9rZW5IYXNofSBjbGFzcz1cImNhcmRcIiBzdHlsZT17e3dpZHRoOiBcIjI1cmVtXCIsIHBhZGRpbmc6IFwiMnJlbVwiLCBtYXJnaW46IFwiMnJlbVwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZGRkZGN1wifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Z2V0SW1nVXJsKG1ldGFkYXRhKX0gY2xhc3M9XCJjYXJkLWltZy10b3BcIiBhbHQ9XCJ3aHlcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzcz1cImNhcmQtdGl0bGVcIj5OYW1lOiB7bmFtZX08L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0XCI+VG9rZW4gSWQ6IHt0b2tlbklkfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dFwiPkJsb2NrIE51bWJlciBNaW50ZWQ6IHtibG9ja051bWJlck1pbnRlZH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLXRleHRcIj5BbW91bnQgTWludGVkOiB7YW1vdW50fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiZnctc2VtaWJvbGRcIj5ORlQgR2FsbGVyeTwvaDM+XG4gICAgICAgICAgICAgICAgPGg1PlNlYXJjaCBmb3IgYW4gTkZUIENvbGxlY3Rpb24gYnkgQ29udHJhY3Q8L2g1PlxuICAgICAgICAgICAgICAgIDxmb3JtIFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImQtZmxleFwiIFxuICAgICAgICAgICAgICAgICAgICByb2xlPVwic2VhcmNoXCIgXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6IFwiMzVyZW1cIiwgXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIzcmVtXCJ9fVxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q9XCJwb3N0XCJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uPVwiL2FwaS9jb250cmFjdFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYWRkcmVzc1wiPkFkZHJlc3M8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2wgbWUtM1wiIFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5GVCBDb250cmFjdCBBZGRyZXNzXCIgXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJTZWFyY2ggQ29udHJhY3QgQWRkcmVzc1wiIFxuICAgICAgICAgICAgICAgICAgICBpZD1cInNlYXJjaEZpZWxkXCIgXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZWFyY2hfdGVybVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXthZGRyZXNzfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlU2VhcmNofVxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc3VjY2Vzc1wiIFxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtnZXROZnRzfVxuICAgICAgICAgICAgICAgID5TZWFyY2ggZm9yIE5GVHNcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICB7cmVuZGVySXRlbXMoKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuXG4gICAgLy8gQ29udHJhY3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xuICAgIC8vICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9uZnRzQnlDb250cmFjdGApXG4gICAgLy8gICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXG4gICAgLy8gICAgIHJldHVybiB7IG5mdHM6IGpzb24uY29udHJhY3ROZnRzIH1cbiAgICAvLyB9XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRyYWN0OyJdLCJuYW1lcyI6WyJheGlvcyIsInVzZVN0YXRlIiwiQ29udHJhY3QiLCJhZGRyZXNzIiwic2V0QWRkcmVzcyIsIm5mdHMiLCJzZXROZnRzIiwiZ2V0TmZ0cyIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsImdldCIsInBhcmFtcyIsImRhdGEiLCJoYW5kbGVDaGFuZ2VTZWFyY2giLCJlIiwidGFyZ2V0IiwidmxhdWUiLCJyZW5kZXJJdGVtcyIsIm1hcCIsInRva2VuSGFzaCIsInRva2VuSWQiLCJibG9ja051bWJlck1pbnRlZCIsImFtb3VudCIsIm5hbWUiLCJtZXRhZGF0YSIsImdldEltZ1VybCIsImltYWdlIiwiaW5jbHVkZXMiLCJzdWJzdHJpbmciLCJkaXYiLCJjbGFzcyIsInN0eWxlIiwid2lkdGgiLCJwYWRkaW5nIiwibWFyZ2luIiwiYmFja2dyb3VuZENvbG9yIiwiaW1nIiwic3JjIiwiYWx0IiwiaDYiLCJwIiwiaDMiLCJoNSIsImZvcm0iLCJyb2xlIiwiaGVpZ2h0IiwibWV0aG9kIiwiYWN0aW9uIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJhcmlhLWxhYmVsIiwiaWQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/contract.jsx\n"));

/***/ })

});