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
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    initialBoards();
    console.log(boards);
  }, []);

  console.log(boards);

  return (
    <div>
      <div>
        <div>하하하하하</div>
        {boards && boards.length > 0 ? (
          boards.map((board) => (
            <div key={board.tableInfoId}>
              <h1>{board.tableInfoId}</h1>
              <p>{board.tableName}</p>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Boards;
