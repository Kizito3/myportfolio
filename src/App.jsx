import { useEffect } from "react";
import "./App.css";

import Home from "./Home";
import Layout from "./layout/layout";
import Lenis from "lenis";

function App() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <div>
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
