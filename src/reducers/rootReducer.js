import {SORT_TABLE, SORT_TABLE_BOOLEAN, SORT_ENUM, VIRTUALIZATION_TOGGLE, SEARCH} from '../actions/actionTypes'
import dataObj from '../utils/generateUsers'

const initialState = {
  initialData: dataObj,
  data: dataObj,
  sorted: {
    id: false,
    fullName: false,
    country: false,
    city: false,
    zip: false,
    company: false,
    isAvailable: false,
    phone: false,
  },
  sortedCount: {
      id: 0,
      fullName: 0,
      country: 0,
      city: 0,
      zip: 0,
      company: 0,
      isAvailable: 0,
      phone: 0
  },
  sort: "asc",
  sortField: "id",
  previousSortField: '',
  isVirtualized: true
}

export default function rootReducer(state = initialState, action) {
  switch(action.type) {
    case SORT_TABLE: 
    return {
      data: action.orderedData,
      sort: action.sortingMethod,
      sortField: action.sortField,
      sorted: action.sorted,
      sortedCount: action.sortedCounter,
      initialData: state.initialData,
      previousSortField: action.previousSortField,
      isVirtualized: state.isVirtualized
    }
    case SORT_TABLE_BOOLEAN: 
    return {
      data: action.orderedData,
      sort: action.sortingMethod,
      sortField: action.sortField,
      sorted: action.sorted,
      sortedCount: action.sortedCount,
      initialData: state.initialData,
      previousSortField: action.previousSortField,
      isVirtualized: state.isVirtualized
    }
    case SORT_ENUM: 
    return {
      data: action.orderedData,
      sort: action.sortingMethod,
      sortField: action.sortField,
      sorted: action.sorted,
      sortedCount: action.sortedCount,
      initialData: state.initialData,
      previousSortField: action.previousSortField,
      isVirtualized: state.isVirtualized
    }
    case VIRTUALIZATION_TOGGLE:
      return {
        data: state.data,
        sort: state.sortingMethod,
        sortField: state.sortField,
        sorted: state.sorted,
        sortedCount: state.sortedCount,
        initialData: state.initialData,
        previousSortField: state.previousSortField,
        isVirtualized: action.isVirtualized
      }
      case SEARCH:
        return {
          ...state,
          data: action.data
        }
        default: return state
  }
}