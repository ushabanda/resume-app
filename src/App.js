import React, {Component} from "react";
import Home from "./Components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Template from "./Components/template/Template";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/template" element={<Template />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
