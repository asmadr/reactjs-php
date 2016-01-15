"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Main React test application
 */

var App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App(props) {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));

		_this.state = {};
		return _this;
	}

	_createClass(App, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"html",
				{ lang: "en" },
				React.createElement(
					"head",
					null,
					React.createElement("meta", { charSet: "UTF-8" }),
					React.createElement(
						"title",
						null,
						this.props.title
					)
				),
				React.createElement(
					"body",
					null,
					React.createElement(
						"h1",
						null,
						"React JS Page"
					),
					React.createElement(
						"h2",
						null,
						this.props.h2
					),
					React.createElement("div", { id: "app" }),
					React.createElement("script", { src: "/example/js/bundle/dist.js" })
				)
			);
		}
	}]);

	return App;
}(React.Component);

App.defaultProps = {};