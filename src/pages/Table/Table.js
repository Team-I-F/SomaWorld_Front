import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTable } from "../../utils/api/board";
import { useParams } from "react-router-dom";
import { setTable } from "../../utils/redux/board";

const Board = () => {
  const { boardID, tableID } = useParams();

  const dispatch = useDispatch();
  const table = useSelector((state) => state.boardsReducer.table);

  function initialBoards() {
    const myPromise = getTable(boardID, tableID);
    myPromise
      .then(function (data) {
        dispatch(setTable(data.data[0]));
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
          <h1>{table.tableID}</h1>
          <h1>{table.title}</h1>
          <h1>{table.created}</h1>
          <h1>{table.views}</h1>
          <h1>{table.userNickname}</h1>
          <h1>{table.description}</h1>
        </div>
      )}
    </div>
  );
};

export default Board;
