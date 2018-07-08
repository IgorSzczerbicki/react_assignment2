import React, {Component} from 'react';
import './App.css';
import Validation from './Validation/Validation'
import Char from './Char/Char'

class App extends Component {

	state = {
		text: ""
	};

	textHandler = (e) => {
		this.setState({text: e.target.value})
	};

	deleteCharHandler = (index) => {
		let textChars = this.state.text.split('');
		textChars.splice(index, 1);
		const text = textChars.join('');
		this.setState({text})
	};

	render() {
		const chars = (
			<div>
				{this.state.text.split('').map((char, index) => {
					return <Char
						character = {char}
						key = {index}
						delete = {() => this.deleteCharHandler(index)}/>
				})}
			</div>
		);

		return (
			<div className="App">
				<input
					type="text"
					onChange={this.textHandler}
					value = {this.state.text}/>
				<p>{this.state.text}</p>
				<Validation length={this.state.text.length}/>
				{chars}
			</div>
		);
	}
}

export default App;
