import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Technologies from "./components/Technologies";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Technologies />
    </div>
  );
}

export default App;
