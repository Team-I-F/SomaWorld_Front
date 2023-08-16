import { Link } from "react-router-dom";
<<<<<<< HEAD
import { useEffect, useState } from "react";
import { getboardList } from "../../utils/api/board";

const Boards = () => {

  const [boards, setBoards] = useState([]);

  function initialBoards() {
    const response = getboardList();

    setBoards(getboardList());

    response
    .then(function (data) {
      setBoards(data.data);
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
    
=======
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getboardList } from "../../utils/api/board";
import { setBoards } from "../../utils/redux/board";

const Boards = () => {
  const dispatch = useDispatch();
  const boards = useSelector((state) => state.boardsReducer.boards);

  function initialBoards() {
    const response = getboardList();
    response
      .then(function (data) {
        dispatch(setBoards(data.data));
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
>>>>>>> 792d867909bf8542aab170642137010a02a888d2
  }

  useEffect(() => {
    initialBoards();
  }, []);

  console.log(boards);

  return (
    <div>
      <div>
        <h1>갤러리들</h1>
        {boards && boards.length > 0 ? (
          boards.map((board) => (
            <Link to={`/gallery/${board.tableInfoId}`}>
              <div key={board.tableInfoId}>
                <h1>{board.tableInfoId}</h1>
                <p>{board.tableName}</p>
              </div>
            </Link>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Boards;
