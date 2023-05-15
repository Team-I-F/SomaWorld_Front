import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
import Boards from "./pages/Boards/Test";
import Board from "./pages/Board/Board";
import Table from "./pages/Table/Table";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/boards" element={<Boards />}></Route>
        <Route path="/board/:boardID" element={<Board />}></Route>
        {/* <Route path="/board/:boardID/:tableID" element={<Table />}></Route> */}
        <Route path="/" element={<Main />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
