import {BUG_ADDED, BUG_DELETED, BUG_RESOLVED} from './actiontypes'

let lastId = 0

export default function reducer (state = [], action) {
    switch(action.type) {
        case BUG_ADDED:
            return [
                ...state,
                {
                    id: ++lastId,
                    descripton: action.payload.description,
                    status: false
                }
            ]
        case BUG_DELETED:
            return state.filter(el => el.id !== action.payload.id)
        case BUG_RESOLVED:
            return state.map(el => el.id === action.payload.id ? {...el, status: true }: el)
        default:
            return state;
    }
}