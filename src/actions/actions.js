import {SORT_TABLE, SORT_TABLE_BOOLEAN, SORT_ENUM, VIRTUALIZATION_TOGGLE, SEARCH, PUSH_SHIFT, SELECT_ITEM, DELETE_ITEM} from './actionTypes'
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

export function sortEnum(sortField, data, sortingMethod, sortedCount, sorted, previousSortField, event) {
  
  let previousSort = sortField;

  let sortType = sortingMethod;
  let sortedCounter = {...sortedCount};
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
  
  let orderedData;

  if (event !== null && event.length !== 0) {
  orderedData = _.orderBy(data, o => {
    if (o.politicViews === event[0].value) {
      return o.politicViews
    }
    if (event[1]) {
    if (o.politicViews === event[1].value) {
      return o.politicViews
    }
  }
  });
}


  return {
    type: SORT_ENUM,
    sortField,
    sortingMethod: sortType,
    orderedData: orderedData !== undefined ? orderedData : data,
    sorted: isSorted,
    sortedCount: sortedCounter,
    previousSortField: previousSort
  }
}

export function toggleVirtualization(props, virtualization) {
  return {
    ...props,
    type: VIRTUALIZATION_TOGGLE,
    isVirtualized: !virtualization,
    data:props.data,
    sort: props.sort
  }
}

export function search(props, event) {
  
  let input = event.target.value.toLowerCase();
  let initialData = [...props.initialData]
  
  let fieldType = event.target.id;
  
  let returnData;

  if (!props.isShift) {
  switch(fieldType) {
    case 'name': 
    returnData = initialData.filter(name => {
      return name.fullName.toLowerCase().includes(input)
    });
    break;
    case 'country':
      returnData = initialData.filter(country => {
        return country.country.toLowerCase().includes(input)
    });
    break;
    case 'city':
      returnData = initialData.filter(city => {
        return city.city.toLowerCase().includes(input)
    });
    break;
    case 'zip':
      returnData = initialData.filter(zip => {
        return zip.zip.toLowerCase().includes(input)
    });
    break;
    case 'company':
      returnData = initialData.filter(company => {
        return company.company.toLowerCase().includes(input)
    });
    break;
    default: returnData = initialData;
  }
}


if (props.isShift) {
  switch(fieldType) {
    case 'name': 
    returnData = props.returnData.filter(name => {
      return name.fullName.toLowerCase().includes(input)
    });
    break;
    case 'country':
      returnData = props.returnData.filter(country => {
        return country.country.toLowerCase().includes(input)
    });
    break;
    case 'city':
      returnData = props.returnData.filter(city => {
        return city.city.toLowerCase().includes(input)
    });
    break;
    case 'zip':
      returnData = props.returnData.filter(zip => {
        return zip.zip.toLowerCase().includes(input)
    });
    break;
    case 'company':
    
      returnData = props.returnData.filter(company => {
        return company.company.toLowerCase().includes(input)
    });
    break;
    default: returnData = initialData;
  }
}

  return {
    ...props,
    type: SEARCH,
    data: returnData,
    returnData
  } 
}

export function pushShift(props, event, toggle)  {
  return {
    ...props,
    type: PUSH_SHIFT,
    isShift: toggle,
    returnData: props.returnData
  }
}

export function selectItem(props, index, event) {
  
  let newData = [...props.data];
  
  props.data.forEach((element, ind) => {
      
    if(!props.isShift) {element.clicked = false}
    if (ind === index && !element.deleted) {
      element.clicked = true
      // newData.splice(ind, 1)
    }
  })

  return {
    ...props,
    type: SELECT_ITEM,
    data: newData
  }
} 


export function deleteItem(props, index, event) {
  event.stopPropagation()
  let newData = [...props.data];
  
  props.data.forEach((element, ind) => {
    element.deleted = false;
    if (ind === index) {
      element.deleted = true;
      newData.splice(ind, 1)
    }
  })

  return {
    ...props,
    type: DELETE_ITEM,
    data: newData
  }
}