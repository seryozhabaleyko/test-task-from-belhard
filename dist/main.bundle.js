/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../img/reviews.png */ "./src/img/reviews.png");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../img/ellipse.png */ "./src/img/ellipse.png");
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ../img/gallery.png */ "./src/img/gallery.png");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
// Module
exports.push([module.i, "@charset \"UTF-8\";\n:root {\n  --blue: #007bff;\n  --indigo: #6610f2;\n  --purple: #6f42c1;\n  --pink: #e83e8c;\n  --red: #dc3545;\n  --orange: #fd7e14;\n  --yellow: #ffc107;\n  --green: #28a745;\n  --teal: #20c997;\n  --cyan: #17a2b8;\n  --white: #fff;\n  --gray: #6c757d;\n  --gray-dark: #343a40;\n  --primary: #007bff;\n  --secondary: #6c757d;\n  --success: #28a745;\n  --info: #17a2b8;\n  --warning: #ffc107;\n  --danger: #dc3545;\n  --light: #f8f9fa;\n  --dark: #343a40;\n  --black: #000;\n}\n\nhtml {\n  line-height: 1.15;\n  -webkit-text-size-adjust: 100%;\n}\n\nbody {\n  margin: 0;\n}\n\nmain {\n  display: block;\n}\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n  overflow: visible;\n}\n\npre {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\na {\n  background-color: transparent;\n}\n\nabbr[title] {\n  border-bottom: none;\n  text-decoration: underline;\n  text-decoration: underline dotted;\n}\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\nsmall {\n  font-size: 80%;\n}\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\nimg {\n  border-style: none;\n}\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: 100%;\n  line-height: 1.15;\n  margin: 0;\n}\n\nbutton,\ninput {\n  overflow: visible;\n}\n\nbutton,\nselect {\n  text-transform: none;\n}\n\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\n\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\nbutton:-moz-focusring,\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\nlegend {\n  box-sizing: border-box;\n  color: inherit;\n  display: table;\n  max-width: 100%;\n  padding: 0;\n  white-space: normal;\n}\n\nprogress {\n  vertical-align: baseline;\n}\n\ntextarea {\n  overflow: auto;\n}\n\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box;\n  padding: 0;\n}\n\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n[type=search] {\n  -webkit-appearance: textfield;\n  outline-offset: -2px;\n}\n\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  font: inherit;\n}\n\ndetails {\n  display: block;\n}\n\nsummary {\n  display: list-item;\n}\n\ntemplate {\n  display: none;\n}\n\n[hidden] {\n  display: none;\n}\n\n.btn {\n  display: inline-block;\n  font-weight: 400;\n  color: #212529;\n  text-align: center;\n  vertical-align: middle;\n  cursor: pointer;\n  user-select: none;\n  background-color: transparent;\n  border: 1px solid transparent;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 0.25rem;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n.btn-warning {\n  color: #212529;\n  border-color: #ffc107;\n  background-color: #e9aa09;\n}\n.btn-warning:focus {\n  box-shadow: 0 0 0 0.2rem rgba(222, 170, 12, 0.5);\n}\n.btn-warning:hover {\n  color: #212529;\n  background-color: #ca9903;\n  border-color: #d39e00;\n}\n.btn-warning:active {\n  color: #212529;\n  background-color: #d39e00;\n  border-color: #c69500;\n}\n.btn-dark {\n  width: 164px;\n  height: 40px;\n  line-height: 2;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  border-radius: 3px;\n  font-size: 15px;\n  color: var(--white, white);\n  transition: background-color 0.2s ease-in;\n}\n.btn-dark:hover {\n  background-color: var(--dark, black);\n}\n.btn-hero {\n  width: 312px;\n  height: 70px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 27px;\n  letter-spacing: 0.015em;\n  color: var(--black, black);\n  border-radius: 3px;\n}\n\n.widget > li {\n  margin-bottom: 2rem;\n}\n.widget > li:last-child {\n  margin-bottom: 0;\n}\n.widget > li a {\n  color: var(--white, white);\n  transition: color 0.3s ease-in;\n}\n.widget > li a:hover {\n  color: var(----light, rgba(255, 255, 255, 0.8));\n}\n@media (min-width: 992px) {\n  .widget-call {\n    text-align: right;\n  }\n}\n.widget-call .phone {\n  margin-top: 15px;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 22px;\n  letter-spacing: 0.015em;\n  color: var(--white, white);\n}\n\n.earth {\n  position: absolute;\n  top: 150px;\n  left: 0;\n  width: 200%;\n  height: auto;\n}\n@media (min-width: 576px) {\n  .earth {\n    width: 120%;\n  }\n}\n@media (min-width: 768px) {\n  .earth {\n    right: 5%;\n    left: auto;\n    width: 70%;\n  }\n}\n\n.rocket {\n  position: absolute;\n  top: 0;\n  right: 20%;\n  width: 35%;\n  height: auto;\n}\n\n.social {\n  display: grid;\n  justify-content: flex-start;\n}\n@media (min-width: 992px) {\n  .social {\n    justify-content: flex-end;\n  }\n}\n.social > nav {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-column-gap: 20px;\n}\n.social > nav a {\n  display: block;\n  transition: all 0.3s ease-in;\n}\n.social > nav a svg {\n  color: #DFDADC;\n  opacity: 0.5;\n  transition: all 0.3s ease-in;\n}\n.social > nav a svg:hover {\n  color: var(--white, white);\n  opacity: 1;\n}\n.social > nav a:hover {\n  transform: scale(1.3);\n}\n\n*, ::after, ::before {\n  box-sizing: border-box;\n}\n\nhtml {\n  font-size: 10px;\n}\n\nbody {\n  font-family: \"Open Sans\", sans-serif;\n  color: #fff;\n  background: #020412;\n  font-size: 14px;\n  font-weight: 400;\n}\n\na {\n  color: #fff;\n  text-decoration: none;\n}\n\nul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\nfigure {\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n}\n\nimg {\n  width: 100%;\n  height: 100%;\n}\n\ninput[type=checkbox]:checked,\ninput[type=checkbox]:not(:checked),\ninput[type=radio]:checked,\ninput[type=radio]:not(:checked) {\n  position: absolute;\n  left: -9999px;\n}\n\ninput[type=checkbox]:checked + label,\ninput[type=checkbox]:not(:checked) + label,\ninput[type=radio]:checked + label,\ninput[type=radio]:not(:checked) + label {\n  display: inline-block;\n  position: relative;\n  padding-left: 36px;\n  line-height: 20px;\n  cursor: pointer;\n}\n\ninput[type=checkbox]:checked + label:before,\ninput[type=checkbox]:not(:checked) + label:before,\ninput[type=radio]:checked + label:before,\ninput[type=radio]:not(:checked) + label:before {\n  content: \"\";\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 18px;\n  height: 18px;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n}\n\ninput[type=checkbox]:checked + label:before,\ninput[type=checkbox]:not(:checked) + label:before {\n  border-radius: 2px;\n}\n\ninput[type=radio]:checked + label:before,\ninput[type=radio]:not(:checked) + label:before {\n  border-radius: 100%;\n}\n\ninput[type=checkbox]:checked + label:after,\ninput[type=checkbox]:not(:checked) + label:after,\ninput[type=radio]:checked + label:after,\ninput[type=radio]:not(:checked) + label:after {\n  content: \"\";\n  position: absolute;\n  -webkit-transition: all 0.2s ease;\n  -moz-transition: all 0.2s ease;\n  -o-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n}\n\ninput[type=checkbox]:checked + label:after,\ninput[type=checkbox]:not(:checked) + label:after {\n  left: 4px;\n  top: 5px;\n  width: 10px;\n  height: 5px;\n  border-radius: 1px;\n  border-left: 2px solid #fffcfc99;\n  border-bottom: 2px solid #fffcfc99;\n  -webkit-transform: rotate(-45deg);\n  -moz-transform: rotate(-45deg);\n  -o-transform: rotate(-45deg);\n  -ms-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n}\n\ninput[type=radio]:checked + label:after,\ninput[type=radio]:not(:checked) + label:after {\n  left: 5px;\n  top: 5px;\n  width: 10px;\n  height: 10px;\n  border-radius: 100%;\n  background-color: #e145a3;\n}\n\ninput[type=checkbox]:not(:checked) + label:after,\ninput[type=radio]:not(:checked) + label:after {\n  opacity: 0;\n}\n\ninput[type=checkbox]:checked + label:after,\ninput[type=radio]:checked + label:after {\n  opacity: 1;\n}\n\n.brand img {\n  width: auto;\n  height: 30px;\n}\n\n.header {\n  background: linear-gradient(327.34deg, rgba(2, 4, 18, 0.97) 39.41%, rgba(2, 4, 18, 0) 75.32%);\n}\n\n.heading .title {\n  margin: 0;\n  font-family: \"Open Sans Condensed\", sans-serif;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 36px;\n  line-height: 43px;\n  color: #FFFFFF;\n}\n.heading .description {\n  margin: 0;\n  position: relative;\n  font-family: \"Open Sans\", sans-serif;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 23px;\n  margin-top: 25px;\n  padding-bottom: 30px;\n  color: #FFFFFF;\n}\n.heading .description::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100px;\n  border: 3px solid #e9aa09;\n}\n\n.header {\n  position: relative;\n  background: linear-gradient(327.34deg, rgba(2, 4, 18, 0.97) 39.41%, rgba(2, 4, 18, 0) 75.32%);\n}\n.header .container {\n  position: relative;\n  height: 100%;\n}\n\n.navbar {\n  height: 125px;\n}\n.navbar .container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 100%;\n}\n.navbar .call {\n  width: 46px;\n  height: 46px;\n  border: 2px solid var(----white, white);\n  border-radius: 50%;\n  display: none;\n  align-items: center;\n  justify-content: center;\n  transition: 0.3s;\n}\n.navbar .call:hover {\n  border: 2px solid var(--green, green);\n}\n.navbar .call:hover svg {\n  width: 15px;\n  height: 15px;\n  color: var(--green, green);\n}\n@media (min-width: 1200px) {\n  .navbar .call {\n    display: flex;\n  }\n}\n.navbar .call svg {\n  color: #FEFEFE;\n  transition: 0.3s;\n}\n.navbar .toggle {\n  border: none;\n  background: inherit;\n  padding: 0;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n@media (min-width: 1200px) {\n  .navbar .toggle {\n    display: none;\n  }\n}\n.navbar .toggle svg {\n  width: 24px;\n  height: 24px;\n  color: var(----white, white);\n}\n\n.nav {\n  display: none;\n}\n@media (min-width: 1200px) {\n  .nav {\n    display: flex;\n  }\n}\n.nav-item {\n  position: relative;\n  margin-right: 60px;\n}\n.nav-item:last-child {\n  margin-right: 0;\n}\n.nav-item::after {\n  transition: 0.3s;\n}\n.nav-item:hover::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: -10px;\n  border-bottom: 2px solid rgba(255, 255, 255, 0.85);\n}\n.nav-link {\n  font-size: 18px;\n  line-height: 25px;\n  color: rgba(255, 255, 255, 0.85);\n  transition: 0.3s;\n}\n.nav-link:hover {\n  color: var(--white, white);\n}\n\n.promo {\n  padding: 70px 0;\n}\n\n.hero {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-row-gap: 40px;\n  align-items: flex-end;\n}\n@media (min-width: 992px) {\n  .hero {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n.hero .content {\n  display: grid;\n  grid-row-gap: 40px;\n}\n.hero .content .title {\n  font-family: \"Open Sans Condensed\", sans-serif;\n  font-weight: bold;\n  font-size: 50px;\n  line-height: 133.18%;\n  color: #FCF3F3;\n  margin: 0;\n}\n.hero .content .title > span {\n  border-bottom: 3px solid #E9AA09;\n}\n.hero .content .description {\n  font-size: 20px;\n  line-height: 30px;\n  color: #FFFBFB;\n  margin: 0;\n}\n.hero .content > ul {\n  padding-left: 20px;\n  list-style-type: \"👍\";\n}\n.hero .content > ul > li {\n  padding-left: 10px;\n  margin-bottom: 5px;\n  font-size: 18px;\n  line-height: 25px;\n  color: #FFF9F9;\n}\n.hero .content > ul > li:last-child {\n  margin-bottom: 0;\n}\n\n.advantages {\n  position: relative;\n  padding: 70px 0;\n}\n\n.features {\n  display: grid;\n  grid-row-gap: 25px;\n  margin-top: 65px;\n}\n@media (min-width: 576px) {\n  .features {\n    grid-template-columns: 1fr 1fr;\n    grid-column-gap: 25px;\n    grid-row-gap: 25px;\n  }\n}\n@media (min-width: 992px) {\n  .features {\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-column-gap: 25px;\n    grid-row-gap: 25px;\n  }\n}\n@media (min-width: 1200px) {\n  .features {\n    grid-row-gap: 50px;\n  }\n}\n\n.feature {\n  display: flex;\n}\n.feature img {\n  width: 70px;\n  height: 70px;\n}\n@media (min-width: 576px) {\n  .feature img {\n    width: 50px;\n    height: 50px;\n  }\n}\n@media (min-width: 1200px) {\n  .feature img {\n    width: 70px;\n    height: 70px;\n  }\n}\n.feature-body {\n  padding-left: 25px;\n}\n.feature-body > h3 {\n  margin: 0;\n  margin-bottom: 15px;\n}\n.feature-body > p {\n  margin: 0;\n}\n\n.slider {\n  position: relative;\n  overflow: hidden;\n}\n.slider .items {\n  display: flex;\n  transition: transform 0.6s ease;\n}\n.slider .item {\n  display: grid;\n  padding: 30px 70px;\n  padding-top: 50px;\n}\n@media (min-width: 992px) {\n  .slider .item {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n.slider .item .description {\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.slider .item .description > p {\n  margin: 0;\n  font-size: 16px;\n  line-height: 1.5em;\n  color: #ffffffd9;\n}\n.slider .item .description > div {\n  display: flex;\n  justify-content: space-between;\n}\n.slider .item .image {\n  position: relative;\n  border-radius: 3px;\n  padding: 10px;\n  background: rgba(196, 196, 196, 0.02);\n}\n.slider .item .image > div {\n  position: absolute;\n  top: -30px;\n  right: 0;\n  bottom: -30px;\n  display: grid;\n  grid-template-rows: 1fr 1fr 1fr;\n  grid-row-gap: 10px;\n  padding: 10px;\n  background: rgba(196, 196, 196, 0.01);\n  backdrop-filter: blur(10px);\n  border-radius: 3px;\n}\n.slider .prev,\n.slider .next {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  color: #8f8f8f;\n  background: rgba(20, 28, 40, 0.3);\n  transition: color, background 0.3s ease;\n}\n.slider .prev:hover,\n.slider .next:hover {\n  color: #fff;\n  background: #141c28;\n}\n.slider .prev {\n  left: 0;\n}\n.slider .next {\n  right: 0;\n}\n\n.reviews {\n  padding: 70px 0;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position: bottom -8px right;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-color: #020412;\n}\n\n.feedback {\n  padding: 70px 0;\n  background: #08101B;\n}\n.feedback form {\n  display: grid;\n  grid-row-gap: 25px;\n  margin-top: 65px;\n}\n@media (min-width: 768px) {\n  .feedback form {\n    grid-template-columns: 1fr 1fr;\n    grid-column-gap: 25px;\n  }\n}\n@media (min-width: 992px) {\n  .feedback form {\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-column-gap: 50px;\n  }\n}\n.feedback form > div {\n  position: relative;\n}\n.feedback form > div:last-child {\n  margin-right: 0;\n}\n.feedback form > div > input {\n  outline: none;\n  width: 100%;\n  height: 60px;\n  background: inherit;\n  border: 1px solid #fff;\n  border-radius: 3px;\n  padding-left: 60px;\n  color: rgba(255, 255, 255, 0.4);\n}\n.feedback form > div > svg {\n  position: absolute;\n  top: 0;\n  left: 0;\n  margin: 20px;\n  color: rgba(255, 255, 255, 0.4);\n}\n.feedback form > div > button[type=submit] {\n  width: 100%;\n  height: 60px;\n  border-radius: 3px;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 27px;\n  letter-spacing: 0.015em;\n}\n\n.form-check {\n  margin-top: 25px;\n}\n.form-check-input {\n  border: 1px solid #fffcfc99;\n}\n.form-check-label {\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: 0.015em;\n  color: rgba(255, 252, 252, 0.6);\n}\n\n.contacts {\n  position: relative;\n  padding: 50px 0;\n}\n.contacts #map {\n  position: absolute;\n  top: 0;\n}\n.contacts .info {\n  position: relative;\n  max-width: 433px;\n  background: #08101B;\n  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);\n  border-radius: 3px;\n  padding: 50px;\n}\n.contacts .info > ul {\n  list-style: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  padding-left: 20px;\n  margin-top: 30px;\n  margin-bottom: 50px;\n}\n.contacts .info > ul > li {\n  padding-left: 20px;\n  margin-bottom: 25px;\n  font-size: 18px;\n  line-height: 25px;\n  letter-spacing: 0.015em;\n  color: rgba(255, 255, 255, 0.7);\n}\n.contacts .info > ul > li:last-child {\n  margin-bottom: 0;\n}\n\n.gallery {\n  padding: 70px 0;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-position: top right;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-color: #01050f;\n}\n\n.tabs {\n  display: flex;\n  justify-content: center;\n  margin-top: 65px;\n}\n.tabs > div {\n  width: 100%;\n  border-bottom: 2px solid rgba(181, 183, 186, 0.1);\n}\n@media (min-width: 576px) {\n  .tabs > div {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    background: #08101b;\n  }\n}\n@media (min-width: 768px) {\n  .tabs > div {\n    display: flex;\n    background: none;\n    width: auto;\n  }\n}\n.tabs > div > a {\n  margin-right: 0;\n}\n@media (min-width: 768px) {\n  .tabs > div > a {\n    margin-right: 15px;\n  }\n}\n.tabs-link {\n  display: block;\n  padding: 0.5rem 1rem;\n  border-bottom: 1px solid transparent;\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n  color: #6B7076;\n  background: #08101b;\n  margin-right: 20px;\n  font-size: 15px;\n  line-height: 25px;\n  transition: color 0.3s;\n}\n.tabs-link:last-child {\n  margin-right: 0;\n}\n.tabs-link:hover, .tabs-link.active {\n  color: #fff;\n  margin-bottom: -2px;\n}\n\n.tab-content {\n  position: relative;\n  background: #08101b;\n  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.05);\n  border-radius: 3px;\n  padding: 50px 60px;\n}\n@media (min-width: 768px) {\n  .tab-content {\n    padding: 50px 80px;\n  }\n}\n.tab-content .slide {\n  display: grid;\n  grid-template-areas: \"one\" \"two\" \"three\" \"four\";\n  gap: 10px;\n}\n@media (min-width: 576px) {\n  .tab-content .slide {\n    grid-template-areas: \"one one\" \"two two\" \"three four\";\n  }\n}\n@media (min-width: 768px) {\n  .tab-content .slide {\n    grid-template-areas: \"one one two two\" \"one one three four\";\n  }\n}\n.tab-content .slide > article {\n  overflow: hidden;\n  position: relative;\n  border-radius: 3px;\n}\n.tab-content .slide > article .info {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: -100%;\n  min-height: 100px;\n  padding: 20px 40px;\n  background: rgba(0, 0, 0, 0.65);\n  transition: bottom 0.5s;\n}\n.tab-content .slide > article:hover .info {\n  bottom: 0;\n}\n.tab-content .slide > article:nth-child(1) {\n  grid-area: one;\n}\n.tab-content .slide > article:nth-child(2) {\n  grid-area: two;\n}\n.tab-content .slide > article:nth-child(3) {\n  grid-area: three;\n}\n.tab-content .slide > article:nth-child(4) {\n  grid-area: four;\n}\n.tab-content .prev,\n.tab-content .next {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #8F8F8F;\n  transition: 0.3s;\n}\n.tab-content .prev:hover,\n.tab-content .next:hover {\n  color: #fff;\n}\n.tab-content .prev {\n  left: 20px;\n}\n.tab-content .next {\n  right: 20px;\n}\n\n.footer {\n  background-color: #08101B;\n}\n.footer-top {\n  padding-top: 5rem;\n  padding-bottom: 3rem;\n  display: grid;\n  grid-row-gap: 2rem;\n}\n@media (min-width: 576px) {\n  .footer-top {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (min-width: 768px) {\n  .footer-top {\n    grid-template-columns: 2fr 1fr 1fr;\n  }\n}\n@media (min-width: 992px) {\n  .footer-top {\n    grid-template-columns: 25% 15% 15% 1fr;\n  }\n}\n.footer-bottom {\n  display: grid;\n  grid-row-gap: 2rem;\n  padding: 30px 0;\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n}\n@media (min-width: 992px) {\n  .footer-bottom {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n}\n.footer-bottom > nav {\n  display: flex;\n}\n.footer-bottom > nav > a {\n  color: rgba(255, 255, 255, 0.8);\n  margin-right: 4rem;\n  transition: color 0.3s ease-in;\n}\n.footer-bottom > nav > a:last-child {\n  margin-right: 0;\n}\n.footer-bottom > nav > a:hover {\n  color: var(--white, white);\n}\n.footer-bottom > a {\n  color: rgba(255, 255, 255, 0.8);\n  transition: color 0.3s ease-in;\n}\n.footer-bottom > a:hover {\n  color: var(--white, white);\n}\n.footer .columns {\n  display: flex;\n}\n.footer .columns .column {\n  margin-right: 26px;\n}\n.footer .columns .column:last-child {\n  margin-right: 0;\n}\n.footer .columns .column img:hover {\n  animation: shake 0.5s;\n  animation-iteration-count: infinite;\n}\n\n@keyframes shake {\n  0% {\n    transform: translate(1px, 1px) rotate(0deg);\n  }\n  10% {\n    transform: translate(-1px, -2px) rotate(-1deg);\n  }\n  20% {\n    transform: translate(-3px, 0px) rotate(1deg);\n  }\n  30% {\n    transform: translate(3px, 2px) rotate(0deg);\n  }\n  40% {\n    transform: translate(1px, -1px) rotate(1deg);\n  }\n  50% {\n    transform: translate(-1px, 2px) rotate(-1deg);\n  }\n  60% {\n    transform: translate(-3px, 1px) rotate(0deg);\n  }\n  70% {\n    transform: translate(3px, 1px) rotate(-1deg);\n  }\n  80% {\n    transform: translate(-1px, -1px) rotate(1deg);\n  }\n  90% {\n    transform: translate(1px, 2px) rotate(0deg);\n  }\n  100% {\n    transform: translate(1px, -2px) rotate(-1deg);\n  }\n}\n#map {\n  width: 100%;\n  padding: 0;\n  margin: 0;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/img/ellipse.png":
/*!*****************************!*\
  !*** ./src/img/ellipse.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/img/ellipse.png");

/***/ }),

/***/ "./src/img/gallery.png":
/*!*****************************!*\
  !*** ./src/img/gallery.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/img/gallery.png");

/***/ }),

/***/ "./src/img/reviews.png":
/*!*****************************!*\
  !*** ./src/img/reviews.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/img/reviews.png");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWcvZWxsaXBzZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9nYWxsZXJ5LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL3Jldmlld3MucG5nIiwid2VicGFjazovLy8uL3NyYy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9zdHlsZS5zY3NzPzJlNGQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlD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QUNBOUQ7QUFBZSxvRkFBdUIsd0JBQXdCLEU7Ozs7Ozs7Ozs7OztBQ0E5RDtBQUFlLG9GQUF1Qix3QkFBd0IsRTs7Ozs7Ozs7Ozs7O0FDQTlEO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUEsVUFBVSxtQkFBTyxDQUFDLHNKQUEyRTtBQUM3RiwwQkFBMEIsbUJBQU8sQ0FBQyw4TUFBcUc7O0FBRXZJOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvaW5kZXguanNcIik7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIi4uL2ltZy9yZXZpZXdzLnBuZ1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IHJlcXVpcmUoXCIuLi9pbWcvZWxsaXBzZS5wbmdcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSByZXF1aXJlKFwiLi4vaW1nL2dhbGxlcnkucG5nXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuOnJvb3Qge1xcbiAgLS1ibHVlOiAjMDA3YmZmO1xcbiAgLS1pbmRpZ286ICM2NjEwZjI7XFxuICAtLXB1cnBsZTogIzZmNDJjMTtcXG4gIC0tcGluazogI2U4M2U4YztcXG4gIC0tcmVkOiAjZGMzNTQ1O1xcbiAgLS1vcmFuZ2U6ICNmZDdlMTQ7XFxuICAtLXllbGxvdzogI2ZmYzEwNztcXG4gIC0tZ3JlZW46ICMyOGE3NDU7XFxuICAtLXRlYWw6ICMyMGM5OTc7XFxuICAtLWN5YW46ICMxN2EyYjg7XFxuICAtLXdoaXRlOiAjZmZmO1xcbiAgLS1ncmF5OiAjNmM3NTdkO1xcbiAgLS1ncmF5LWRhcms6ICMzNDNhNDA7XFxuICAtLXByaW1hcnk6ICMwMDdiZmY7XFxuICAtLXNlY29uZGFyeTogIzZjNzU3ZDtcXG4gIC0tc3VjY2VzczogIzI4YTc0NTtcXG4gIC0taW5mbzogIzE3YTJiODtcXG4gIC0td2FybmluZzogI2ZmYzEwNztcXG4gIC0tZGFuZ2VyOiAjZGMzNTQ1O1xcbiAgLS1saWdodDogI2Y4ZjlmYTtcXG4gIC0tZGFyazogIzM0M2E0MDtcXG4gIC0tYmxhY2s6ICMwMDA7XFxufVxcblxcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7XFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbmhyIHtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgaGVpZ2h0OiAwO1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbnByZSB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxuICBmb250LXNpemU6IDFlbTtcXG59XFxuXFxuYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuYWJiclt0aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbn1cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcbiAgdG9wOiAtMC41ZW07XFxufVxcblxcbmltZyB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBsaW5lLWhlaWdodDogMS4xNTtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuYnV0dG9uLFxcbmlucHV0IHtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG5idXR0b24sXFxuW3R5cGU9YnV0dG9uXSxcXG5bdHlwZT1yZXNldF0sXFxuW3R5cGU9c3VibWl0XSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG59XFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPWJ1dHRvbl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9cmVzZXRdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPXN1Ym1pdF06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPWJ1dHRvbl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9cmVzZXRdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPXN1Ym1pdF06LW1vei1mb2N1c3Jpbmcge1xcbiAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG5maWVsZHNldCB7XFxuICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XFxufVxcblxcbmxlZ2VuZCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBkaXNwbGF5OiB0YWJsZTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDA7XFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbn1cXG5cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG5bdHlwZT1jaGVja2JveF0sXFxuW3R5cGU9cmFkaW9dIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5bdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcblt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG5bdHlwZT1zZWFyY2hdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XFxufVxcblxcblt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbiAgZm9udDogaW5oZXJpdDtcXG59XFxuXFxuZGV0YWlscyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbnRlbXBsYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5idG4ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGNvbG9yOiAjMjEyNTI5O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XFxufVxcbi5idG4td2FybmluZyB7XFxuICBjb2xvcjogIzIxMjUyOTtcXG4gIGJvcmRlci1jb2xvcjogI2ZmYzEwNztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWFhMDk7XFxufVxcbi5idG4td2FybmluZzpmb2N1cyB7XFxuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgyMjIsIDE3MCwgMTIsIDAuNSk7XFxufVxcbi5idG4td2FybmluZzpob3ZlciB7XFxuICBjb2xvcjogIzIxMjUyOTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjYTk5MDM7XFxuICBib3JkZXItY29sb3I6ICNkMzllMDA7XFxufVxcbi5idG4td2FybmluZzphY3RpdmUge1xcbiAgY29sb3I6ICMyMTI1Mjk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDM5ZTAwO1xcbiAgYm9yZGVyLWNvbG9yOiAjYzY5NTAwO1xcbn1cXG4uYnRuLWRhcmsge1xcbiAgd2lkdGg6IDE2NHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgbGluZS1oZWlnaHQ6IDI7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBjb2xvcjogdmFyKC0td2hpdGUsIHdoaXRlKTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluO1xcbn1cXG4uYnRuLWRhcms6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyaywgYmxhY2spO1xcbn1cXG4uYnRuLWhlcm8ge1xcbiAgd2lkdGg6IDMxMnB4O1xcbiAgaGVpZ2h0OiA3MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBsaW5lLWhlaWdodDogMjdweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjAxNWVtO1xcbiAgY29sb3I6IHZhcigtLWJsYWNrLCBibGFjayk7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi53aWRnZXQgPiBsaSB7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG4ud2lkZ2V0ID4gbGk6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG4ud2lkZ2V0ID4gbGkgYSB7XFxuICBjb2xvcjogdmFyKC0td2hpdGUsIHdoaXRlKTtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZS1pbjtcXG59XFxuLndpZGdldCA+IGxpIGE6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLS0tbGlnaHQsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KSk7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xcbiAgLndpZGdldC1jYWxsIHtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICB9XFxufVxcbi53aWRnZXQtY2FsbCAucGhvbmUge1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBsaW5lLWhlaWdodDogMjJweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjAxNWVtO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlLCB3aGl0ZSk7XFxufVxcblxcbi5lYXJ0aCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDE1MHB4O1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAyMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcXG4gIC5lYXJ0aCB7XFxuICAgIHdpZHRoOiAxMjAlO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5lYXJ0aCB7XFxuICAgIHJpZ2h0OiA1JTtcXG4gICAgbGVmdDogYXV0bztcXG4gICAgd2lkdGg6IDcwJTtcXG4gIH1cXG59XFxuXFxuLnJvY2tldCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICByaWdodDogMjAlO1xcbiAgd2lkdGg6IDM1JTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLnNvY2lhbCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcXG4gIC5zb2NpYWwge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgfVxcbn1cXG4uc29jaWFsID4gbmF2IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAyMHB4O1xcbn1cXG4uc29jaWFsID4gbmF2IGEge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xcbn1cXG4uc29jaWFsID4gbmF2IGEgc3ZnIHtcXG4gIGNvbG9yOiAjREZEQURDO1xcbiAgb3BhY2l0eTogMC41O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjtcXG59XFxuLnNvY2lhbCA+IG5hdiBhIHN2Zzpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0td2hpdGUsIHdoaXRlKTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcbi5zb2NpYWwgPiBuYXYgYTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XFxufVxcblxcbiosIDo6YWZ0ZXIsIDo6YmVmb3JlIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZDogIzAyMDQxMjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbmEge1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbnVsIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5maWd1cmUge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5pbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQsXFxuaW5wdXRbdHlwZT1jaGVja2JveF06bm90KDpjaGVja2VkKSxcXG5pbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkLFxcbmlucHV0W3R5cGU9cmFkaW9dOm5vdCg6Y2hlY2tlZCkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogLTk5OTlweDtcXG59XFxuXFxuaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIGxhYmVsLFxcbmlucHV0W3R5cGU9Y2hlY2tib3hdOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbCxcXG5pbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkICsgbGFiZWwsXFxuaW5wdXRbdHlwZT1yYWRpb106bm90KDpjaGVja2VkKSArIGxhYmVsIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmctbGVmdDogMzZweDtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5pbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkICsgbGFiZWw6YmVmb3JlLFxcbmlucHV0W3R5cGU9Y2hlY2tib3hdOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbDpiZWZvcmUsXFxuaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCArIGxhYmVsOmJlZm9yZSxcXG5pbnB1dFt0eXBlPXJhZGlvXTpub3QoOmNoZWNrZWQpICsgbGFiZWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMHB4O1xcbiAgdG9wOiAwcHg7XFxuICB3aWR0aDogMThweDtcXG4gIGhlaWdodDogMThweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG59XFxuXFxuaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIGxhYmVsOmJlZm9yZSxcXG5pbnB1dFt0eXBlPWNoZWNrYm94XTpub3QoOmNoZWNrZWQpICsgbGFiZWw6YmVmb3JlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG59XFxuXFxuaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCArIGxhYmVsOmJlZm9yZSxcXG5pbnB1dFt0eXBlPXJhZGlvXTpub3QoOmNoZWNrZWQpICsgbGFiZWw6YmVmb3JlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxufVxcblxcbmlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgKyBsYWJlbDphZnRlcixcXG5pbnB1dFt0eXBlPWNoZWNrYm94XTpub3QoOmNoZWNrZWQpICsgbGFiZWw6YWZ0ZXIsXFxuaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCArIGxhYmVsOmFmdGVyLFxcbmlucHV0W3R5cGU9cmFkaW9dOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbDphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xcbn1cXG5cXG5pbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkICsgbGFiZWw6YWZ0ZXIsXFxuaW5wdXRbdHlwZT1jaGVja2JveF06bm90KDpjaGVja2VkKSArIGxhYmVsOmFmdGVyIHtcXG4gIGxlZnQ6IDRweDtcXG4gIHRvcDogNXB4O1xcbiAgd2lkdGg6IDEwcHg7XFxuICBoZWlnaHQ6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDFweDtcXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2ZmZmNmYzk5O1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZmZjZmM5OTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxufVxcblxcbmlucHV0W3R5cGU9cmFkaW9dOmNoZWNrZWQgKyBsYWJlbDphZnRlcixcXG5pbnB1dFt0eXBlPXJhZGlvXTpub3QoOmNoZWNrZWQpICsgbGFiZWw6YWZ0ZXIge1xcbiAgbGVmdDogNXB4O1xcbiAgdG9wOiA1cHg7XFxuICB3aWR0aDogMTBweDtcXG4gIGhlaWdodDogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTE0NWEzO1xcbn1cXG5cXG5pbnB1dFt0eXBlPWNoZWNrYm94XTpub3QoOmNoZWNrZWQpICsgbGFiZWw6YWZ0ZXIsXFxuaW5wdXRbdHlwZT1yYWRpb106bm90KDpjaGVja2VkKSArIGxhYmVsOmFmdGVyIHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbmlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgKyBsYWJlbDphZnRlcixcXG5pbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkICsgbGFiZWw6YWZ0ZXIge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmJyYW5kIGltZyB7XFxuICB3aWR0aDogYXV0bztcXG4gIGhlaWdodDogMzBweDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzI3LjM0ZGVnLCByZ2JhKDIsIDQsIDE4LCAwLjk3KSAzOS40MSUsIHJnYmEoMiwgNCwgMTgsIDApIDc1LjMyJSk7XFxufVxcblxcbi5oZWFkaW5nIC50aXRsZSB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2FucyBDb25kZW5zZWRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDM2cHg7XFxuICBsaW5lLWhlaWdodDogNDNweDtcXG4gIGNvbG9yOiAjRkZGRkZGO1xcbn1cXG4uaGVhZGluZyAuZGVzY3JpcHRpb24ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xcbiAgbWFyZ2luLXRvcDogMjVweDtcXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xcbiAgY29sb3I6ICNGRkZGRkY7XFxufVxcbi5oZWFkaW5nIC5kZXNjcmlwdGlvbjo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgYm9yZGVyOiAzcHggc29saWQgI2U5YWEwOTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzI3LjM0ZGVnLCByZ2JhKDIsIDQsIDE4LCAwLjk3KSAzOS40MSUsIHJnYmEoMiwgNCwgMTgsIDApIDc1LjMyJSk7XFxufVxcbi5oZWFkZXIgLmNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5uYXZiYXIge1xcbiAgaGVpZ2h0OiAxMjVweDtcXG59XFxuLm5hdmJhciAuY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4ubmF2YmFyIC5jYWxsIHtcXG4gIHdpZHRoOiA0NnB4O1xcbiAgaGVpZ2h0OiA0NnB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tLS13aGl0ZSwgd2hpdGUpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcbi5uYXZiYXIgLmNhbGw6aG92ZXIge1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZ3JlZW4sIGdyZWVuKTtcXG59XFxuLm5hdmJhciAuY2FsbDpob3ZlciBzdmcge1xcbiAgd2lkdGg6IDE1cHg7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICBjb2xvcjogdmFyKC0tZ3JlZW4sIGdyZWVuKTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xcbiAgLm5hdmJhciAuY2FsbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICB9XFxufVxcbi5uYXZiYXIgLmNhbGwgc3ZnIHtcXG4gIGNvbG9yOiAjRkVGRUZFO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuLm5hdmJhciAudG9nZ2xlIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XFxuICBwYWRkaW5nOiAwO1xcbiAgd2lkdGg6IDMycHg7XFxuICBoZWlnaHQ6IDMycHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XFxuICAubmF2YmFyIC50b2dnbGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG4ubmF2YmFyIC50b2dnbGUgc3ZnIHtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgY29sb3I6IHZhcigtLS0td2hpdGUsIHdoaXRlKTtcXG59XFxuXFxuLm5hdiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XFxuICAubmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG59XFxuLm5hdi1pdGVtIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbi1yaWdodDogNjBweDtcXG59XFxuLm5hdi1pdGVtOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcbn1cXG4ubmF2LWl0ZW06OmFmdGVyIHtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcbi5uYXYtaXRlbTpob3Zlcjo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IC0xMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSk7XFxufVxcbi5uYXYtbGluayB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBsaW5lLWhlaWdodDogMjVweDtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuLm5hdi1saW5rOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSwgd2hpdGUpO1xcbn1cXG5cXG4ucHJvbW8ge1xcbiAgcGFkZGluZzogNzBweCAwO1xcbn1cXG5cXG4uaGVybyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBncmlkLXJvdy1nYXA6IDQwcHg7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xcbiAgLmhlcm8ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICB9XFxufVxcbi5oZXJvIC5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXJvdy1nYXA6IDQwcHg7XFxufVxcbi5oZXJvIC5jb250ZW50IC50aXRsZSB7XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2FucyBDb25kZW5zZWRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDUwcHg7XFxuICBsaW5lLWhlaWdodDogMTMzLjE4JTtcXG4gIGNvbG9yOiAjRkNGM0YzO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4uaGVybyAuY29udGVudCAudGl0bGUgPiBzcGFuIHtcXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjRTlBQTA5O1xcbn1cXG4uaGVybyAuY29udGVudCAuZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XFxuICBjb2xvcjogI0ZGRkJGQjtcXG4gIG1hcmdpbjogMDtcXG59XFxuLmhlcm8gLmNvbnRlbnQgPiB1bCB7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBsaXN0LXN0eWxlLXR5cGU6IFxcXCLwn5GNXFxcIjtcXG59XFxuLmhlcm8gLmNvbnRlbnQgPiB1bCA+IGxpIHtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xcbiAgY29sb3I6ICNGRkY5Rjk7XFxufVxcbi5oZXJvIC5jb250ZW50ID4gdWwgPiBsaTpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcbi5hZHZhbnRhZ2VzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDcwcHggMDtcXG59XFxuXFxuLmZlYXR1cmVzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXJvdy1nYXA6IDI1cHg7XFxuICBtYXJnaW4tdG9wOiA2NXB4O1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcXG4gIC5mZWF0dXJlcyB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAyNXB4O1xcbiAgICBncmlkLXJvdy1nYXA6IDI1cHg7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xcbiAgLmZlYXR1cmVzIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAyNXB4O1xcbiAgICBncmlkLXJvdy1nYXA6IDI1cHg7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcXG4gIC5mZWF0dXJlcyB7XFxuICAgIGdyaWQtcm93LWdhcDogNTBweDtcXG4gIH1cXG59XFxuXFxuLmZlYXR1cmUge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLmZlYXR1cmUgaW1nIHtcXG4gIHdpZHRoOiA3MHB4O1xcbiAgaGVpZ2h0OiA3MHB4O1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcXG4gIC5mZWF0dXJlIGltZyB7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcXG4gIC5mZWF0dXJlIGltZyB7XFxuICAgIHdpZHRoOiA3MHB4O1xcbiAgICBoZWlnaHQ6IDcwcHg7XFxuICB9XFxufVxcbi5mZWF0dXJlLWJvZHkge1xcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcbn1cXG4uZmVhdHVyZS1ib2R5ID4gaDMge1xcbiAgbWFyZ2luOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuLmZlYXR1cmUtYm9keSA+IHAge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uc2xpZGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5zbGlkZXIgLml0ZW1zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBlYXNlO1xcbn1cXG4uc2xpZGVyIC5pdGVtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwYWRkaW5nOiAzMHB4IDcwcHg7XFxuICBwYWRkaW5nLXRvcDogNTBweDtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XFxuICAuc2xpZGVyIC5pdGVtIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgfVxcbn1cXG4uc2xpZGVyIC5pdGVtIC5kZXNjcmlwdGlvbiB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5zbGlkZXIgLml0ZW0gLmRlc2NyaXB0aW9uID4gcCB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBsaW5lLWhlaWdodDogMS41ZW07XFxuICBjb2xvcjogI2ZmZmZmZmQ5O1xcbn1cXG4uc2xpZGVyIC5pdGVtIC5kZXNjcmlwdGlvbiA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uc2xpZGVyIC5pdGVtIC5pbWFnZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZDogcmdiYSgxOTYsIDE5NiwgMTk2LCAwLjAyKTtcXG59XFxuLnNsaWRlciAuaXRlbSAuaW1hZ2UgPiBkaXYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtMzBweDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAtMzBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcbiAgZ3JpZC1yb3ctZ2FwOiAxMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMTk2LCAxOTYsIDE5NiwgMC4wMSk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcbi5zbGlkZXIgLnByZXYsXFxuLnNsaWRlciAubmV4dCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGNvbG9yOiAjOGY4ZjhmO1xcbiAgYmFja2dyb3VuZDogcmdiYSgyMCwgMjgsIDQwLCAwLjMpO1xcbiAgdHJhbnNpdGlvbjogY29sb3IsIGJhY2tncm91bmQgMC4zcyBlYXNlO1xcbn1cXG4uc2xpZGVyIC5wcmV2OmhvdmVyLFxcbi5zbGlkZXIgLm5leHQ6aG92ZXIge1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kOiAjMTQxYzI4O1xcbn1cXG4uc2xpZGVyIC5wcmV2IHtcXG4gIGxlZnQ6IDA7XFxufVxcbi5zbGlkZXIgLm5leHQge1xcbiAgcmlnaHQ6IDA7XFxufVxcblxcbi5yZXZpZXdzIHtcXG4gIHBhZGRpbmc6IDcwcHggMDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b20gLThweCByaWdodDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIwNDEyO1xcbn1cXG5cXG4uZmVlZGJhY2sge1xcbiAgcGFkZGluZzogNzBweCAwO1xcbiAgYmFja2dyb3VuZDogIzA4MTAxQjtcXG59XFxuLmZlZWRiYWNrIGZvcm0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtcm93LWdhcDogMjVweDtcXG4gIG1hcmdpbi10b3A6IDY1cHg7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLmZlZWRiYWNrIGZvcm0ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtY29sdW1uLWdhcDogMjVweDtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XFxuICAuZmVlZGJhY2sgZm9ybSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgIGdyaWQtY29sdW1uLWdhcDogNTBweDtcXG4gIH1cXG59XFxuLmZlZWRiYWNrIGZvcm0gPiBkaXYge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uZmVlZGJhY2sgZm9ybSA+IGRpdjpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1yaWdodDogMDtcXG59XFxuLmZlZWRiYWNrIGZvcm0gPiBkaXYgPiBpbnB1dCB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHBhZGRpbmctbGVmdDogNjBweDtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XFxufVxcbi5mZWVkYmFjayBmb3JtID4gZGl2ID4gc3ZnIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBtYXJnaW46IDIwcHg7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xcbn1cXG4uZmVlZGJhY2sgZm9ybSA+IGRpdiA+IGJ1dHRvblt0eXBlPXN1Ym1pdF0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDI3cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wMTVlbTtcXG59XFxuXFxuLmZvcm0tY2hlY2sge1xcbiAgbWFyZ2luLXRvcDogMjVweDtcXG59XFxuLmZvcm0tY2hlY2staW5wdXQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmNmYzk5O1xcbn1cXG4uZm9ybS1jaGVjay1sYWJlbCB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBsaW5lLWhlaWdodDogMTZweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjAxNWVtO1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTIsIDI1MiwgMC42KTtcXG59XFxuXFxuLmNvbnRhY3RzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDUwcHggMDtcXG59XFxuLmNvbnRhY3RzICNtYXAge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbn1cXG4uY29udGFjdHMgLmluZm8ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWF4LXdpZHRoOiA0MzNweDtcXG4gIGJhY2tncm91bmQ6ICMwODEwMUI7XFxuICBib3gtc2hhZG93OiAwcHggMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHBhZGRpbmc6IDUwcHg7XFxufVxcbi5jb250YWN0cyAuaW5mbyA+IHVsIHtcXG4gIGxpc3Qtc3R5bGU6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59XFxuLmNvbnRhY3RzIC5pbmZvID4gdWwgPiBsaSB7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wMTVlbTtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XFxufVxcbi5jb250YWN0cyAuaW5mbyA+IHVsID4gbGk6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG4uZ2FsbGVyeSB7XFxuICBwYWRkaW5nOiA3MHB4IDA7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIHJpZ2h0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTA1MGY7XFxufVxcblxcbi50YWJzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDY1cHg7XFxufVxcbi50YWJzID4gZGl2IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMTgxLCAxODMsIDE4NiwgMC4xKTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XFxuICAudGFicyA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgYmFja2dyb3VuZDogIzA4MTAxYjtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAudGFicyA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgfVxcbn1cXG4udGFicyA+IGRpdiA+IGEge1xcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC50YWJzID4gZGl2ID4gYSB7XFxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcXG4gIH1cXG59XFxuLnRhYnMtbGluayB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3B4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDNweDtcXG4gIGNvbG9yOiAjNkI3MDc2O1xcbiAgYmFja2dyb3VuZDogIzA4MTAxYjtcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcztcXG59XFxuLnRhYnMtbGluazpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1yaWdodDogMDtcXG59XFxuLnRhYnMtbGluazpob3ZlciwgLnRhYnMtbGluay5hY3RpdmUge1xcbiAgY29sb3I6ICNmZmY7XFxuICBtYXJnaW4tYm90dG9tOiAtMnB4O1xcbn1cXG5cXG4udGFiLWNvbnRlbnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZDogIzA4MTAxYjtcXG4gIGJveC1zaGFkb3c6IDBweCAyMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHBhZGRpbmc6IDUwcHggNjBweDtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAudGFiLWNvbnRlbnQge1xcbiAgICBwYWRkaW5nOiA1MHB4IDgwcHg7XFxuICB9XFxufVxcbi50YWItY29udGVudCAuc2xpZGUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJvbmVcXFwiIFxcXCJ0d29cXFwiIFxcXCJ0aHJlZVxcXCIgXFxcImZvdXJcXFwiO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcXG4gIC50YWItY29udGVudCAuc2xpZGUge1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwib25lIG9uZVxcXCIgXFxcInR3byB0d29cXFwiIFxcXCJ0aHJlZSBmb3VyXFxcIjtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAudGFiLWNvbnRlbnQgLnNsaWRlIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcIm9uZSBvbmUgdHdvIHR3b1xcXCIgXFxcIm9uZSBvbmUgdGhyZWUgZm91clxcXCI7XFxuICB9XFxufVxcbi50YWItY29udGVudCAuc2xpZGUgPiBhcnRpY2xlIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcbi50YWItY29udGVudCAuc2xpZGUgPiBhcnRpY2xlIC5pbmZvIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogLTEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDBweDtcXG4gIHBhZGRpbmc6IDIwcHggNDBweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42NSk7XFxuICB0cmFuc2l0aW9uOiBib3R0b20gMC41cztcXG59XFxuLnRhYi1jb250ZW50IC5zbGlkZSA+IGFydGljbGU6aG92ZXIgLmluZm8ge1xcbiAgYm90dG9tOiAwO1xcbn1cXG4udGFiLWNvbnRlbnQgLnNsaWRlID4gYXJ0aWNsZTpudGgtY2hpbGQoMSkge1xcbiAgZ3JpZC1hcmVhOiBvbmU7XFxufVxcbi50YWItY29udGVudCAuc2xpZGUgPiBhcnRpY2xlOm50aC1jaGlsZCgyKSB7XFxuICBncmlkLWFyZWE6IHR3bztcXG59XFxuLnRhYi1jb250ZW50IC5zbGlkZSA+IGFydGljbGU6bnRoLWNoaWxkKDMpIHtcXG4gIGdyaWQtYXJlYTogdGhyZWU7XFxufVxcbi50YWItY29udGVudCAuc2xpZGUgPiBhcnRpY2xlOm50aC1jaGlsZCg0KSB7XFxuICBncmlkLWFyZWE6IGZvdXI7XFxufVxcbi50YWItY29udGVudCAucHJldixcXG4udGFiLWNvbnRlbnQgLm5leHQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICBjb2xvcjogIzhGOEY4RjtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcbi50YWItY29udGVudCAucHJldjpob3ZlcixcXG4udGFiLWNvbnRlbnQgLm5leHQ6aG92ZXIge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi50YWItY29udGVudCAucHJldiB7XFxuICBsZWZ0OiAyMHB4O1xcbn1cXG4udGFiLWNvbnRlbnQgLm5leHQge1xcbiAgcmlnaHQ6IDIwcHg7XFxufVxcblxcbi5mb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4MTAxQjtcXG59XFxuLmZvb3Rlci10b3Age1xcbiAgcGFkZGluZy10b3A6IDVyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXJvdy1nYXA6IDJyZW07XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xcbiAgLmZvb3Rlci10b3Age1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLmZvb3Rlci10b3Age1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnIgMWZyO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcXG4gIC5mb290ZXItdG9wIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNSUgMTUlIDE1JSAxZnI7XFxuICB9XFxufVxcbi5mb290ZXItYm90dG9tIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXJvdy1nYXA6IDJyZW07XFxuICBwYWRkaW5nOiAzMHB4IDA7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcXG4gIC5mb290ZXItYm90dG9tIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgfVxcbn1cXG4uZm9vdGVyLWJvdHRvbSA+IG5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uZm9vdGVyLWJvdHRvbSA+IG5hdiA+IGEge1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gIG1hcmdpbi1yaWdodDogNHJlbTtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZS1pbjtcXG59XFxuLmZvb3Rlci1ib3R0b20gPiBuYXYgPiBhOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcbn1cXG4uZm9vdGVyLWJvdHRvbSA+IG5hdiA+IGE6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLXdoaXRlLCB3aGl0ZSk7XFxufVxcbi5mb290ZXItYm90dG9tID4gYSB7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlLWluO1xcbn1cXG4uZm9vdGVyLWJvdHRvbSA+IGE6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLXdoaXRlLCB3aGl0ZSk7XFxufVxcbi5mb290ZXIgLmNvbHVtbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLmZvb3RlciAuY29sdW1ucyAuY29sdW1uIHtcXG4gIG1hcmdpbi1yaWdodDogMjZweDtcXG59XFxuLmZvb3RlciAuY29sdW1ucyAuY29sdW1uOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcbn1cXG4uZm9vdGVyIC5jb2x1bW5zIC5jb2x1bW4gaW1nOmhvdmVyIHtcXG4gIGFuaW1hdGlvbjogc2hha2UgMC41cztcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXB4LCAxcHgpIHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIDEwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIC0ycHgpIHJvdGF0ZSgtMWRlZyk7XFxuICB9XFxuICAyMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtM3B4LCAwcHgpIHJvdGF0ZSgxZGVnKTtcXG4gIH1cXG4gIDMwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDNweCwgMnB4KSByb3RhdGUoMGRlZyk7XFxuICB9XFxuICA0MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIC0xcHgpIHJvdGF0ZSgxZGVnKTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIDJweCkgcm90YXRlKC0xZGVnKTtcXG4gIH1cXG4gIDYwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zcHgsIDFweCkgcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgNzAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoM3B4LCAxcHgpIHJvdGF0ZSgtMWRlZyk7XFxuICB9XFxuICA4MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMXB4LCAtMXB4KSByb3RhdGUoMWRlZyk7XFxuICB9XFxuICA5MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIDJweCkgcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDFweCwgLTJweCkgcm90YXRlKC0xZGVnKTtcXG4gIH1cXG59XFxuI21hcCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSB1cmwgJiYgdXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybDtcblxuICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2ltZy9lbGxpcHNlLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvaW1nL2dhbGxlcnkucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9pbWcvcmV2aWV3cy5wbmdcIjsiLCJpbXBvcnQgJy4uL3Njc3Mvc3R5bGUuc2Nzcyc7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwic291cmNlUm9vdCI6IiJ9