import React, { Component } from "react";
import Cardlist from './cardlist'
import {robots} from './robots'
import SearchBox from './searchbox'


class App extends Component {
    render() {
        return (
            <>
                <div className="tc">
                    <h1>Robot Army</h1>
                    <SearchBox />
                    <Cardlist robots={robots} />
                </div>
            </>
        )
       

    }
}

export default App;