import { useEffect, useState } from "react";
import { getTable } from "../../utils/api/board";
import { useParams } from "react-router-dom";

const Board = () => {
  const { boardID, tableID } = useParams();

  const [table, setTable] = useState([]);

  function initialBoards() {
    console.log(boardID, tableID)
    const response = getTable(boardID, tableID);
    
    console.log(response)
    response
    .then(function (data) {
      // setTable(data.data[0]);
    })
    .catch((error) => {
      console.log(error);
    });
    
  }

  useEffect(() => {
    initialBoards();
    console.log(table);
  }, []);

  return (
    <div>
      <h1>테이블</h1>
      {table && (
        <div>

        </div>
      )}
    </div>
  );
};

export default Board;
