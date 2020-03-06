import {SORT_TABLE} from '../actions/actionTypes'
import dataObj from '../utils/generateUsers'

const initialState = {
  data: dataObj,
  sort: "asc",
  sortField: "id"
}

export default function rootReducer(state = initialState, action) {
  switch(action.type) {
    case SORT_TABLE: 
    return {
      data: action.orderedData,
      sort: action.sortingMethod,
      sortField: state.sortField
    }
  }
  return state
}