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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @moralisweb3/evm-utils */ \"./node_modules/@moralisweb3/evm-utils/lib/index.js\");\n/* harmony import */ var _moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Contract() {\n    _s();\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [address, setAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // let address = \"\";\n    const handleSubmit = async ()=>{\n        setAddress(document.querySelector(\"#contractAddress\").value);\n        const chain = _moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_3__.EvmChain.ETHEREUM;\n        const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://localhost:5000/api/contract\", {\n            params: {\n                address,\n                chain\n            }\n        });\n        console.log(response);\n        setResult(response.data);\n        document.querySelector(\"#contractAddress\").value = \"\";\n    };\n    // const handleSubmit = async (event) => {\n    //     event.preventDefault()\n    //     const data = {\n    //         address: event.target.address.value,\n    //     }\n    //     const JSONdata = JSON.stringify(data)\n    //     const endpoint = '/api/nftsByContract'\n    //     const options = {\n    //         method: 'POST',\n    //         headers: {\n    //             'Content-Type': 'application/json',\n    //         },\n    //         body: JSONdata,\n    //     }\n    //     const response = await fetch(endpoint, options)\n    //     const result = await response.json()\n    //     alert(`Is this your full contract address: ${result.data} ?`)\n    // }\n    const renderItems = ()=>{\n        return result.map((param)=>{\n            let { tokenHash , tokenId , blockNumberMinted , amount , name , metadata  } = param;\n            function getImgUrl(metadata) {\n                if (!metadata.image.includes(\"ipfs://\")) {\n                    return metadata.image;\n                } else {\n                    return \"https://ipfs.io/ipfs/\" + metadata.image.substring(7);\n                }\n            }\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"card\",\n                style: {\n                    width: \"25rem\",\n                    padding: \"2rem\",\n                    margin: \"2rem\",\n                    backgroundColor: \"#FFFFF7\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: getImgUrl(metadata),\n                        class: \"card-img-top\",\n                        alt: \"why\"\n                    }, void 0, false, {\n                        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                        lineNumber: 61,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"card-body\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                class: \"card-title\",\n                                children: [\n                                    \"Name: \",\n                                    name\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                                lineNumber: 63,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                class: \"card-text\",\n                                children: [\n                                    \"Token Id: \",\n                                    tokenId\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                                lineNumber: 64,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                class: \"card-text\",\n                                children: [\n                                    \"Block Number Minted: \",\n                                    blockNumberMinted\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                                lineNumber: 65,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                class: \"card-text\",\n                                children: [\n                                    \"Amount Minted: \",\n                                    amount\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                                lineNumber: 66,\n                                columnNumber: 29\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                        lineNumber: 62,\n                        columnNumber: 25\n                    }, this)\n                ]\n            }, tokenHash, true, {\n                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                lineNumber: 60,\n                columnNumber: 20\n            }, this);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"container-fluid\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        class: \"fw-semibold\",\n                        children: \"NFT Gallery\"\n                    }, void 0, false, {\n                        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                        lineNumber: 76,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        children: \"Search for an NFT Collection by Contract\"\n                    }, void 0, false, {\n                        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                        lineNumber: 77,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        class: \"d-flex\",\n                        role: \"search\",\n                        style: {\n                            width: \"35rem\",\n                            height: \"3rem\"\n                        },\n                        method: \"POST\",\n                        action: \"#\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                class: \"form-control me-3\",\n                                type: \"text\",\n                                placeholder: \"NFT Contract Address\",\n                                \"aria-label\": \"Search Contract Address\",\n                                id: \"contractAddress\",\n                                name: \"contractAddress\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                                lineNumber: 86,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                class: \"btn btn-outline-success\",\n                                onClick: handleSubmit,\n                                children: \"Search\"\n                            }, void 0, false, {\n                                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                                lineNumber: 95,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                        lineNumber: 78,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                lineNumber: 75,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"row\",\n                children: renderItems()\n            }, void 0, false, {\n                fileName: \"/Users/simoneballard/Desktop/dapperDapp/pages/contract.jsx\",\n                lineNumber: 102,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Contract, \"uWzJGpaQYJeg9+vqI6I6BXcHIdg=\");\n_c = Contract;\n// Contract.getInitialProps = async (ctx) => {\n//     const res = await fetch(`http://localhost:3000/api/nftsByContract`)\n//     const json = JSON.parse(res)\n//     return { \n//         nfts: json.contractNfts\n//     }\n// }\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contract);\nvar _c;\n$RefreshReg$(_c, \"Contract\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUN3QjtnQkFBSUMsT0FBTTswQkFDTmI7Ozs7Ozs7O0FBSWpCO0dBdEdTakI7S0FBQUE7QUF3R0wsOENBQThDO0FBQzlDLDBFQUEwRTtBQUMxRSxtQ0FBbUM7QUFFbkMsZ0JBQWdCO0FBQ2hCLGtDQUFrQztBQUNsQyxRQUFRO0FBQ1IsSUFBSTtBQUVKLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbnRyYWN0LmpzeD80MDU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgRXZtQ2hhaW4gfSBmcm9tICdAbW9yYWxpc3dlYjMvZXZtLXV0aWxzJztcblxuZnVuY3Rpb24gQ29udHJhY3QoKSB7XG4gICAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbYWRkcmVzcywgc2V0QWRkcmVzc10gPSB1c2VTdGF0ZSgnJyk7XG4gICAgLy8gbGV0IGFkZHJlc3MgPSBcIlwiO1xuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBzZXRBZGRyZXNzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udHJhY3RBZGRyZXNzXCIpLnZhbHVlKTtcbiAgICAgICAgY29uc3QgY2hhaW4gPSBFdm1DaGFpbi5FVEhFUkVVTTtcblxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS9jb250cmFjdGAsIHsgcGFyYW1zOiB7IGFkZHJlc3MsIGNoYWluIH0sIFxuICAgIH0pO1xuXG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgIHNldFJlc3VsdChyZXNwb25zZS5kYXRhKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRyYWN0QWRkcmVzc1wiKS52YWx1ZSA9IFwiXCI7XG4gICAgfTtcblxuICAgIC8vIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIC8vICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAvLyAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAvLyAgICAgICAgIGFkZHJlc3M6IGV2ZW50LnRhcmdldC5hZGRyZXNzLnZhbHVlLFxuICAgIC8vICAgICB9XG5cbiAgICAvLyAgICAgY29uc3QgSlNPTmRhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKVxuXG4gICAgLy8gICAgIGNvbnN0IGVuZHBvaW50ID0gJy9hcGkvbmZ0c0J5Q29udHJhY3QnXG5cbiAgICAvLyAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAvLyAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIC8vICAgICAgICAgaGVhZGVyczoge1xuICAgIC8vICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgLy8gICAgICAgICB9LFxuICAgIC8vICAgICAgICAgYm9keTogSlNPTmRhdGEsXG4gICAgLy8gICAgIH1cblxuICAgIC8vICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGVuZHBvaW50LCBvcHRpb25zKVxuXG4gICAgLy8gICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgIC8vICAgICBhbGVydChgSXMgdGhpcyB5b3VyIGZ1bGwgY29udHJhY3QgYWRkcmVzczogJHtyZXN1bHQuZGF0YX0gP2ApXG4gICAgLy8gfVxuXG4gICAgY29uc3QgcmVuZGVySXRlbXMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiByZXN1bHQubWFwKCh7IHRva2VuSGFzaCwgdG9rZW5JZCwgYmxvY2tOdW1iZXJNaW50ZWQsIGFtb3VudCwgbmFtZSwgbWV0YWRhdGEgfSkgPT4ge1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRJbWdVcmwobWV0YWRhdGEpIHtcblxuICAgICAgICAgICAgICAgIGlmICghbWV0YWRhdGEuaW1hZ2UuaW5jbHVkZXMoXCJpcGZzOi8vXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtZXRhZGF0YS5pbWFnZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJodHRwczovL2lwZnMuaW8vaXBmcy9cIiArIG1ldGFkYXRhLmltYWdlLnN1YnN0cmluZyg3KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXt0b2tlbkhhc2h9IGNsYXNzPVwiY2FyZFwiIHN0eWxlPXt7d2lkdGg6IFwiMjVyZW1cIiwgcGFkZGluZzogXCIycmVtXCIsIG1hcmdpbjogXCIycmVtXCIsIGJhY2tncm91bmRDb2xvcjogXCIjRkZGRkY3XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtnZXRJbWdVcmwobWV0YWRhdGEpfSBjbGFzcz1cImNhcmQtaW1nLXRvcFwiIGFsdD1cIndoeVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzPVwiY2FyZC10aXRsZVwiPk5hbWU6IHtuYW1lfTwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLXRleHRcIj5Ub2tlbiBJZDoge3Rva2VuSWR9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0XCI+QmxvY2sgTnVtYmVyIE1pbnRlZDoge2Jsb2NrTnVtYmVyTWludGVkfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dFwiPkFtb3VudCBNaW50ZWQ6IHthbW91bnR9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJmdy1zZW1pYm9sZFwiPk5GVCBHYWxsZXJ5PC9oMz5cbiAgICAgICAgICAgICAgICA8aDU+U2VhcmNoIGZvciBhbiBORlQgQ29sbGVjdGlvbiBieSBDb250cmFjdDwvaDU+XG4gICAgICAgICAgICAgICAgPGZvcm0gXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZC1mbGV4XCIgXG4gICAgICAgICAgICAgICAgICAgIHJvbGU9XCJzZWFyY2hcIiBcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogXCIzNXJlbVwiLCBcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjNyZW1cIn19XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZD1cIlBPU1RcIlxuICAgICAgICAgICAgICAgICAgICBhY3Rpb249XCIjXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbCBtZS0zXCIgXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTkZUIENvbnRyYWN0IEFkZHJlc3NcIiBcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlNlYXJjaCBDb250cmFjdCBBZGRyZXNzXCIgXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiY29udHJhY3RBZGRyZXNzXCIgXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb250cmFjdEFkZHJlc3NcIlxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc3VjY2Vzc1wiIFxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9XG4gICAgICAgICAgICAgICAgPlNlYXJjaFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgIHtyZW5kZXJJdGVtcygpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICk7XG59XG5cbiAgICAvLyBDb250cmFjdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XG4gICAgLy8gICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL25mdHNCeUNvbnRyYWN0YClcbiAgICAvLyAgICAgY29uc3QganNvbiA9IEpTT04ucGFyc2UocmVzKVxuXG4gICAgLy8gICAgIHJldHVybiB7IFxuICAgIC8vICAgICAgICAgbmZ0czoganNvbi5jb250cmFjdE5mdHNcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cblxuICAgIGV4cG9ydCBkZWZhdWx0IENvbnRyYWN0OyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImF4aW9zIiwiRXZtQ2hhaW4iLCJDb250cmFjdCIsInJlc3VsdCIsInNldFJlc3VsdCIsImFkZHJlc3MiLCJzZXRBZGRyZXNzIiwiaGFuZGxlU3VibWl0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidmFsdWUiLCJjaGFpbiIsIkVUSEVSRVVNIiwicmVzcG9uc2UiLCJnZXQiLCJwYXJhbXMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInJlbmRlckl0ZW1zIiwibWFwIiwidG9rZW5IYXNoIiwidG9rZW5JZCIsImJsb2NrTnVtYmVyTWludGVkIiwiYW1vdW50IiwibmFtZSIsIm1ldGFkYXRhIiwiZ2V0SW1nVXJsIiwiaW1hZ2UiLCJpbmNsdWRlcyIsInN1YnN0cmluZyIsImRpdiIsImNsYXNzIiwic3R5bGUiLCJ3aWR0aCIsInBhZGRpbmciLCJtYXJnaW4iLCJiYWNrZ3JvdW5kQ29sb3IiLCJpbWciLCJzcmMiLCJhbHQiLCJoNiIsInAiLCJoMyIsImg1IiwiZm9ybSIsInJvbGUiLCJoZWlnaHQiLCJtZXRob2QiLCJhY3Rpb24iLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImFyaWEtbGFiZWwiLCJpZCIsInJlcXVpcmVkIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/contract.jsx\n"));

/***/ })

});