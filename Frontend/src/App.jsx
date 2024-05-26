import React from "react";
import { Routes, Route } from "react-router-dom";
import Heading from "./components/Heading";
import Tasks from "./pages/Tasks";
import TaskDetails from "./pages/TaskDetails";
const App = () => {
  return (
    <>
      <Heading />
      <Routes>
        <Route path="/" element={<Tasks />} />
        <Route path="/tasks/:taskId" element={<TaskDetails />} />
        <Route path="/tasks/create" element={<TaskDetails />} />
      </Routes>
    </>
  );
};

export default App;
