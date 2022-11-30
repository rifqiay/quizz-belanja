import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/auth/Login/Login";
import Register from "./pages/auth/Register/Register";
import Detail from "./pages/detail/Detail";
import Home from "./pages/home/Home";
// import "flowbite";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace="true" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
