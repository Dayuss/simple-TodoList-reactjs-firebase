// import React from 'react';
import * as firebase from 'firebase'
import todoModel from './models/todoModel'

let database
export const init = () => {
    let config = {
        apiKey: "AIzaSyCqgsjzAJkLVjrVMYK6MBBweSlrt8N6qLg",
        authDomain: "todolist-416b4.firebaseapp.com",
        databaseURL: "https://todolist-416b4.firebaseio.com",
        projectId: "todolist-416b4",
        storageBucket: "todolist-416b4.appspot.com",
        messagingSenderId: "405160298344"
    }
    firebase.initializeApp(config)
    database = firebase.database()
}



//retrieve from firebase
export const getTodo = () => {
    return database.ref('todo').once('value')
}

//add new todo
export const addTodo = (todo) =>{
    let key = database.ref('/todo').push().key
    let model = todoModel(key, todo, false, firebase.database.ServerValue.TIMESTAMP)
    return database.ref('/todo/'+key).set(model)
}

// modify nani? lists
export const modList = (active, key) => {
    return database.ref('/todo/' + key).update({active: active})
}

// remove
export const remove = (key) => {
    return database.ref('todo/'+key).remove();
}