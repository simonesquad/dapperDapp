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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "moralis":
/*!**************************!*\
  !*** external "moralis" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("moralis");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moralis */ \"moralis\");\n/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moralis__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_1___default()({\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0___default()({\n            name: \"MoralisAuth\",\n            credentials: {\n                message: {\n                    label: \"Message\",\n                    type: \"text\",\n                    placeholder: \"0x0\"\n                },\n                signature: {\n                    label: \"Signature\",\n                    type: \"text\",\n                    placeholder: \"0x0\"\n                }\n            },\n            async authorize (credentials) {\n                try {\n                    // \"message\" and \"signature\" are needed for authorization\n                    // we described them in \"credentials\" above\n                    const { message , signature  } = credentials;\n                    await moralis__WEBPACK_IMPORTED_MODULE_2___default().start({\n                        apiKey: process.env.MORALIS_API_KEY\n                    });\n                    const { address , profileId  } = (await moralis__WEBPACK_IMPORTED_MODULE_2___default().Auth.verify({\n                        message,\n                        signature,\n                        network: \"evm\"\n                    })).raw;\n                    const user = {\n                        address,\n                        profileId,\n                        signature\n                    };\n                    // returning the user object and creating  a session\n                    return user;\n                } catch (e) {\n                    console.error(e);\n                    return null;\n                }\n            }\n        })\n    ],\n    // adding user info to the user session object\n    callbacks: {\n        async jwt ({ token , user  }) {\n            user && (token.user = user);\n            return token;\n        },\n        async session ({ session , token  }) {\n            session.user = token.user;\n            return session;\n        }\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBa0U7QUFDakM7QUFDSDtBQUU5QixpRUFBZUMsZ0RBQVFBLENBQUM7SUFDcEJFLFdBQVc7UUFDUEgsc0VBQW1CQSxDQUFDO1lBQ2hCSSxNQUFNO1lBQ05DLGFBQWE7Z0JBQ1RDLFNBQVM7b0JBQ0xDLE9BQU87b0JBQ1BDLE1BQU07b0JBQ05DLGFBQWE7Z0JBQ2pCO2dCQUNBQyxXQUFXO29CQUNQSCxPQUFPO29CQUNQQyxNQUFNO29CQUNOQyxhQUFhO2dCQUNqQjtZQUNKO1lBQ0UsTUFBTUUsV0FBVU4sV0FBVyxFQUFFO2dCQUMzQixJQUFJO29CQUNGLHlEQUF5RDtvQkFDekQsMkNBQTJDO29CQUMzQyxNQUFNLEVBQUVDLFFBQU8sRUFBRUksVUFBUyxFQUFFLEdBQUdMO29CQUUvQixNQUFNSCxvREFBYSxDQUFDO3dCQUFFVyxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLGVBQWU7b0JBQUM7b0JBRTFELE1BQU0sRUFBRUMsUUFBTyxFQUFFQyxVQUFTLEVBQUUsR0FBRyxDQUM3QixNQUFNaEIsMERBQW1CLENBQUM7d0JBQUVJO3dCQUFTSTt3QkFBV1csU0FBUztvQkFBTSxFQUFDLEVBQ2hFQyxHQUFHO29CQUVMLE1BQU1DLE9BQU87d0JBQUVOO3dCQUFTQzt3QkFBV1I7b0JBQVU7b0JBQzdDLG9EQUFvRDtvQkFDcEQsT0FBT2E7Z0JBQ1QsRUFBRSxPQUFPQyxHQUFHO29CQUNWQyxRQUFRQyxLQUFLLENBQUNGO29CQUNkLE9BQU8sSUFBSTtnQkFDYjtZQUNGO1FBQ047S0FDSDtJQUNELDhDQUE4QztJQUM5Q0csV0FBVztRQUNQLE1BQU1DLEtBQUksRUFBRUMsTUFBSyxFQUFFTixLQUFJLEVBQUUsRUFBRTtZQUN2QkEsUUFBU00sQ0FBQUEsTUFBTU4sSUFBSSxHQUFHQSxJQUFHO1lBQ3pCLE9BQU9NO1FBQ1g7UUFDQSxNQUFNQyxTQUFRLEVBQUVBLFFBQU8sRUFBRUQsTUFBSyxFQUFFLEVBQUU7WUFDOUJDLFFBQVFQLElBQUksR0FBR00sTUFBTU4sSUFBSTtZQUN6QixPQUFPTztRQUNYO0lBQ0o7QUFDSixFQUFFLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXBwZXJkYXBwLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz81MjdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHMnO1xuaW1wb3J0IE5leHRBdXRoIGZyb20gJ25leHQtYXV0aCc7XG5pbXBvcnQgTW9yYWxpcyBmcm9tICdtb3JhbGlzJztcblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcbiAgICAgICAgICAgIG5hbWU6ICdNb3JhbGlzQXV0aCcsXG4gICAgICAgICAgICBjcmVkZW50aWFsczoge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdNZXNzYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJzB4MCcsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzaWduYXR1cmU6IHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdTaWduYXR1cmUnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnMHgwJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgIC8vIFwibWVzc2FnZVwiIGFuZCBcInNpZ25hdHVyZVwiIGFyZSBuZWVkZWQgZm9yIGF1dGhvcml6YXRpb25cbiAgICAgICAgICAgICAgICAgIC8vIHdlIGRlc2NyaWJlZCB0aGVtIGluIFwiY3JlZGVudGlhbHNcIiBhYm92ZVxuICAgICAgICAgICAgICAgICAgY29uc3QgeyBtZXNzYWdlLCBzaWduYXR1cmUgfSA9IGNyZWRlbnRpYWxzO1xuXG4gICAgICAgICAgICAgICAgICBhd2FpdCBNb3JhbGlzLnN0YXJ0KHsgYXBpS2V5OiBwcm9jZXNzLmVudi5NT1JBTElTX0FQSV9LRVkgfSk7XG5cbiAgICAgICAgICAgICAgICAgIGNvbnN0IHsgYWRkcmVzcywgcHJvZmlsZUlkIH0gPSAoXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IE1vcmFsaXMuQXV0aC52ZXJpZnkoeyBtZXNzYWdlLCBzaWduYXR1cmUsIG5ldHdvcms6ICdldm0nIH0pXG4gICAgICAgICAgICAgICAgICApLnJhdztcblxuICAgICAgICAgICAgICAgICAgY29uc3QgdXNlciA9IHsgYWRkcmVzcywgcHJvZmlsZUlkLCBzaWduYXR1cmUgfTtcbiAgICAgICAgICAgICAgICAgIC8vIHJldHVybmluZyB0aGUgdXNlciBvYmplY3QgYW5kIGNyZWF0aW5nICBhIHNlc3Npb25cbiAgICAgICAgICAgICAgICAgIHJldHVybiB1c2VyO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuICAgIF0sXG4gICAgLy8gYWRkaW5nIHVzZXIgaW5mbyB0byB0aGUgdXNlciBzZXNzaW9uIG9iamVjdFxuICAgIGNhbGxiYWNrczoge1xuICAgICAgICBhc3luYyBqd3QoeyB0b2tlbiwgdXNlciB9KSB7XG4gICAgICAgICAgICB1c2VyICYmICh0b2tlbi51c2VyID0gdXNlcik7XG4gICAgICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiB9KSB7XG4gICAgICAgICAgICBzZXNzaW9uLnVzZXIgPSB0b2tlbi51c2VyO1xuICAgICAgICAgICAgcmV0dXJuIHNlc3Npb247XG4gICAgICAgIH0sXG4gICAgfSxcbn0pOyJdLCJuYW1lcyI6WyJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiTmV4dEF1dGgiLCJNb3JhbGlzIiwicHJvdmlkZXJzIiwibmFtZSIsImNyZWRlbnRpYWxzIiwibWVzc2FnZSIsImxhYmVsIiwidHlwZSIsInBsYWNlaG9sZGVyIiwic2lnbmF0dXJlIiwiYXV0aG9yaXplIiwic3RhcnQiLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiTU9SQUxJU19BUElfS0VZIiwiYWRkcmVzcyIsInByb2ZpbGVJZCIsIkF1dGgiLCJ2ZXJpZnkiLCJuZXR3b3JrIiwicmF3IiwidXNlciIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJjYWxsYmFja3MiLCJqd3QiLCJ0b2tlbiIsInNlc3Npb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();