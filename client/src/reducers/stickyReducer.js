import {v4 as uuid} from 'uuid';
import {GET_STICKYNOTES, ADD_STICKYNOTE, DELETE_STICKYNOTE} from '../actions/types';

const initialState = {
    sticky: [
        { id: uuid(), content: "haha what if i put" },
        { id: uuid(), content: "my minecraft bed" },
        { id: uuid(), content: "next to yours" },
        { id: uuid(), content: "jk... unless?" },
    ]
}

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_STICKYNOTES:
            return {...state.sticky};
        default:
            return state;
    }
}