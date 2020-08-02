import {GET_STICKYNOTES, ADD_STICKYNOTE, DELETE_STICKYNOTE} from './types';

export const getStickyNotes = () => {
    return {
        type: GET_STICKYNOTES,
    }
}