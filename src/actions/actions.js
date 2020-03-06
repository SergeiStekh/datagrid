import {SORT_TABLE} from './actionTypes'
import _ from 'lodash'

export function sortTable(sortField, data, initialData, sortingMethod, sorted, sortedCount) {
  const cloneData = {...data};
  const isSorted = {...sorted};
  let sortedCounter = sortedCount;

  isSorted[sortField] = true;
  if (sortedCounter[sortField] < 2) {
    sortedCounter[sortField] += 1
  } else {
    sortedCounter[sortField] = 0
    isSorted[sortField] = false;
  }

  const sortType = sortingMethod === 'asc' ? 'desc' : 'asc';
  const orderedData = _.orderBy(cloneData, sortField, sortType);
  
  if (isSorted[sortField]) {
  return {
    type: SORT_TABLE,
    sortField,
    sortingMethod: sortType,
    orderedData,
    sorted: isSorted,
    sortedCounter
  }
} else {
  return {
    type: SORT_TABLE,
    sortField,
    sortingMethod: sortType,
    orderedData: initialData,
    sorted: isSorted,
    sortedCounter
  }
}
}