import store from './store'
import * as actions from './actiontypes'
import {bugAdded, bugResolved} from './actions'

store.dispatch(bugAdded('Bug updated'))

store.dispatch({
    type: actions.BUG_ADDED,
    payload: {
        description: 'new bug'
    }
})

store.dispatch(bugResolved(2))

console.log(store.getState())