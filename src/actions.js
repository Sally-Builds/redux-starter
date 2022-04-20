import * as actions from './actiontypes'

// export function bugAdded(description) {
//     return {
//         type: actions.BUG_ADDED,
//         payload: {
//             description
//         }
//     }
// }

export const bugAdded = (description) => ({
    type: actions.BUG_ADDED,
    payload: {
        description
    }
})

export const bugResolved = (id) => ({
    type: actions.BUG_RESOLVED,
    payload: {
        id
    }
})