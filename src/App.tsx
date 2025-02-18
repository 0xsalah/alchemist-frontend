import React from "react";
import Footer from "./views/Footer";
import Header from "./views/Header";
import Body from "./views/Body";
import "./css/App.css";
import { Web3Provider } from "./Web3Context";

function App() {
  return (
    <div className="wrapper">
      <Web3Provider>
        <Header />
        <Body />
        <Footer />
      </Web3Provider>
    </div>
  );
}

export default App;
