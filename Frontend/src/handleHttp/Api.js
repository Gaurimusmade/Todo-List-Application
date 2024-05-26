const getall = async (setTasks) => {
  try {
    const res = await fetch("http://localhost:5002/todo/");
    const resData = await res.json();
    setTasks(resData);
    return;
  } catch (error) {
    console.error("Error fetching tasks:", error);
  }
};

const getSingleTask = async (id, setTask) => {
  try {
    const response = await fetch(`http://localhost:5002/todo/${id}`);
    if (!response.ok) {
      throw new Error(
        `Error fetching task with id ${id}: ${response.statusText}`
      );
    }
    const taskData = await response.json();
    setTask(taskData);
  } catch (error) {
    console.error("Error fetching task:", error);
  }
};

const addTask = async (task, setTask) => {
  try {
    const res = await fetch("http://localhost:5002/todo/new", {
      method: "POST",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      setTask(task);
    } else {
      console.error("Failed to add todo.");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

const updateTask = async (task, setTask) => {
  try {
    const res = await fetch("http://localhost:5002/todo/update", {
      method: "PUT",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setTask(task);
    return;
  } catch (err) {
    console.log("Error:", err);
  }
};
const deletetask = async (id, setTasks) => {
  try {
    const res = await fetch("http://localhost:5002/todo/delete", {
      method: "DELETE",
      body: JSON.stringify({ id: id }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      setTasks((prev) => {
        return prev.filter((obj) => obj._id !== id);
      });
    }
  } catch (err) {
    console.log("Error:", err);
  }
};

export { getall, getSingleTask, addTask, updateTask, deletetask };
