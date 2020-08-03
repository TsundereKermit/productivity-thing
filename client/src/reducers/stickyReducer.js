import {
  GET_STICKYNOTES,
  ADD_STICKYNOTE,
  DELETE_STICKYNOTE,
  STICKYNOTES_LOADING,
} from "../actions/types";

const initialState = {
  sticky: [],
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_STICKYNOTES:
      const sticky = [...action.payload];
      return {
        ...state,
        sticky,
        loading: false,
      };
    case DELETE_STICKYNOTE:
      return {
        ...state,
        sticky: state.sticky.filter((note) => note._id !== action.payload),
      };
    case ADD_STICKYNOTE:
      return {
        ...state,
        sticky: [action.payload, ...state.sticky],
      };
    case STICKYNOTES_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
