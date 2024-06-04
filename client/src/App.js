import HomePage from "./Components/HomePage";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import {BrowserRouter, Routes , Route,Navigate } from 'react-router-dom'



function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/register" element={<SignUp/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/home" element={<HomePage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
