import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import BusRegister from "../pages/BusRegister";
import NotFound from "../pages/Notfound";

const App = () => {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/busRegister" element={<BusRegister/>} />
        <Route path="/*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;