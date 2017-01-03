webpackHotUpdate(0,{

/***/ 33:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _React = __webpack_require__(2);

	var _React2 = _interopRequireDefault(_React);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Cmpa_1 = function (_Component) {
	    _inherits(Cmpa_1, _Component);

	    function Cmpa_1(props) {
	        _classCallCheck(this, Cmpa_1);

	        var _this = _possibleConstructorReturn(this, (Cmpa_1.__proto__ || Object.getPrototypeOf(Cmpa_1)).call(this, props));

	        console.log(props);
	        return _this;
	    }

	    _createClass(Cmpa_1, [{
	        key: 'render',
	        value: function render() {
	            return _React2.default.createElement(
	                'div',
	                null,
	                'Cmpa_1'
	            );
	        }
	    }]);

	    return Cmpa_1;
	}(_React.Component);

	var ICmp = function ICmp(Wrapper) {
	    return function (_Component2) {
	        _inherits(WrapperComponent, _Component2);

	        function WrapperComponent() {
	            _classCallCheck(this, WrapperComponent);

	            return _possibleConstructorReturn(this, (WrapperComponent.__proto__ || Object.getPrototypeOf(WrapperComponent)).apply(this, arguments));
	        }

	        _createClass(WrapperComponent, [{
	            key: 'componentDidMount',
	            value: function componentDidMount() {
	                console.log('HOC did mount');
	            }
	        }, {
	            key: 'componentWillUnmount',
	            value: function componentWillUnmount() {
	                console.log('HOC will unmount');
	            }
	        }, {
	            key: 'render',
	            value: function render() {
	                if (props.extenston_name) {
	                    return _React2.default.createElement(Cmpa_1, this.props);
	                }
	                return _React2.default.createElement(Wrapper, this.props);
	            }
	        }]);

	        return WrapperComponent;
	    }(_React.Component);
	};

	exports.default = ICmp;

/***/ }

})