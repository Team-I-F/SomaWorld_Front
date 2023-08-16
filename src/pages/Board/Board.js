import { useEffect, useState } from "react";
<<<<<<< HEAD
import { getboard } from "../../utils/api/board";
import { Link, useParams } from "react-router-dom";

const Board = () => {
  const { boardID } = useParams();

  const [board, setBoard] = useState([])

  function initialBoard() {
  
   const response = getboard(boardID);

   response
   .then(function (data) {
     setBoard(data.data);
     console.log(board);
   })
   .catch((error) => {
     console.log(error);
   });

  
=======
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
>>>>>>> 792d867909bf8542aab170642137010a02a888d2
  }

  useEffect(() => {
    initialBoard();
<<<<<<< HEAD
=======
    console.log("", boardID);
>>>>>>> 792d867909bf8542aab170642137010a02a888d2
  }, []);

  return (
    <div>
      <h1>갤러리</h1>
<<<<<<< HEAD


=======
>>>>>>> 792d867909bf8542aab170642137010a02a888d2
      {board &&
        board.map((board) => (
          <Link to={`/gallery/${boardID}/${board.tableID}`}>
            <div>
              <h1>{board.tableID}</h1>
              <h1>{board.title}</h1>
              <span>{board.views}</span>
              <p>{board.created}</p>
              <p>{board.userNickname}</p>
            </div>
          </Link>
        ))}
<<<<<<< HEAD


=======
>>>>>>> 792d867909bf8542aab170642137010a02a888d2
    </div>
  );
};

export default Board;
<<<<<<< HEAD



=======
>>>>>>> 792d867909bf8542aab170642137010a02a888d2
