import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
import Board from "./pages/Board/Board";
import Boards from "./pages/Boards/Boards";
import Test from "./components/Test";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/boards" element={<Boards />}></Route>
        <Route path="/board/:id" element={<Board />}></Route>
        <Route path="/" element={<Main />}></Route>
        <Route path="/test" element={<Test />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
