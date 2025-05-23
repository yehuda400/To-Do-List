import Input from "./components/Input";
import Tasks from "./components/Tasks";
import TasksContextProvider from "./TasksContext";

function App() {
  return (
    <TasksContextProvider>
      <div className="app">
        <h1>Tasks Manager</h1>

        <Input />
        <Tasks />
      </div>
    </TasksContextProvider>
  );
}

export default App;
