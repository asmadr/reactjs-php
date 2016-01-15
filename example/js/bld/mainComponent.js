'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import React from 'react';
//import ChildComponent from './childComponent';

var MainComponent = function (_React$Component) {
	_inherits(MainComponent, _React$Component);

	function MainComponent(props) {
		_classCallCheck(this, MainComponent);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MainComponent).call(this, props));

		_this._update = function (message) {
			//this.state.message = message;
			_this.setState({ message: message });
		};

		_this.state = {
			message: _this.props.message
		};
		return _this;
	}

	_createClass(MainComponent, [{
		key: 'render',

		/*ChildComponent message={this.state.message} onUpdate={this._update}/*/
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement('hr', null),
				React.createElement(
					'h3',
					null,
					this.props.message
				)
			);
		}
	}]);

	return MainComponent;
}(React.Component);

MainComponent.defaultProps = {
	message: 'Hello, world!'
};
exports.default = MainComponent;