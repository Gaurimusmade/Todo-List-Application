import React, { useEffect, useState } from "react";
import Task from "./Task.jsx";
import { getall } from "../handleHttp/Api.js";
import { Link } from "react-router-dom";

const TaskList = () => {
  const [tasks, setTasks] = useState([{}]);
  useEffect(() => {
    async function fetchData() {
      await getall(setTasks);
    }
    fetchData();
  }, []);
  return (
    <div className="container mx-auto mt-8 p-8 bg-gray-200 rounded-lg shadow-lg">
      <div className="flex mb-4">
        <button className="bg-blue-600  border rounded-l text-white p-3 rounded-r-md hover:bg-blue-700 focus:outline-none transition duration-300 ease-in-out">
          <Link to={`/tasks/create`}>Create a new task</Link>
        </button>
      </div>
      <ul>
        {tasks.map((task) => (
          <Task key={task._id} task={task} setTasks={setTasks} id={task._id} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
