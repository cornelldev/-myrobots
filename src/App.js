import React, { Component } from "react";
import CardList from './cardlist'
import {robots} from './robots'
import SearchBox from './searchbox'
import './App.css';


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    searchEvent = (e) => {
        this.setState({ searchfield: e.target.value })
        
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return (
            <div className="tc">
                <h1 className="f1">Robot Army</h1>
                <SearchBox searchChange = {this.searchEvent}/>
                <CardList robots={filteredRobots} />
            </div>
        );

    }
}

export default App;