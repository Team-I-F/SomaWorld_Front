import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getboard } from "../../utils/api/board";
import { Link, useParams } from "react-router-dom";

import { setBoard } from "../../utils/redux/board";

const Board = () => {
  const { boardID } = useParams();
  const dispatch = useDispatch();

  const board = useSelector((state) => state.boardsReducer.board);

  function initialBoard() {
    const myPromise = getboard(boardID);
    myPromise
      .then(function (data) {
        dispatch(setBoard(data.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    initialBoard();
    console.log("", board);
  }, []);

  return (
    <div>
      <h1>보드</h1>
      {board &&
        board.map((board) => (
          <Link to={`/board/${boardID}/${board.tableID}`}>
            <div>
              <h1>{board.tableID}??</h1>
              <h1>{board.title}</h1>
              <span>{board.views}</span>
              <p>{board.created}</p>
              <p>{board.userNickname}</p>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default Board;
