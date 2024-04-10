import React from "react";

export const ShowTask = ({ tasklist, setTask, ChangeTask, SetChange }) => {
  function handeldelete(id) {
    const deletedTask = tasklist.filter((tasks) => tasks.id !== id);
    setTask(deletedTask);
  }
  function handelchange(id) {
    const UpdateTask = tasklist.find((tasks) => tasks.id === id);
    SetChange(UpdateTask);
  }
  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Task</span>
          <span className="count">{tasklist.length}</span>
        </div>
        <button className="clearAll" onClick={() => setTask([])}>
          Clear
        </button>
      </div>
      <ul>
        {tasklist.map((task) => (
          <li key={task.id}>
            <p>
              <span className="name">{task.name}</span>
              <span className="time">{task.date1}</span>
            </p>
            <i
              onClick={() => handelchange(task.id)}
              className="bi bi-pencil-square"
              aria-hidden="true"
            ></i>
            <i
              onClick={() => handeldelete(task.id)}
              className="bi bi-trash"
              aria-hidden="true"
            ></i>
          </li>
        ))}
      </ul>
    </section>
  );
};
