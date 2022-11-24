import React, { useEffect, useState } from "react";

export default function Todo() {
  const [value, setValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  // const [localTodo, setLocalTodo] = useState([]);
  const getTodoValue = (event) => {
    setValue(event.target.value);
  };
  // console.log(todoList)


  // get local Storage data 
  const localList = () => {
    const lsData = localStorage.getItem("list")
    if(lsData){
      return JSON.parse(localStorage.getItem("list"));
    }
    else{
      return [];
    }
    
  }

  const addTodo = () => {
    // debugger
    let arr = [...todoList];
    arr.push(value);
    setTodoList(arr);
    localStorage.setItem("todos", JSON.stringify(arr));
    console.log(arr);
    setValue("")
  };
 
 

  const editTodo = (i) => {
    let editValue = todoList[i]
    console.log(editValue)
    const input = prompt("Enter Todo",editValue)
    todoList.splice(i,1,input)
    const editedTodo = [...todoList]
    setTodoList(editedTodo)
  };
  const deleteTodo = (i) => {
    console.log(i);
    console.log(todoList)
    todoList.splice(i,1)
    const afterDeleteTodos = [...todoList]
    setTodoList(afterDeleteTodos)
    console.log(todoList)
  };

  const deleteAll = () => {
    setTodoList([])
  }
  // local Storage

    return (
    <>
      <div className="main">
        <div>
          <input
          value={value}
            type="text"
            className="todo"
            size="60px"
            onChange={getTodoValue}
          />
          <div className="btn">
            <button onClick={() => addTodo()}>Add Todo</button>
            <button onClick={() => deleteAll()}>Delete all</button>
          </div>
        </div>
        <ul className="todo-list">
          {todoList.map((item, index) => {
            return (
              <li key={index}>
                <img
                  src="assets/icons8-checkmark-480-modified.png"
                  className="checkmark"
                  alt=""
                />
                <span>{item}</span>

                <div className="btn-div">
                  <img
                    src="assets/icons8-edit-150.png"
                    onClick={() => editTodo(index)}
                    className="eidt-icon"
                    alt=""
                  />
                  <img
                    src="assets/icons8-bin-64.png"
                    onClick={() => deleteTodo(index)}
                    className="bin-icon"
                    alt=""
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
