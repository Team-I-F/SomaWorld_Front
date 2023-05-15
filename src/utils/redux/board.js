// boards.js (Redux 모듈 파일)

// 액션 타입 정의
const SET_BOARDS = "SET_BOARDS";
const SET_BOARD = "SET_BOARD";
const SET_TABLE = "SET_TABLE";

// 초기 상태 정의
const initialState = {
  boards: [],
  board: [],
  table: [],
};

// 액션 생성자 함수 정의
export const setBoards = (boards) => ({
  type: SET_BOARDS,
  payload: boards,
});

export const setBoard = (board) => ({
  type: SET_BOARD,
  payload: board,
});

export const setTable = (table) => ({
  type: SET_TABLE,
  payload: table,
});

// 리듀서 함수 정의
export default function boardsReducer(state = initialState, action) {
  console.log(action);

  switch (action.type) {
    case SET_BOARDS:
      return {
        ...state,
        boards: action.payload,
      };

    case SET_BOARD:
      return {
        ...state,
        board: action.payload,
      };

    case SET_TABLE:
      return {
        ...state,
        table: action.payload,
      };
    default:
      return state;
  }
}
