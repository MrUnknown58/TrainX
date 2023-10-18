import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./screens/PostLogin/Home/page";
import Contact from "./screens/PostLogin/Contact/page";
import Dashboard from "./screens/Dashboard/page";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
