'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
//import React from 'react';

var ChildComponent = React.createClass({
  displayName: 'ChildComponent',
  componentDidMount: function componentDidMount() {
    var _this = this;

    setTimeout(function () {
      return _this.props.onUpdate('Message from child');
    }, 2000);
  },
  render: function render() {
    return React.createElement(
      'h2',
      null,
      this.props.message
    );
  }
});

exports.default = ChildComponent;