import React from 'react';
//import ChildComponent from './childComponent';

class MainComponent extends React.Component {

	static defaultProps = {
		message: 'Hello, world!'
	};

	constructor(props) {
		super(props);

		this.state = {
			message: this.props.message
		};
	}

	_update = (message) => {
		//this.state.message = message;
		this.setState({ message });
	};

	componentDidMount() {
		setTimeout(() => this.props.onUpdate('Message from timer!'), 2000);
	}

	/*ChildComponent message={this.state.message} onUpdate={this._update}/*/
	render() {
		return (
			<div>
				<hr/>
				<h3>{this.props.message}</h3>
			</div>
		);
	}

}


export default MainComponent;