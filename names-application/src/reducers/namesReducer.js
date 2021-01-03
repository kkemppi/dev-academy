import { getNames } from '../services/names'

const nameReducer = (state = [], action) => {
    switch(action.type) {
    case 'SORT_NUM':
        const sortedNum = [...state].sort(compareNum)
        console.log("sortedNum")
        return sortedNum
    case 'SORT_NAMES':
        const sortedName = [...state].sort(compareName)
        console.log("sortedName")
        return sortedName
    case 'INIT_STATE':
        let names = action.data
        names.sort(compareNum)
        return names
    default:
        return state
    }
  }

  
export const initData = () => {
    return async dispatch => {
        const data = await getNames()
        dispatch({
            type: 'INIT_STATE',
            data: data
        })
    }
}

export const sortAlphabetically = () => {
    return dispatch => {
        console.log("Dispatch alphabetically")
        dispatch({
            type: 'SORT_NAMES'
        })
    }
}

export const sortNumerically = () => {
    return dispatch => {
        console.log("Dispatch numerically")
        dispatch({
            type: 'SORT_NUM'
        })
    }
}
    
function compareNum( a, b ) {
    if ( a.amount > b.amount ){
        return -1;
    }
    if ( a.amount < b.amount ){
        return 1;
    }
    return 0;
}

function compareName( a, b ) {
    if ( a.name > b.name ){
        return 1;
    }
    if ( a.name < b.name ){
        return -1;
    }
    return 0;
}

export default nameReducer