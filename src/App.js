import logo from './logo.svg';
import './App.css';
import {Component} from 'react'
import { CardList } from './components/card-list/card-list.component';
import {SearchBox} from './components/searchbox/search-Box.component';

class App extends Component{
constructor(){
  super();
  this.state={
   monsters:[],
   searchField:''
  };

}
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users=>this.setState({monsters:users  }));
}
  render(){
    const { monsters, searchField }=this.state;
    const filteredmonsters=monsters.filter(monster=>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="search" handleChange={e=>this.setState({searchField:e.target.value})}/>
        <CardList monsters={filteredmonsters}>
        </CardList>
          <p>
            {this.state.String}        
          </p>
          <button onClick={()=>this.setState({ String:'hello tanvi'})}>click me</button>
          
      </div>
    );
}} 


export default App;
