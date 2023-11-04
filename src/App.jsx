import { Route, Routes } from "react-router-dom";
import Home from "./screens/PostLogin/Home/page";
import Contact from "./screens/PostLogin/Contact/page";
import Dashboard from "./screens/Dashboard/page";
import Footer from "./screens/components/Footer";
import AvailableTrains from "./screens/PostLogin/AvailableTrains/page";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/availableTrains" element={<AvailableTrains />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
