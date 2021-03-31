import TodoInput from "../../components/Input/TodoInput";
import { useState, useEffect } from "react";
import firebase from "../../firebase/index";
const Home = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = () => {
    firebase.db
      .collection("todo")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setTodos((prev) => [...prev, doc.data()]);
        });
      })
      .catch((err) => console.log(err.message));
  };

  console.log(todos);
  return (
    <div className="container-2xl flex flex-col items-center">
      <h1 className="flex-grow">Add your task</h1>
      <TodoInput />
      <section className="border-gray-400 w-52 ">
        {todos
          ? todos.map((todo) => {
              return <h1>{todo.task}</h1>;
            })
          : console.warn("there is no data")}
      </section>
    </div>
  );
};

export default Home;
