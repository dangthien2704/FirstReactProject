import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  console.log("re-render");
  return (
    <div>
      <Header />
      <Home />
    </div>
  );
}

export default App;
