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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Memo2 = __webpack_require__(1);

var _Memo3 = _interopRequireDefault(_Memo2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DRAG_OVER_CLASS = "dragover";

var Dragon = function (_Memo) {
	_inherits(Dragon, _Memo);

	function Dragon(_ref) {
		var _ref$target = _ref.target,
		    target = _ref$target === undefined ? null : _ref$target;

		_classCallCheck(this, Dragon);

		var _this = _possibleConstructorReturn(this, (Dragon.__proto__ || Object.getPrototypeOf(Dragon)).call(this));

		_this.target = target;
		_this.files = [];
		_this.bind();
		return _this;
	}

	_createClass(Dragon, [{
		key: "bind",
		value: function bind() {
			var _this2 = this;

			this.handleDropProxy = function (e) {
				_this2.handleDrop(e);
			};
			this.handleDragLeaveProxy = function (e) {
				_this2.handleDragLeave(e);
			};
			this.handleDragOverProxy = function (e) {
				_this2.handleDragOver(e);
			};
			this.target.addEventListener("dragover", this.handleDragOverProxy, false);
			this.target.addEventListener("dragleave", this.handleDragLeaveProxy, false);
			this.target.addEventListener("drop", this.handleDropProxy, false);
		}
	}, {
		key: "unbind",
		value: function unbind() {
			this.target.removeEventListener("dragover", this.handleDragOverProxy);
			this.target.removeEventListener("dragleave", this.handleDragLeaveProxy);
			this.target.removeEventListener("drop", this.handleDropProxy);
		}
	}, {
		key: "handleDrop",
		value: function handleDrop(e) {
			e.preventDefault();
			this.trigger("drop", e);
			if (e.dataTransfer.items) {
				this.files = Dragon.getItemList(e.dataTransfer.items);
			} else {
				this.files = e.dataTransfer.files;
			}
			this.trigger("filesReceived", this.files);
		}
	}, {
		key: "handleDragOver",
		value: function handleDragOver(e) {
			e.preventDefault();
			this.trigger("dragover", e);
			this.target.classList.add(DRAG_OVER_CLASS);
		}
	}, {
		key: "handleDragLeave",
		value: function handleDragLeave(e) {
			this.trigger("dragleave", e);
			this.target.classList.remove(DRAG_OVER_CLASS);
		}
	}], [{
		key: "getItemList",
		value: function getItemList(items) {
			var files = [];
			for (var i = 0; i < items.length; i++) {
				if (items[i].kind == "file") {
					files.push(items[i].getAsFile());
				}
			}
			return files;
		}
	}, {
		key: "removeDataTransferItems",
		value: function removeDataTransferItems(items) {
			for (var i = 0; i < items.length; i++) {
				items.remove(i);
			}
		}
	}]);

	return Dragon;
}(_Memo3.default);

exports.default = Dragon;

window.Dragon = Dragon;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Memo = function () {
	function Memo() {
		_classCallCheck(this, Memo);

		this.listeners = {};
	}

	_createClass(Memo, [{
		key: "on",
		value: function on(event, handler) {
			if (this.listeners[event] === undefined) {
				this.listeners[event] = [handler];
			} else {
				this.listeners[event].push(handler);
			}
			return handler;
		}
	}, {
		key: "off",
		value: function off(event) {
			var handler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

			if (this.listeners[event]) {
				if (handler == null) {
					for (var i = this.listeners[event].length - 1; i >= 0; i--) {
						if (this.listeners[event].length === 1) {
							delete this.listeners[event];
							return true;
						} else {
							this.listeners[event].splice(i, 1);
							return true;
						}
					}
				} else {
					for (var _i = 0; _i < this.listeners[event].length; _i++) {
						if (this.listeners[event][_i] == handler) {
							this.listeners[event].splice(_i, 1);
							if (this.listeners[event].length === 0) {
								delete this.listeners[event];
							}
							return true;
						}
					}
				}
			}
			return false;
		}
	}, {
		key: "trigger",
		value: function trigger(event, data) {
			if (this.listeners[event]) {
				for (var i = this.listeners[event].length - 1; i >= 0; i--) {
					if (this.listeners[event] !== undefined) {
						if (typeof this.listeners[event][i] === "function" && this.listeners[event][i]) {
							this.listeners[event][i](data);
						} else {
							throw "Event handler is not a function.";
						}
					}
				}
			}
		}
	}]);

	return Memo;
}();

exports.default = Memo;

/***/ })
/******/ ]);
//# sourceMappingURL=main.bundle.js.map