import { useEffect, useState } from "react";
import { getboardList } from "../../utils/api/board";

const Boards = () => {
  const [boards, setBoards] = useState([]);

  function initialBoards() {
    const myPromise = getboardList();

    myPromise.then(function (dataArray) {
      setBoards(boards, dataArray.data);
    });
    console.log("아아");
  }

  useEffect(() => {
    initialBoards();
  }, []);

  return (
    <div>
      <h1>아오</h1>
      {boards &&
        boards.map((board) => (
          <>
            <h1>{board.tableInfoId}</h1>
            <p>{board.tableName}</p>
          </>
        ))}
    </div>
  );
};

export default Boards;
