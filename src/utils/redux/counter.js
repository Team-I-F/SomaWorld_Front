const initialState = {
  count: 0,
};

const counter = (state = initialState.count, action) => {
  switch (action.type) {
    case "증가":
      state++;
      return state;

    case "감수":
      state--;
      return state;

    default:
      return state;
  }
};

export default counter;
