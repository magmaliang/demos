webpackHotUpdate(0,[
/* 0 */,
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _React = __webpack_require__(2);

	var _React2 = _interopRequireDefault(_React);

	var _ICmp = __webpack_require__(33);

	var _ICmp2 = _interopRequireDefault(_ICmp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CmpA = function (_Component) {
		_inherits(CmpA, _Component);

		function CmpA(props) {
			_classCallCheck(this, CmpA);

			return _possibleConstructorReturn(this, (CmpA.__proto__ || Object.getPrototypeOf(CmpA)).call(this, props));
		}

		_createClass(CmpA, [{
			key: "render",
			value: function render() {
				return _React2.default.createElement(
					"div",
					null,
					" CmpA "
				);
			}
		}]);

		return CmpA;
	}(_React.Component);

	var CmpB = function (_Component2) {
		_inherits(CmpB, _Component2);

		function CmpB(props) {
			_classCallCheck(this, CmpB);

			return _possibleConstructorReturn(this, (CmpB.__proto__ || Object.getPrototypeOf(CmpB)).call(this, props));
		}

		_createClass(CmpB, [{
			key: "render",
			value: function render() {
				return _React2.default.createElement(
					"div",
					null,
					" CmpB "
				);
			}
		}]);

		return CmpB;
	}(_React.Component);

	var ICmpA = new _ICmp2.default(CmpA);
	var ICmpB = new _ICmp2.default(CmpB);

	module.exports = {
		ICmpA: ICmpA,
		ICmpB: ICmpB
	};

/***/ }
])