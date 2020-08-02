import {GET_STICKYNOTES, ADD_STICKYNOTE, DELETE_STICKYNOTE} from './types';

export const getStickyNotes = () => {
    return {
        type: GET_STICKYNOTES,
    }
}

export const deleteStickyNotes = id => {
    return {
        type: DELETE_STICKYNOTE,
        payload: id
    }
}