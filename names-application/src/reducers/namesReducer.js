import { getNames } from '../services/names'

const nameReducer = (state = [], action) => {
    switch(action.type) {
      case 'INIT_STATE':
        let names = action.data
        names.sort(compare)
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
    
function compare( a, b ) {
    if ( a.amount > b.amount ){
        return -1;
    }
    if ( a.amount < b.amount ){
        return 1;
    }
    return 0;
}

export default nameReducer