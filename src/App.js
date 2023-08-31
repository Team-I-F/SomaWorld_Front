import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
import Gallerys from "./pages/Gallerys/Gallerys";
import Board from "./pages/Gallery/Gallery";
import Table from "./pages/Table/Table";
import Write from "./pages/Write/Write";
import Search from "./pages/Search/Search";
import SignupPage from "./pages/SignUp/Signup";
import GlobalStyle from "./style/GlobalStyle";
import SearchBoardPage from "./pages/SearchBoard/SearchBoard";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />

      <Routes>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
        <Route path="/gallery" element={<Gallerys />}></Route>
        
        <Route path="/search/:galleryId/:titles" element={<SearchBoardPage />}></Route>
        
        <Route path="/gallery/:boardID" element={<Board />}></Route>
        <Route path="/:boardID/write" element={<Write />}></Route>
        <Route path="/gallery/:boardID/:tableID" element={<Table />}></Route>
        <Route path="/" element={<Main />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
