import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';

class App extends Component {
	constructor(){
		super()
		this.state = {
	robots: [],
	searchField: '',
		}
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({ robots: users}) )
	}
	onSearchChange = (event) =>{
		this.setState({searchField: event.target.value})
	}
	render(){
		const { robots, searchField } = this.state
		const filteredRobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		})
		return (!robots.length) ? <h2>Loading</h2> :
		<div className = 'tc'>
			<h2 className = 'f2'>RoboFriends</h2>
			< SearchBox searchChange ={ this.onSearchChange} />
			<Scroll>
			< CardList  robots = { filteredRobots } />
			</Scroll>
		</div>
	}
}
export default App;