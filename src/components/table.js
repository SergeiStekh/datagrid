import React, {Component} from 'react'
import { connect } from 'react-redux'
import { FixedSizeList as List } from "react-window";
import { sortTable, sortTableBoolean, sortEnum, toggleVirtualization, search, pushShift, selectItem, deleteItem } from '../actions/actions'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Switch, TextField } from '@material-ui/core';
import Select from 'react-select'
import './table.css'


class Table extends Component {
render() {

document.addEventListener('keydown', (event) => pushShift(event, this.props))

document.addEventListener('keyup', (event) => releaseShift(event, this.props))


function pushShift(e, props) {
  if (e.shiftKey) {
    props.onShift(props, e, true)
    document.removeEventListener('keydown', (event) => pushShift(event, this.props))
  } 
}

function releaseShift(e, props) {
  if(e.key === "Shift") {
    props.onShift(props, e, false)  
  }
  document.removeEventListener('keyup', (event) => releaseShift(event, this.props))
}

  let clsButtonUp = ['sort-buttons']
  let clsButtonDown = ['sort-buttons']
  
  if (this.props.sorted[this.props.sortField]) {
  if (this.props.sort === 'asc') {
    clsButtonDown.push('arrow-red')
  } else {
    clsButtonUp.push('arrow-red')
  }
  }

  const options = [
    { value: 'communist', label: 'Communist' },
    { value: 'republican', label: 'Republican' },
    { value: 'democrat', label: 'Democrat' }
  ]

  const colourStyles = {
    control: styles => ({ ...styles, backgroundColor: 'white', width: 200, outline: "none" }),
    option: (styles, { isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isDisabled 
        ? null 
        : isSelected
        ? "red" 
        : isFocused 
        ? 'gray' :
        null
      }
    },
    multiValue: (styles) => {
      return {
        ...styles,
        backgroundColor: 'gray',
        width: 120,
      }
    },
    multiValueLabel: (styles) => ({
      ...styles,
      color: 'black'
    }),
  }
  

  let clsId = ['table-cell', 'id'];
  let clsFullName = ['table-cell', 'fullName'];
  let clsCountry = ['table-cell', 'country'];
  let clsCity = ['table-cell', 'city'];
  let clsIndex = ['table-cell', 'index'];
  let clsCompany = ['table-cell', 'company'];
  let clsIsAvailable = ['table-cell', 'isAvailable'];
  let clsPhone = ['table-cell', 'phone'];
  

  const selectComponent = () => (
    <Select className="react-select-container" closeMenuOnSelect={false} styles={colourStyles} isMulti options={options} onChange={(event) => {
      return (
        this.props.onClickEnum('politicViews', this.props.data, this.props.sort, this.props.sortedCount, this.props.sorted, this.props.previousSortField, event)
      )
    } }></Select>
  )

  

let notVirtualizedData = 
    <div>
      <div>
      <a href="https://app.rs.school/course/score?course=react-2020-Q1">
        <img style={{height: 30, margin: 20}} src='https://app.rs.school/static/images/logo-rsschool3.png' alt='logo'></img>
      </a>
      <form noValidate autoComplete="off" style={{width: 1100}}>
        <TextField style={{marginRight: 20}} margin='normal' id="name" onChange={(event) => this.props.onSearch(this.props, event)} label="Search by name" variant="outlined" />
        <TextField style={{marginRight: 20}} margin='normal' id="country" onChange={(event) => this.props.onSearch(this.props, event)} label="Search by country" variant="outlined" />
        <TextField style={{marginRight: 20}} margin='normal' id="city" onChange={(event) => this.props.onSearch(this.props, event)} label="Search by city" variant="outlined" />
        <TextField style={{marginRight: 20}} margin='normal' id="zip" onChange={(event) => this.props.onSearch(this.props, event)} label="Search by ZIP" variant="outlined" />
        <TextField margin='normal' id="company" onChange={(event) => this.props.onSearch(this.props, event)} label="Search by company" variant="outlined" />
      </form>
      </div>
      <FormGroup row style={{margin: 0, padding: 0, height: 30, marginBottom: 20}}>
      <FormControlLabel
        control={
          <Switch checked={this.props.isVirtualized} onClick={() => this.props.onToggleVirtualization(this.props, this.props.isVirtualized)} value="checkedB"></Switch>
        }
        label="Virtualization"
      >
      </FormControlLabel>
      </FormGroup>
    <table className="table" style={{textAlign: "center"}}>
    <thead>
    <tr>
      <th onClick={() => this.props.onClick("id", this.props.data, this.props.initialData, this.props.sort, this.props.sorted, this.props.sortedCount, this.props.previousSortField)} style={{position: "relative"}}>ID
      <ArrowDropUpIcon style={{bottom: 20}} className={this.props.sorted['id'] ? clsButtonUp.join(' ') : 'sort-buttons'}/> 
      <ArrowDropDownIcon style={{bottom: 5}} className={this.props.sorted['id'] ? clsButtonDown.join(' ') : 'sort-buttons'}/>
      </th>
      <th onClick={() => this.props.onClick("fullName", this.props.data, this.props.initialData, this.props.sort, this.props.sorted, this.props.sortedCount, this.props.previousSortField)} style={{position: "relative"}}>Full name
      <ArrowDropUpIcon style={{bottom: 20}} className={this.props.sorted['fullName'] ? clsButtonUp.join(' ') : 'sort-buttons'}/> 
      <ArrowDropDownIcon style={{bottom: 5}} className={this.props.sorted['fullName'] ? clsButtonDown.join(' ') : 'sort-buttons'}/>
      </th>
      <th onClick={() => this.props.onClick("country", this.props.data, this.props.initialData, this.props.sort, this.props.sorted, this.props.sortedCount, this.props.previousSortField)} style={{position: "relative"}}>Country
      <ArrowDropUpIcon style={{bottom: 20}} className={this.props.sorted['country'] ? clsButtonUp.join(' ') : 'sort-buttons'}/> 
      <ArrowDropDownIcon style={{bottom: 5}} className={this.props.sorted['country'] ? clsButtonDown.join(' ') : 'sort-buttons'}/>
      </th>
      <th onClick={() => this.props.onClick("city", this.props.data, this.props.initialData, this.props.sort, this.props.sorted, this.props.sortedCount, this.props.previousSortField)} style={{position: "relative"}}>City
      <ArrowDropUpIcon style={{bottom: 20}} className={this.props.sorted['city'] ? clsButtonUp.join(' ') : 'sort-buttons'}/> 
      <ArrowDropDownIcon style={{bottom: 5}} className={this.props.sorted['city'] ? clsButtonDown.join(' ') : 'sort-buttons'}/>
      </th>
      <th onClick={() => this.props.onClick("zip", this.props.data, this.props.initialData, this.props.sort, this.props.sorted, this.props.sortedCount, this.props.previousSortField)} style={{position: "relative"}}>ZIP
      <ArrowDropUpIcon style={{bottom: 20}} className={this.props.sorted['zip'] ? clsButtonUp.join(' ') : 'sort-buttons'}/> 
      <ArrowDropDownIcon style={{bottom: 5}} className={this.props.sorted['zip'] ? clsButtonDown.join(' ') : 'sort-buttons'}/>
      </th>
      <th onClick={() => this.props.onClick("company", this.props.data, this.props.initialData, this.props.sort, this.props.sorted, this.props.sortedCount, this.props.previousSortField)} style={{position: "relative"}}>Company
      <ArrowDropUpIcon style={{bottom: 20}} className={this.props.sorted['company'] ? clsButtonUp.join(' ') : 'sort-buttons'}/> 
      <ArrowDropDownIcon style={{bottom: 5}} className={this.props.sorted['company'] ? clsButtonDown.join(' ') : 'sort-buttons'}/>
      </th>
      <th>
      <FormGroup row style={{margin: 0, padding: 0, height: 30}}>
      <FormControlLabel
        control={
          <Switch checked={this.props.sorted['isAvailable']} onClick={() => this.props.onClickBoolean("isAvailable", this.props.data, this.props.sort, this.props.sortedCount, this.props.sorted, this.props.previousSortField)} value="checkedA" />
        }
        label=""
      /> 
      </FormGroup>
      </th>
      <th onClick={() => this.props.onClick("phone", this.props.data, this.props.initialData, this.props.sort, this.props.sorted, this.props.sortedCount, this.props.previousSortField)} style={{position: "relative"}}>Phone
      <ArrowDropUpIcon style={{bottom: 20}} className={this.props.sorted['phone'] ? clsButtonUp.join(' ') : 'sort-buttons'}/> 
      <ArrowDropDownIcon style={{bottom: 5}} className={this.props.sorted['phone'] ? clsButtonDown.join(' ') : 'sort-buttons'}/>
      </th>
      <th style={{position: "relative"}}>
      {selectComponent()}
      </th>
    </tr>
    </thead>
    <tbody>
      {this.props.data ? this.props.data.map((user, index) => {
        return (
        <tr key={index} className={this.props.data[index].clicked ? "active-content" : null} onClick={(event) => this.props.onSelectItem(this.props, index, event)}>
          <td><button style={{position: "absolute", left: 50}} onClick={(event) => this.props.onDeleteItem(this.props, index, event)}>Х</button>{user.id.toLocaleString()}</td>
          <td>{user.fullName}</td>
          <td>{user.country}</td>
          <td>{user.city}</td>
          <td style={{textAlign: "right"}}>{user.zip.toLocaleString()}</td>
          <td>{user.company}</td>
          <td>{user.isAvailable ? "isAvailable" : "Not available"}</td>
          <td style={{textAlign: "right"}}>{user.phone.toLocaleString()}</td>
          <td>{user.politicViews}</td>
        </tr>)
      }) : <div>Loading data</div>}
    </tbody>
  </table> 
  </div>


const ComplexListItem = ({index, style}) => {
  if (this.props.data) {
    if (this.props.data.length > 1) {
  return (
    <div className={this.props.data[index].clicked ? "table-content active-content" : "table-content"} onClick={(event) => this.props.onSelectItem(this.props, index, event)} style={style}>
      <div className="table-row">
        <button className="delete-item" onClick={(event) => this.props.onDeleteItem(this.props, index, event)}>X</button>
        <div className="table-cell id">{this.props.data[index].id.toLocaleString()}</div>
        <div className="table-cell fullName">{this.props.data[index].fullName}</div>
        <div className="table-cell country">{this.props.data[index].country}</div>
        <div className="table-cell city">{this.props.data[index].city}</div>
        <div className="table-cell index">{this.props.data[index].zip.toLocaleString()}</div>
        <div className="table-cell company">{this.props.data[index].company}</div>
        <div className="table-cell isAvailable">{this.props.data[index].isAvailable ? "isAvailable" : "Not available"}</div>
        <div className="table-cell phone">{this.props.data[index].phone.toLocaleString()}</div>
        <div className="table-cell politicViews">{this.props.data[index].politicViews}</div>
      </div>
    </div> 
  )
    } else {
      return (
        <div className="table-content" id='listItems' style={style}>
          <div className="table-row">
            <div className="table-cell id">{this.props.data[0].id.toLocaleString()}</div>
            <div className="table-cell fullName">{this.props.data[0].fullName}</div>
            <div className="table-cell country">{this.props.data[0].country}</div>
            <div className="table-cell city">{this.props.data[0].city}</div>
            <div className="table-cell index">{this.props.data[0].zip.toLocaleString()}</div>
            <div className="table-cell company">{this.props.data[0].company}</div>
            <div className="table-cell isAvailable">{this.props.data[0].isAvailable ? "isAvailable" : "Not available"}</div>
            <div className="table-cell phone">{this.props.data[0].phone.toLocaleString()}</div>
            <div className="table-cell politicViews">{this.props.data[0].politicViews}</div>
          </div>
        </div> 
      )
    }
  } else {
    return 'loading'
  }
}

  return (
  
this.props.isVirtualized ?
<div>
  <div>
      <a href="https://app.rs.school/course/score?course=react-2020-Q1">
        <img style={{height: 30, margin: 20}} src='https://app.rs.school/static/images/logo-rsschool3.png' alt='logo'></img>
      </a>
  </div>
<form noValidate autoComplete="off" style={{width: 1700}}>
<TextField style={{marginLeft: 50, marginRight: 10}} margin='normal' id="name" onChange={(event) => this.props.onSearch(this.props, event)} label="Search by name" variant="outlined" />
<TextField style={{marginRight: 10}} margin='normal' id="country" onChange={(event) => this.props.onSearch(this.props, event)} label="Search by country" variant="outlined" />
<TextField style={{marginRight: 10}} margin='normal' id="city" onChange={(event) => this.props.onSearch(this.props, event)} label="Search by city" variant="outlined" />
<TextField style={{marginRight: 10}} margin='normal' id="zip" onChange={(event) => this.props.onSearch(this.props, event)} label="Search by ZIP" variant="outlined" />
<TextField margin='normal' id="company" onChange={(event) => this.props.onSearch(this.props, event)} label="Search by company" variant="outlined" />
</form>
    <div>
      <FormGroup row style={{margin: 0, padding: 0, height: 30, marginBottom: 20}}>
      <FormControlLabel
        control={
          <Switch checked={this.props.isVirtualized} onClick={() => this.props.onToggleVirtualization(this.props, this.props.isVirtualized)} value="checkedB"></Switch>
        }
        label="Virtualization"
      >
      </FormControlLabel>
      </FormGroup>
    <div className='table-header'>
      <div className={clsId.join(' ')} onClick={() => this.props.onClick("id", this.props.data, this.props.initialData, this.props.sort, this.props.sorted, this.props.sortedCount, this.props.previousSortField)} style={{position: "relative"}}>ID
      <ArrowDropUpIcon style={{top: -5}} className={this.props.sorted['id'] ? clsButtonUp.join(' ') : 'sort-buttons'}/> 
      <ArrowDropDownIcon style={{top: 5}} className={this.props.sorted['id'] ? clsButtonDown.join(' ') : 'sort-buttons'}/>
      </div>
      <div className={clsFullName.join(' ')} onClick={() => this.props.onClick("fullName", this.props.data, this.props.initialData, this.props.sort, this.props.sorted, this.props.sortedCount, this.props.previousSortField)} style={{position: "relative"}}>Full name
      <ArrowDropUpIcon style={{top: -5}} className={this.props.sorted['fullName'] ? clsButtonUp.join(' ') : 'sort-buttons'}/> 
      <ArrowDropDownIcon style={{top: 5}} className={this.props.sorted['fullName'] ? clsButtonDown.join(' ') : 'sort-buttons'}/>
      </div>
      <div className={clsCountry.join(' ')} onClick={() => this.props.onClick("country", this.props.data, this.props.initialData, this.props.sort, this.props.sorted, this.props.sortedCount, this.props.previousSortField)} style={{position: "relative"}}>Country
      <ArrowDropUpIcon style={{top: -5}} className={this.props.sorted['country'] ? clsButtonUp.join(' ') : 'sort-buttons'}/> 
      <ArrowDropDownIcon style={{top: 5}} className={this.props.sorted['country'] ? clsButtonDown.join(' ') : 'sort-buttons'}/>
      </div>
      <div className={clsCity.join(' ')} onClick={() => this.props.onClick("city", this.props.data, this.props.initialData, this.props.sort, this.props.sorted, this.props.sortedCount, this.props.previousSortField)} style={{position: "relative"}}>City
      <ArrowDropUpIcon style={{top: -5}} className={this.props.sorted['city'] ? clsButtonUp.join(' ') : 'sort-buttons'}/> 
      <ArrowDropDownIcon style={{top: 5}} className={this.props.sorted['city'] ? clsButtonDown.join(' ') : 'sort-buttons'}/>
      </div>
      <div className={clsIndex.join(' ')} onClick={() => this.props.onClick("zip", this.props.data, this.props.initialData, this.props.sort, this.props.sorted, this.props.sortedCount, this.props.previousSortField)} style={{position: "relative"}}>ZIP
      <ArrowDropUpIcon style={{top: -5}} className={this.props.sorted['zip'] ? clsButtonUp.join(' ') : 'sort-buttons'}/> 
      <ArrowDropDownIcon style={{top: 5}} className={this.props.sorted['zip'] ? clsButtonDown.join(' ') : 'sort-buttons'}/>
      </div>
      <div className={clsCompany.join(' ')} onClick={() => this.props.onClick("company", this.props.data, this.props.initialData, this.props.sort, this.props.sorted, this.props.sortedCount, this.props.previousSortField)} style={{position: "relative"}}>Company
      <ArrowDropUpIcon style={{top: -5}} className={this.props.sorted['company'] ? clsButtonUp.join(' ') : 'sort-buttons'}/> 
      <ArrowDropDownIcon style={{top: 5}} className={this.props.sorted['company'] ? clsButtonDown.join(' ') : 'sort-buttons'}/>
      </div>
      <div className={clsIsAvailable.join(' ') } >
      <FormGroup row style={{margin: 0, padding: 0, height: 30}}>
      <FormControlLabel
        control={
          <Switch checked={this.props.sorted['isAvailable']} onClick={() => this.props.onClickBoolean("isAvailable", this.props.data, this.props.sort, this.props.sortedCount, this.props.sorted, this.props.previousSortField)} value="checkedA" />
        }
        label=""
      /> 
      </FormGroup>
      </div>
      <div className={clsPhone.join(' ')} onClick={() => this.props.onClick("phone", this.props.data, this.props.initialData, this.props.sort, this.props.sorted, this.props.sortedCount, this.props.previousSortField)} style={{position: "relative"}}>Phone
      <ArrowDropUpIcon style={{top: -5}} className={this.props.sorted['phone'] ? clsButtonUp.join(' ') : 'sort-buttons'}/> 
      <ArrowDropDownIcon style={{top: 5}} className={this.props.sorted['phone'] ? clsButtonDown.join(' ') : 'sort-buttons'}/>
      </div>
      <div style={{position: "relative", display: "inline-block", color: "black"}}>
      {selectComponent()}
      </div>
    </div>
    </div>
  <List
    className="table-white"
    height={600}
    width={1700}
    itemCount={this.props.data.length}
    itemSize={85}
    >
    {({ index, style }) => (
    <ComplexListItem style={style} className="table-white" index={index} />
    )}
  </List>
  </div> : notVirtualizedData
)
} 
}

function mapStateToProps(state) {
  return {
    data: state.data,
    sort: state.sort,
    sortField: state.sortField,
    sorted: state.sorted,
    sortedCount: state.sortedCount,
    initialData: state.initialData,
    previousSortField: state.previousSortField,
    isVirtualized: state.isVirtualized,
    isShift: state.isShift,
    returnData: state.returnData
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onClick: (sortField, data, initialData, sortingMethod, sorted, sortedCount, previousSortField) => dispatch(sortTable(sortField, data, initialData, sortingMethod, sorted, sortedCount, previousSortField)),
    onClickBoolean: (sortField, data, sortingMethod, sortedCount, sorted, previousSortField) => dispatch(sortTableBoolean(sortField, data, sortingMethod, sortedCount, sorted, previousSortField)),
    onClickEnum: (sortField, data, sortingMethod, sortedCount, sorted, previousSortField, event) => dispatch(sortEnum(sortField, data, sortingMethod, sortedCount, sorted, previousSortField, event)),
    onToggleVirtualization: (props, isVirtualized) => dispatch(toggleVirtualization(props, isVirtualized)),
    onSearch: (props, event) => dispatch(search(props, event)),
    onShift: (props, event, toggle) => dispatch(pushShift(props, event, toggle)),
    onSelectItem: (props, index, event) => dispatch(selectItem(props, index, event)),
    onDeleteItem: (props, index, event) => dispatch(deleteItem(props, index, event))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Table)