import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1>Todo App</h1>

      <div>
        <input type="text" name="todo" placeholder="What is your plan?" />
        <button className="add-button">Add</button>
      </div>
    </div>
  );
};

export default App;
