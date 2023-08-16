import { useEffect, useState } from "react";
<<<<<<< HEAD
import { getTable } from "../../utils/api/board";
import { useParams } from "react-router-dom";
=======
import { useSelector, useDispatch } from "react-redux";
import { getTable } from "../../utils/api/board";
import { useParams } from "react-router-dom";
import { setTable } from "../../utils/redux/board";
>>>>>>> 792d867909bf8542aab170642137010a02a888d2
import Post from "../../components/Post/Post";

const Board = () => {
  const { boardID, tableID } = useParams();

<<<<<<< HEAD
  const [table, setTable] = useState([]);

  function initialBoards() {
    const response = getTable(boardID, tableID);

    response
    .then(function (data) {
      setTable(data.data[0]);
    })
    .catch((error) => {
      console.log(error);
    });
    
=======
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
>>>>>>> 792d867909bf8542aab170642137010a02a888d2
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
          <Post table={table} />
        </div>
      )}
    </div>
  );
};

export default Board;
