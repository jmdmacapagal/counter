import { combineReducers } from 'redux'

const countReducer = (count = 100, action) => {
    if (action.type === 'INCREMENT_NUM') {
        return count + 1
    } else if (action.type === 'DECREMENT_NUM') {
        return count - 1
    }
    return count
}

export default combineReducers({
    count: countReducer
})


