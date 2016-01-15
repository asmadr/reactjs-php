"use strict";

const http = require('http');
const fs = require('fs');
const path = require('path');

const React = require('react');
const ReactDOMServer = require('react-dom/server');

var MainComponent = require('./bld/mainComponent').default;


//console.log(MainComponent);
var App = React.createFactory(MainComponent);
var appHtml = ReactDOMServer.renderToString(App({ title: 'React' }));

//console.log(appHtml);

const __rootdir = path.resolve(__dirname, '../');

http.createServer((req, res) => {

	console.log(`Get GTTP request ${req.url}`);

	let status = 404;
	let output = '<h1>404</h1>';
	let file = null;
	let index = false;

	switch (true) {
		case ('/' == req.url):
			status = 200;
			file = path.resolve(`${__rootdir}/html/`, 'index.html');
			index = true;
			break;

		case (/\.html?$/.test(req.url)):
			status = 200;
			file = path.resolve(`${__rootdir}/html`, req.url);
			break;

		case (/\.js$/.test(req.url)):
			status = 200;
			file = `${__rootdir}/${req.url}`;
			console.log('---> ' + file);
			break;
		default: // 404
	}


	console.log(`Get file ${file}`);
	if (file) {
		try {
			output = fs.readFileSync(file, 'utf8');

			if (index) {
				output = output.replace(/(<div.*id="app".*?>).*?(<\/div>)/, `$1${appHtml}$2`)
				//console.log(output);
			}
		} catch (c) {
			console.log('File not found!');
			status = 404;
		}
		//console.log(output);
	}

	console.log(status);
	res.writeHead(status);

	//res.write(output);
	res.end(output);

	//var ComponentMain = React.createFactory(MainComponent);
	//var ssr1 = ReactDOMServer.renderToString(<MainComponent title='React'/>);
	//console.log(ssr1);

	//var ssr2 = ReactDOMServer.renderToStaticMarkup(<MainComponent title='React'/>);
	//console.log(ssr2);

}).listen(8000);