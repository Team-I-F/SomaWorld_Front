import { useEffect, useState } from "react";
import { getTable } from "../../utils/api/board";
import { useParams } from "react-router-dom";
import styled from 'styled-components';

const BoardWrapper = styled.div`
  margin: 0 auto;
  width: 80%;
  background-color: #ffffff;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2em;
`;

const SubInfo = styled.div`
    display:flex; 
    justify-content: space-between; 
    color:#888888; 
    border-bottom:1px solid #888888; 
    padding-bottom:10px;
`;

const Views = styled.p`
  
`;

const Nickname = styled.p`

`;

const Description = styled.div`
   padding-top:20px; 
`;


const Board = () => {
    const { boardID, tableID } = useParams();
  
    const [table, setTable] = useState([]);
  
    function initialBoards() {
      const response = getTable(boardID, tableID);
      response
      .then(function (data) {
        setTable(data.data);
        console.log(table)
      })
      .catch((error) => {
        console.log(error);
      });
      
    }
  
    useEffect(() => {
      initialBoards();
      console.log("어~ 테이블이야")
      console.log(table);
    }, []);
  
    return (
        <BoardWrapper>
            {table &&
            <>
                <Title>{table.title}</Title> 
                <SubInfo>
                    <Nickname>Nickname : {table.userNickname}</Nickname>
                    <Views>Views : {table.views}</Views>
                </SubInfo>
                <Description dangerouslySetInnerHTML={{ __html : table.description }}/>
            </>
            }
        </BoardWrapper>
    );
};
  
export default Board;
