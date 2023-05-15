// boards.js (Redux 모듈 파일)

// 액션 타입 정의
const SET_BOARDS = "SET_BOARDS";

// 초기 상태 정의
const initialState = {
  boards: [],
};

// 액션 생성자 함수 정의
export const setBoards = (boards) => ({
  type: SET_BOARDS,
  payload: boards,
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
    default:
      return state;
  }
}
