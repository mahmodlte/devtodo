import { useState } from "react";
import firebase from "../../firebase/index";
const TodoInput = () => {
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    firebase.db
      .collection("todo")
      .add({ task: task })
      .then((documentReference) => {
        console.log("document reference ID", documentReference.id);
      })
      .catch((error) => {
        console.log(error.message);
      });
    e.target.reset();
  };
  const handleChange = (e) => {
    setTask(e.target.value);
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        className="placeholder-purple-300 ring-red-300 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent shadow-lg rounded-sm  w-72 h-10 "
        type="text"
        placeHolder="add your task"
        onChange={handleChange}
      />
      <button className="bg-purple-600 rounded-sm shadow-lg w-28 h-10 mx-3">
        Add Your Task
      </button>
    </form>
  );
};

export default TodoInput;
