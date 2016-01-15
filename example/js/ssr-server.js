"use strict";

const React = require('react');
const ReactDOMServer = require('react-dom/server');

var MainComponent = require('./bld/mainComponent').default;

var appHtml = ReactDOMServer.renderToString(
	React.createFactory(MainComponent)({ title: 'React' })
);

print( appHtml );