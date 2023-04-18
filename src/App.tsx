import { useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [path, setPath] = useState("/");
  return (
    <div className="App">
      <section className="main-structure">
        <Header setPath={setPath} />
        <Content />
        <Footer setPath={setPath} />
      </section>
    </div>
  );
}

export default App;
