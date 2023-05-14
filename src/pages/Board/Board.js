import { useEffect, useState } from "react";
import { getboard } from "../../utils/api/board";
import { useParams } from "react-router-dom";

const Board = () => {
  const { id } = useParams();
  const [boards, setBoards] = useState([]);

  function initialBoards() {
    const myPromise = getboard(id);
    // myPromise
    //   .then((response) => {
    //     const data = response.data;
    //     setBoards(data, boards);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }

  useEffect(() => {
    initialBoards();
    console.log(id);
  }, []);

  return (
    <div>
      <h1>라라라라</h1>
      {boards &&
        boards.map((board) => (
          <>
            <h1>아아아아아</h1>
          </>
        ))}
    </div>
  );
};

export default Board;
