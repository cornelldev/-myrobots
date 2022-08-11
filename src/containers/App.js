import React, { Component } from "react";
import CardList from '../components/cardlist'
import SearchBox from '../components/searchbox'
import Scroll from '../components/scroll'
import './App.css';


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users}));
    }

    searchEvent = (e) => {
        this.setState({ searchfield: e.target.value })
        
    }

    render() {
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !robots.length ? 
            <h1>Loading...</h1> :
             (
                <div className="tc">
                    <h1 className="f1">Robot Army</h1>
                    <SearchBox searchChange = {this.searchEvent}/>
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            );
    }
}

export default App;