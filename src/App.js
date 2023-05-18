import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
import Boards from "./pages/Boards/Boards";
import Board from "./pages/Board/Board";
import Table from "./pages/Table/Table";
import Write from "./pages/Write/Write";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/boards" element={<Boards />}></Route>
        <Route path="/board/:boardID" element={<Board />}></Route>
        <Route path="/:boardID/write" element={<Write />}></Route>
        <Route path="/board/:boardID/:tableID" element={<Table />}></Route>
        <Route path="/" element={<Main />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
