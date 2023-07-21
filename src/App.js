import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
import Boards from "./pages/Boards/Boards";
import Board from "./pages/Board/Board";
import Table from "./pages/Table/Table";
import Write from "./pages/Write/Write";
import Search from "./pages/Search/Search";
import SignupPage from "./pages/SignUp/Signup";
import GlobalStyle from "./style/GlobalStyle";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />

      <Routes>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
        <Route path="/gallery" element={<Boards />}></Route>
        <Route path="/gallery/:boardID" element={<Board />}></Route>
        <Route path="/:boardID/write" element={<Write />}></Route>
        <Route path="/gallery/:boardID/:tableID" element={<Table />}></Route>
        <Route path="/" element={<Main />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
