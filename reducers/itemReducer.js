const initialState = {
  items: []
};

export default function itemReducer(state = initialState, action) {
  switch (action.type) {
    case "SEND_FROM_FATHER":
      return {
        items: [...state.items, action.data]
      };
    default:
      return state;
  }
}
