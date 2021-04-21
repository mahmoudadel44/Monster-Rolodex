import React, { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import {SearchBox} from './components/search-box/search-box'
import "./App.css"
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
      searchField:""
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => this.setState({ monsters: data }));
  }
handleChange=e=>{
this.setState({searchField:e.target.value})
}
  render() {
    const {monsters,searchField} =this.state;
    const filteredMonsters=monsters.filter(monster=>
      monster.name.includes(searchField)
    );
 
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox handleChange={this.handleChange} placeholder="search monsters"/>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
