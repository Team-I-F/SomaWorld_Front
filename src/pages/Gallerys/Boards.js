import { Link } from "react-router-dom";
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
            <Link to={`/gallery/${board.galleryId}`}>
              <div key={board.galleryId}>
                <h1>{board.galleryId}</h1>
                <p>{board.galleryName}</p>
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
