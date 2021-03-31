import Navbar from "./components/Header/Header";
import Home from "./containers/Home/Home";
import firebase from "./firebase/index";
function App() {
  console.log(firebase.db);
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
