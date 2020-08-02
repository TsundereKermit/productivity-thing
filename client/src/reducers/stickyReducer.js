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
            const sticky = [...state.sticky];
            return {sticky};
        case DELETE_STICKYNOTE:
            return {
                //Todo
            }
        default:
            return state;
    }
}