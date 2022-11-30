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
exports.id = "pages/api/auth/request-message";
exports.ids = ["pages/api/auth/request-message"];
exports.modules = {

/***/ "moralis":
/*!**************************!*\
  !*** external "moralis" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("moralis");

/***/ }),

/***/ "(api)/./pages/api/auth/request-message.js":
/*!*******************************************!*\
  !*** ./pages/api/auth/request-message.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moralis */ \"moralis\");\n/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moralis__WEBPACK_IMPORTED_MODULE_0__);\n\nconst config = {\n    domain: process.env.APP_DOMAIN,\n    statement: \"Please sign this message to confirm your identity.\",\n    uri: process.env.NEXTAUTH_URL,\n    timeout: 60\n};\nasync function handler(req, res) {\n    const { address , chain , network  } = req.body;\n    await moralis__WEBPACK_IMPORTED_MODULE_0___default().start({\n        apiKey: process.env.MORALIS_API_KEY\n    });\n    try {\n        const message = await moralis__WEBPACK_IMPORTED_MODULE_0___default().Auth.requestMessage({\n            address,\n            chain,\n            network,\n            ...config\n        });\n        res.status(200).json(message);\n    } catch (error) {\n        res.status(400).json({\n            error\n        });\n        console.error(error);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9yZXF1ZXN0LW1lc3NhZ2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThCO0FBRTlCLE1BQU1DLFNBQVM7SUFDWEMsUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxVQUFVO0lBQzlCQyxXQUFXO0lBQ1hDLEtBQUtKLFFBQVFDLEdBQUcsQ0FBQ0ksWUFBWTtJQUM3QkMsU0FBUztBQUNiO0FBRWUsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDNUMsTUFBTSxFQUFFQyxRQUFPLEVBQUVDLE1BQUssRUFBRUMsUUFBTyxFQUFFLEdBQUdKLElBQUlLLElBQUk7SUFFNUMsTUFBTWhCLG9EQUFhLENBQUM7UUFBRWtCLFFBQVFmLFFBQVFDLEdBQUcsQ0FBQ2UsZUFBZTtJQUFDO0lBRTFELElBQUk7UUFDQSxNQUFNQyxVQUFVLE1BQU1wQixrRUFBMkIsQ0FBQztZQUM5Q2E7WUFDQUM7WUFDQUM7WUFDQSxHQUFHZCxNQUFNO1FBQ2I7UUFFQVcsSUFBSVcsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0o7SUFDekIsRUFBRSxPQUFPSyxPQUFPO1FBQ1piLElBQUlXLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUM7UUFBTTtRQUM3QkMsUUFBUUQsS0FBSyxDQUFDQTtJQUNsQjtBQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXBwZXJkYXBwLy4vcGFnZXMvYXBpL2F1dGgvcmVxdWVzdC1tZXNzYWdlLmpzPzJlZWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vcmFsaXMgZnJvbSAnbW9yYWxpcyc7XG5cbmNvbnN0IGNvbmZpZyA9IHtcbiAgICBkb21haW46IHByb2Nlc3MuZW52LkFQUF9ET01BSU4sXG4gICAgc3RhdGVtZW50OiAnUGxlYXNlIHNpZ24gdGhpcyBtZXNzYWdlIHRvIGNvbmZpcm0geW91ciBpZGVudGl0eS4nLFxuICAgIHVyaTogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfVVJMLFxuICAgIHRpbWVvdXQ6IDYwLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICAgIGNvbnN0IHsgYWRkcmVzcywgY2hhaW4sIG5ldHdvcmsgfSA9IHJlcS5ib2R5O1xuXG4gICAgYXdhaXQgTW9yYWxpcy5zdGFydCh7IGFwaUtleTogcHJvY2Vzcy5lbnYuTU9SQUxJU19BUElfS0VZIH0pO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IE1vcmFsaXMuQXV0aC5yZXF1ZXN0TWVzc2FnZSh7XG4gICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgY2hhaW4sXG4gICAgICAgICAgICBuZXR3b3JrLFxuICAgICAgICAgICAgLi4uY29uZmlnLFxuICAgICAgICB9KTtcblxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihtZXNzYWdlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yIH0pO1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG59Il0sIm5hbWVzIjpbIk1vcmFsaXMiLCJjb25maWciLCJkb21haW4iLCJwcm9jZXNzIiwiZW52IiwiQVBQX0RPTUFJTiIsInN0YXRlbWVudCIsInVyaSIsIk5FWFRBVVRIX1VSTCIsInRpbWVvdXQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiYWRkcmVzcyIsImNoYWluIiwibmV0d29yayIsImJvZHkiLCJzdGFydCIsImFwaUtleSIsIk1PUkFMSVNfQVBJX0tFWSIsIm1lc3NhZ2UiLCJBdXRoIiwicmVxdWVzdE1lc3NhZ2UiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/request-message.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/request-message.js"));
module.exports = __webpack_exports__;

})();