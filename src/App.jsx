import React from "react";

import "./App.css";

import Home from "./Home";
import Layout from "./layout/layout";

function App() {
  return (
    <div>
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
