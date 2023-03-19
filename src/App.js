import "./App.css";
import Main from "./components/Main";
import Header from "./components/header";
import { useEffect } from "react";

function App() {
  
  useEffect(() => {
    document.title = "Nameasy | Best Way To Get Perfect Name";
  }, []);
  
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
