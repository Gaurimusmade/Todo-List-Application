import React, { useState } from "react";
import { Link } from "react-router-dom";
import { deletetask } from "../handleHttp/Api";

const Task = ({ task, id, setTasks }) => {
  const handleRemove = async () => {
    await deletetask(id, setTasks);
  };

  return (
    <li className="flex items-center justify-between bg-white p-3 my-2 rounded shadow-md hover:shadow-lg">
      <div className="flex-1 text-lg">
        <p
          className={`text-gray-800 font-medium ${
            task.status == "Completed"
              ? "line-through decoration-red-500 animation-pulse 1s ease-in-out infinite"
              : ""
          }`}
        >
          {task.title}
        </p>
        <p className="text-gray-600 text-sm">{task.dueDate}</p>
      </div>
      <div className="flex space-x-2">
        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-bold text-green-500 bg-green-100">
          {task.status}
        </span>
        <button className="text-blue-500 hover:text-blue-700 focus:outline-none">
          <Link to={`/tasks/${id}`}>✏️Edit</Link>
        </button>
        <button
          className="text-red-500 hover:text-red-700 focus:outline-none"
          onClick={handleRemove}
        >
          🗑Remove
        </button>
      </div>
    </li>
  );
};

export default Task;
