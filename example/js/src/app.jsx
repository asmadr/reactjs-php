//import React from 'react';
import MainComponent from './mainComponent';

/**
 * Main React test application
 */
class App extends React.Component {

	static defaultProps = {};

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<html lang="en">
			<head>
				<meta charSet="UTF-8" />
				<title>{this.props.title}</title>
			</head>
			<body>
				<h1>React JS Page</h1>
				<div id="app"><h2>{this.props.h2}</h2></div>
				<MainComponent />
				<script src="/example/js/bundle/dist.js"></script>
			</body>
			</html>
		);
	}

}
