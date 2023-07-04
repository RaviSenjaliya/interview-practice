const initialState = 0;

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "Additem":
      return state + 1;
    case "Lessitem":
      return state - 1;

    default:
      return state;
  }
};
