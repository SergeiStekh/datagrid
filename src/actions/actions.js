import {SORT_TABLE} from './actionTypes'
import _ from 'lodash'

export function sortTable(sortField, data, sortingMethod) {
  const cloneData = {...data};
  const sortType = sortingMethod === 'asc' ? 'desc' : 'asc';
  const orderedData = _.orderBy(cloneData, sortField, sortingMethod);
  
  return {
    type: SORT_TABLE,
    sortField,
    sortingMethod: sortType,
    orderedData
  }
}