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
				<h2>{this.props.h2}</h2>
				<div id="app"></div>
				<script src="/example/js/bundle/dist.js"></script>
			</body>
			</html>
		);
	}

}
