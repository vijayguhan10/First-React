import React from "react";

const AddTask = ({ tasklist, setTask, ChangeTask, SetChange }) => {
  const updateState = (event) => {
    event.preventDefault();
    const date = new Date();

    if (ChangeTask.id) {
      tasklist.forEach((task) => {
        if (task.id === ChangeTask.id) {
          task.name = event.target.task.value;
          task.id = date.getTime();
          task.date1 = `${date.toLocaleDateString()}  ${date.toLocaleTimeString()}`;
        }
      });
      SetChange({});

      setTask([...tasklist]);
    } else {
      const newTask = {
        name: event.target.task.value,
        id: date.getTime(),
        date1: `${date.toLocaleDateString()}  ${date.toLocaleTimeString()}`,
      };
      setTask([...tasklist, newTask]);
      SetChange({});
    }
  };

  return (
    <section className="addTask">
      <form onSubmit={updateState}>
        <input
          value={ChangeTask.name || " "}
          type="text"
          name="task"
          placeholder="Add Task"
          autoComplete="off"
          onChange={(e) => SetChange({ ...ChangeTask, name: e.target.value })}
        />
        <button type="submit">{ChangeTask.id ? "Update" : "Add"}</button>
      </form>
    </section>
  );
};

export default AddTask;
