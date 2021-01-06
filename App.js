 import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component{
    constructor(props)
    {
    super(props);
    
     this.state={
      item:[],currentItem:{
    text:'',
    key:''
    
      }
    }
    this.handleInput= this.handleInput.bind(this);
    this.addItem= this.addItem.bind(this);
    
    
    }
    handleInput(e){
    this.setState({
      currentItem:{
    text:e.target.value,
    key:Date.now()
        
      }
    })
    
    }
    addItem(e){
      
      e.preventDefault();
      const newItem = this.state.currentItem;
      console.log(newItem);
      if(newItem.text!==""){
      const newItems=[...this.state.item,newItem];
      this.setState({
      items:newItems,
      currentItem:{
      text:'',
      key:''
  }
})
      }
    
    }
    render(){
      return (
        <header>
        <div className="App" onSubmit={this.addItem}>
        <input className="input" type="text" placeholder="Enter text"
          value={this.state.currentItem.text}
          onChange={this.handleInput}/>
        <button className="to-do-form button" type="submit">Add</button>
        </div>
      
        
        
        
        
        </header>
 
 );
    

    }
    
}


export default App;
