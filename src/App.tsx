// import { useState } from "react";
// import "./App.css";
// import index from ".";

import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "./App.css";

// const App = () => {
//   const [todoList, setTodoList] = useState<string[]>([]);
//   const [todo, setTodo] = useState("");

//   //Function to add todo to todolist using usestate.
//   const addTodo = () => {
//     if (todo !== "") {
//       setTodoList([...todoList, todo]);
//       setTodo("");
//     }
//   };
//   //Function to delete todo from todoList
//   const deleteTodo = (text) => {
//     const newTodos = todoList.filter((todo) => {
//       return todo !== text;
//     });
//     setTodoList(newTodos);
//   };

//   return (
//     <div className="App">
//       <h1>Todo App</h1>

//       <div>
//         <input
//           type="text"
//           name="todo"
//           value={todo}
//           placeholder="What is your plan?"
//           onChange={(e) => {
//             setTodo(e.target.value);
//           }}
//         />

//         <button
//           className="add-button"
//           onClick={addTodo}
//         >
//           Add
//         </button>
//       </div>

//       {todoList?.length > 0 ? (
//         <ul className="todo-list">
//           {todoList.map((todo, index) => (
//             <div className="todo">
//               <li key={index}> {todo} </li>

//               <button
//                 className="delete-button"
//                 onClick={() => {
//                   deleteTodo(todo);
//                 }}
//               >
//                 Delete
//               </button>
//             </div>
//           ))}
//         </ul>
//       ) : (
//         <div className="empty">
//           <p>No task found</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;

const App = () => {
  const [todos, setTodos] = useState<String[]>([]);
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    if (todo !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => {
      return todo !== text;
    });
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoInput
        todo={todo}
        setTodo={setTodo}
        addTodo={addTodo}
      />
      <TodoList
        list={todos}
        remove={deleteTodo}
      />
    </div>
  );
};

export default App;
