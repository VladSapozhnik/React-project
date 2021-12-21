import React from "react";
import TodoList from "./Todo/TodoList";
import Context from "./context";
import AddTodo from "./Todo/AddTodo";

function App() {
  let [todos, setTodos] = React.useState([
    {id: 1, complete: false, title: 'Купить Хлеб'},
    {id: 2, complete: false, title: 'Купить Масло'},
    {id: 3, complete: false, title: 'Купить Молоко'},
  ])

  function toggleTodo (id) {
      setTodos(
        todos = todos.map(todo => {
        if (todo.id === id) {
          todo.complete = !todo.complete
        }
        return todo
      })
    )
  }

  function removeTodo (id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo (title) {
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      complete: false
    }]))
  }

  return (
    <Context.Provider value={{removeTodo}}>
      <div className="wrapper">
        <h1>React</h1>
        <AddTodo onCreated={addTodo}></AddTodo>
        {todos.length ? <TodoList todos={todos} onToggle={toggleTodo}/> : <p>No Todos</p>}
      </div>
    </Context.Provider>
  );
}

export default App;
