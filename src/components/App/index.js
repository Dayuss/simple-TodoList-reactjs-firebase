import React, { Component } from 'react';
import Lists from './todos'
// import * as firebase from 'firebase'
import { addTodo, getTodo, modList, remove } from './../javascripts/firebase'
import './style.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      todos: [],
    }
  }


  getData = () => {
    getTodo().then((result) => {
      let data=[]
      result.forEach(el => {
         const val = el.val()
         data.push(val)
      })
      data.reverse()
      this.setState({
        todos: data
      })
    })
  }

  componentDidMount = () => {
    this.getData()
  }

  onSubmit = (e) => {
    e.preventDefault()
    if (this._inputElement.value !== ''){
      addTodo(this._inputElement.value)
      this._inputElement.value =''
    }
    this.getData()
  }

  toggle = (active, key) => {
    modList(!active, key)
    this.getData()
  }

  remove = (key) => {
    remove(key)
    this.getData()
  }

  render() {
    return ( 
      <div className='container'>
        <div className='head'>
          <h1>To Do List</h1>
          <form className='form-input' onSubmit={this.onSubmit}>
            <input ref={(a) => this._inputElement = a}/>
            <button className="btn-submit">ADD</button>
          </form>
        </div>
        <Lists
          todos={this.state.todos}
          remove={this.remove.bind(this)}
          toggle={this.toggle.bind(this)}
         />
      </div>
    );
  }
}

export default App