import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListItems from './ListItems.jsx'
/*import Home from './cmp/Home.js'
import About from './cmp/About.js'
import Listin from './cmp/Listing.js'
import Auth from './cmp/Auth.js'
*/


 


import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash)

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items:[],
      currentItem:{
        text:'',
        key:''
      }
    }
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text !==""){
      const items = [...this.state.items, newItem];
      
    this.setState({
      items: items,
      currentItem:{
        text:'',
        key:''
      }
       
    })
    }
    else{
      alert("Empty List Can't be Accepted");
    }
  }
  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()
      }
    })
  }
  deleteItem(key){
    const filteredItems= this.state.items.filter(item =>
      item.key!==key);
    this.setState({
      items: filteredItems
    })

  }
  setUpdate(text,key){
    console.log("items:"+this.state.items);
    const items = this.state.items;
    items.map(item=>{      
      if(item.key===key){
        console.log(item.key +"    "+key)
        item.text= text;
      }
    })
    this.setState({
      items: items
    })
    
   
  }
 render(){
  return (
    <div className="App">
      <header>
      <div id="ravi"> 
      <h1>ToDo List</h1>
      </div>
        <form id="to-do-form" onSubmit={this.addItem}>
          <input type="text" placeholder="Add ToDo List" value= {this.state.currentItem.text} onChange={this.handleInput}></input>
          <button type="submit">+</button>
        </form>
        <p>{this.state.items.text}</p>
        
          <ListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}/>
        
      </header>
    </div>
  );
 }
}


export default App;