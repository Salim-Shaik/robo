import React from "react";
import { Component } from "react";
import CardList from "./CardList"
import SearchBox from "./SearchBox"
import "./App.css"
import Scroll from "./Scroll"
import ErrorBoundry from "./ErrorBoundry";
class App extends Component  
{
    constructor(){
        super()
        this.state = {
            robots : [],
            searchfield: ''
        }


    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>{ return  response.json();})
        .then(users => { this.setState({robots: users})
    })
    }
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
       
    }

   render() { 
    const{robots,searchfield} = this.state;
    const filteredRobots = robots.filter
    (
        robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
if(this.state.robots.length === 0){
    return <h1>Loading</h1>
}
 else   {return(
    <div className = 'tc'>
        <h1>Robot Friends</h1>
        <SearchBox searchChange = {this.onSearchChange}/>
        
        <Scroll>
            <ErrorBoundry>
    <CardList robots = {filteredRobots}/>
    </ErrorBoundry>
    </Scroll>
    </div>
    );
    }}
}
export default App;