import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getboard } from "../../utils/api/board";
import { useParams } from "react-router-dom";
import { setBoard } from "../../utils/redux/board";

const Board = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const board = useSelector((state) => state.boardsReducer.board);

  function initialBoards() {
    const myPromise = getboard(id);
    myPromise
      .then(function (data) {
        dispatch(setBoard(data.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    initialBoards();
    console.log(board);
  }, []);

  return (
    <div>
      <h1>라라라라</h1>
      {board &&
        board.map((board) => (
          <div>
            <h1>{board.title}</h1>
            <span>{board.views}</span>
            <p>{board.created}</p>
            <p>{board.userNickname}</p>
          </div>
        ))}
    </div>
  );
};

export default Board;
