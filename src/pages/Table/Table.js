import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTable } from "../../utils/api/board";
import { useParams } from "react-router-dom";
import { setTable } from "../../utils/redux/board";

const Board = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const table = useSelector((state) => state.boardsReducer.board);

  function initialBoards() {
    const myPromise = getTable(id);
    myPromise
      .then(function (data) {
        dispatch(setTable(data.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    initialBoards();

    console.log(id, table);
  }, []);

  return (
    <div>
      <h1>테이블</h1>
      {table &&
        table.map((table) => (
          <div>
            <p>집가고싶다</p>
          </div>
        ))}
    </div>
  );
};

export default Board;
