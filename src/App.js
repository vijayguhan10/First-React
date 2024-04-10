import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/Header";
import { ShowTask } from "./components/ShowTask";
import AddTask from "./components/AddTask";
import { useState, useEffect } from "react";
import "./App.css";
import "./index.css";
function App() {
  

  const storedTasks = localStorage.getItem("tasks");
  const initialState = storedTasks ? JSON.parse(storedTasks) : [];
  const [tasklist, setTask] = useState(initialState);

  const [ChangeTask, SetChange] = useState({});
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasklist));
    console.log(tasklist);
  }, [tasklist]);

  return (
    <div className="App">
      <Header />
      <AddTask
        ChangeTask={ChangeTask}
        SetChange={SetChange}
        tasklist={tasklist}
        setTask={setTask}
      />
      <ShowTask
        ChangeTask={ChangeTask}
        SetChange={SetChange}
        tasklist={tasklist}
        setTask={setTask}
      />
    </div>
  );
}

export default App;
