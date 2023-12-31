import { Route, Routes } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";

function App() {

  return (
    <div>
      <div className="nav-color">
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
