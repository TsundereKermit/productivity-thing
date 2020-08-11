import {
  GET_STICKYNOTES,
  ADD_STICKYNOTE,
  DELETE_STICKYNOTE,
  STICKYNOTES_LOADING,
} from "./types";
import axios from "axios";
import { tokenConfig } from "./authActions";
import { returnErrors } from "./errorActions";

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
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addStickyNote = (note) => (dispatch, getState) => {
  axios
    .post("/api/sticky", note, tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: ADD_STICKYNOTE,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const deleteStickyNotes = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/sticky/${id}`, tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: DELETE_STICKYNOTE,
        payload: id,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const setStickyNoteLoading = () => {
  return {
    type: STICKYNOTES_LOADING,
  };
};
