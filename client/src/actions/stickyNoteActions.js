import {
  GET_STICKYNOTES,
  ADD_STICKYNOTE,
  DELETE_STICKYNOTE,
  STICKYNOTES_LOADING,
} from "./types";
import axios from "axios";

export const getStickyNotes = () => (dispatch) => {
  dispatch(setStickyNoteLoading());
  axios
    .get("/api/sticky")
    .then((res) =>
      dispatch({
        type: GET_STICKYNOTES,
        payload: res.data,
      })
    )
    .catch((err) => console.error("You broke something\n" + err));
};

export const addStickyNote = (note) => (dispatch) => {
  axios
    .post("/api/sticky", note)
    .then((res) =>
      dispatch({
        type: ADD_STICKYNOTE,
        payload: res.data,
      })
    )
    .catch((err) => console.error("You broke something\n" + err));
};

export const deleteStickyNotes = (id) => (dispatch) => {
  axios
    .delete(`/api/sticky/${id}`)
    .then((res) =>
      dispatch({
        type: DELETE_STICKYNOTE,
        payload: id,
      })
    )
    .catch((err) => console.error("You broke something\n" + err));
};

export const setStickyNoteLoading = () => {
  return {
    type: STICKYNOTES_LOADING,
  };
};
