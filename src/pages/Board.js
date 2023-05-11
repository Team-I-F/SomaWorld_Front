import { useEffect, useState } from "react";
import { getboardList } from "../utils/api/board";

const Boards = () => {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    // function fetchData() {
    //   axios
    //     .get("http://localhost:3000/board")
    //     .then((response) => setBoards(response.data))
    //     .catch((error) => console.log(error));
    // }
    // fetchData();
    console.log(getboardList());
  }, []);

  return (
    <div>
      {boards &&
        boards.map((board) => (
          <>
            <h1>{board.title}</h1>
            <span>{board.created}</span>
            <p>{board.author_nickname}</p>
          </>
        ))}
    </div>
  );
};

export default Boards;
