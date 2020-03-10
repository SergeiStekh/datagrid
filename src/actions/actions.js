import {SORT_TABLE, SORT_TABLE_BOOLEAN, SORT_ENUM} from './actionTypes'
import _ from 'lodash'

export function sortTable(sortField, data, initialData, sortingMethod, sorted, sortedCount, previousSortField) {
  let previousSort = sortField;

  const cloneData = {...data};
  const isSorted = {...sorted};
  let sortedCounter = sortedCount;
  let sortType = sortingMethod;


  if (previousSortField && previousSort !== previousSortField) {
    for (let sort in isSorted) {
      isSorted[sort] = false
    }
    for (let sort in sortedCounter) {
      sortedCounter[sort] = 0
    }
    sortType = 'desc'
  }
  

  isSorted[sortField] = true;
  if (sortedCounter[sortField] < 2) {
    sortedCounter[sortField] += 1
  } else {
    sortedCounter[sortField] = 0
    isSorted[sortField] = false;
  }

  
  
  if (sortedCounter[sortField] === 1 && sortingMethod === 'asc') {
    sortType = 'desc'
  }
  if (sortedCounter[sortField] === 2 && sortingMethod === 'desc') {
    sortType = 'asc'
  }
  if (sortedCounter[sortField] === 3 && sortingMethod === 'asc') {
    sortType = 'asc'
  }
  const orderedData = _.orderBy(cloneData, sortField, sortType);
  
  
  if (isSorted[sortField]) {
  return {
    type: SORT_TABLE,
    sortField,
    sortingMethod: sortType,
    orderedData,
    sorted: isSorted,
    sortedCounter,
    previousSortField: previousSort
  }
} else {
  return {
    type: SORT_TABLE,
    sortField,
    sortingMethod: sortType,
    orderedData: initialData,
    sorted: isSorted,
    sortedCounter,
    previousSortField: previousSort
  }
}
}

export function sortTableBoolean(sortField, data, sortingMethod, sortedCount, sorted, previousSortField) {
  let previousSort = sortField;

  const cloneData = {...data};
  let sortType = 'desc';
  let sortedCounter = sortedCount;
  const isSorted = {...sorted};
  

  if (previousSortField && previousSort !== previousSortField) {
    for (let sort in isSorted) {
      isSorted[sort] = false
    }
    for (let sort in sortedCounter) {
      sortedCounter[sort] = 0
    }
    sortType = 'desc'
  }

  

  if (sortingMethod === 'asc') {
    sortType = 'desc'
  } else {
    sortType = 'asc'
  }
  const orderedData = _.orderBy(cloneData, sortField, sortType);
  if (sortType === 'desc') {
    isSorted[sortField] = true
  } else {
    isSorted[sortField] = false
  }

  return {
    type: SORT_TABLE_BOOLEAN,
    sortingMethod: sortType,
    sortField,
    orderedData,
    sorted: isSorted,
    sortedCount: sortedCounter,
    previousSortField: previousSort
  }
}

export function sortEnum() {
  
}