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
				<meta charset="UTF-8" />
				<title>Document</title>
			</head>
			<body>
				<h1>React JS Page</h1>
				<div id="app">Loading...</div>
				<script src="/example/js/bundle/dist.js"></script>
			</body>
			</html>
		);
	}

}
