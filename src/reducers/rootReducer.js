import {SORT_TABLE, SORT_TABLE_BOOLEAN, SORT_ENUM, VIRTUALIZATION_TOGGLE, SEARCH, PUSH_SHIFT, SELECT_ITEM, DELETE_ITEM, DISPLAY_COLUMNS} from '../actions/actionTypes'
import dataObj from '../utils/generateUsers'

const initialState = {
  initialData: JSON.parse(JSON.stringify(dataObj)),
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
  showColumn: {
    id: true,
    fullName: true,
    country: true,
    city: true,
    zip: true,
    company: true,
    isAvailable: true,
    phone: true,
    politicViews: true
  },
  sort: "asc",
  sortField: "id",
  previousSortField: '',
  isVirtualized: true,
  isShift: false,
  returnData: [],
}

export default function rootReducer(state = initialState, action) {
  switch(action.type) {
    case SORT_TABLE: 
    return {
      ...state,
      data: action.orderedData,
      sort: action.sortingMethod,
      sortField: action.sortField,
      sorted: action.sorted,
      sortedCount: action.sortedCounter,
      previousSortField: action.previousSortField,
    }
    case SORT_TABLE_BOOLEAN: 
    return {
      ...state,
      data: action.orderedData,
      sort: action.sortingMethod,
      sortField: action.sortField,
      sorted: action.sorted,
      sortedCount: action.sortedCount,
      previousSortField: action.previousSortField,
    }
    case SORT_ENUM: 
    return {
      ...state,
      data: action.orderedData,
      sort: action.sortingMethod,
      sortField: action.sortField,
      sorted: action.sorted,
      sortedCount: action.sortedCount,
      previousSortField: action.previousSortField,
    }
    case VIRTUALIZATION_TOGGLE:
      return {
        ...state,
        isVirtualized: action.isVirtualized
      }
    case SEARCH:
      return {
        ...state,
        data: action.data,
        returnData: action.returnData
      }
    case PUSH_SHIFT: 
      return {
        ...state, 
        isShift: action.isShift,
        returnData: action.returnData
      }
    case SELECT_ITEM:
      return {
        ...state,
        data: action.data
      }
    case DELETE_ITEM:
      return {
        ...state,
        data: action.data
      }
    case DISPLAY_COLUMNS:
      return {
        ...state,
        data: action.data,
        showColumn: action.showColumn
      }
      default: return state
  }
}