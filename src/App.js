import React from "react";
import CardList from "./CardList";
import {robots} from "./robots";
import './App.css';

const App=() => {
    return (
    <div>
    <h1 className = "tc">RobotFriends</h1>
    <CardList robots={robots} />;
    </div>
    );
};
export default App;