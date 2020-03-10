import React, {Component} from 'react'
import { connect } from 'react-redux'
import { sortTable, sortTableBoolean } from '../actions/actions'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import './table.css'

class Table extends Component {

render() {
  let clsButtonUp = ['sort-buttons']
  let clsButtonDown = ['sort-buttons']
  
  if (this.props.sorted[this.props.sortField]) {
  if (this.props.sort === 'asc') {
    clsButtonDown.push('arrow-red')
  } else {
    clsButtonUp.push('arrow-red')
  }
  }
console.log(this.props)
  return (
  <table className="table">
    <thead>
    <tr>
      <th onClick={() => this.props.onClick("id", this.props.data, this.props.initialData, this.props.sort, this.props.sorted, this.props.sortedCount, this.props.previousSortField)} style={{position: "relative"}}>ID
      <ArrowDropUpIcon style={{top: 5}} className={this.props.sorted['id'] ? clsButtonUp.join(' ') : 'sort-buttons'}/> 
      <ArrowDropDownIcon style={{bottom: 5}} className={this.props.sorted['id'] ? clsButtonDown.join(' ') : 'sort-buttons'}/>
      </th>
      <th onClick={() => this.props.onClick("fullName", this.props.data, this.props.initialData, this.props.sort, this.props.sorted, this.props.sortedCount, this.props.previousSortField)} style={{position: "relative"}}>Full name
      <ArrowDropUpIcon style={{top: 5}} className={this.props.sorted['fullName'] ? clsButtonUp.join(' ') : 'sort-buttons'}/> 
      <ArrowDropDownIcon style={{bottom: 5}} className={this.props.sorted['fullName'] ? clsButtonDown.join(' ') : 'sort-buttons'}/>
      </th>
      <th onClick={() => this.props.onClick("country", this.props.data, this.props.initialData, this.props.sort, this.props.sorted, this.props.sortedCount, this.props.previousSortField)} style={{position: "relative"}}>Country
      <ArrowDropUpIcon style={{top: 5}} className={this.props.sorted['country'] ? clsButtonUp.join(' ') : 'sort-buttons'}/> 
      <ArrowDropDownIcon style={{bottom: 5}} className={this.props.sorted['country'] ? clsButtonDown.join(' ') : 'sort-buttons'}/>
      </th>
      <th onClick={() => this.props.onClick("city", this.props.data, this.props.initialData, this.props.sort, this.props.sorted, this.props.sortedCount, this.props.previousSortField)} style={{position: "relative"}}>City
      <ArrowDropUpIcon style={{top: 5}} className={this.props.sorted['city'] ? clsButtonUp.join(' ') : 'sort-buttons'}/> 
      <ArrowDropDownIcon style={{bottom: 5}} className={this.props.sorted['city'] ? clsButtonDown.join(' ') : 'sort-buttons'}/>
      </th>
      <th onClick={() => this.props.onClick("zip", this.props.data, this.props.initialData, this.props.sort, this.props.sorted, this.props.sortedCount, this.props.previousSortField)} style={{position: "relative"}}>ZIP
      <ArrowDropUpIcon style={{top: 5}} className={this.props.sorted['zip'] ? clsButtonUp.join(' ') : 'sort-buttons'}/> 
      <ArrowDropDownIcon style={{bottom: 5}} className={this.props.sorted['zip'] ? clsButtonDown.join(' ') : 'sort-buttons'}/>
      </th>
      <th onClick={() => this.props.onClick("company", this.props.data, this.props.initialData, this.props.sort, this.props.sorted, this.props.sortedCount, this.props.previousSortField)} style={{position: "relative"}}>Company
      <ArrowDropUpIcon style={{top: 5}} className={this.props.sorted['company'] ? clsButtonUp.join(' ') : 'sort-buttons'}/> 
      <ArrowDropDownIcon style={{bottom: 5}} className={this.props.sorted['company'] ? clsButtonDown.join(' ') : 'sort-buttons'}/>
      </th>
      <FormGroup row style={{marginTop: 12}}>
      <FormControlLabel
        control={
          <Switch checked={this.props.sorted['isAvailable']} onClick={() => this.props.onClickBoolean("isAvailable", this.props.data, this.props.sort, this.props.sortedCount, this.props.sorted, this.props.previousSortField)} value="checkedA" />
        }
        label=""
      /> 
      </FormGroup>
      <th onClick={() => this.props.onClick("phone", this.props.data, this.props.initialData, this.props.sort, this.props.sorted, this.props.sortedCount, this.props.previousSortField)} style={{position: "relative"}}>Phone
      <ArrowDropUpIcon style={{top: 5}} className={this.props.sorted['phone'] ? clsButtonUp.join(' ') : 'sort-buttons'}/> 
      <ArrowDropDownIcon style={{bottom: 5}} className={this.props.sorted['phone'] ? clsButtonDown.join(' ') : 'sort-buttons'}/>
      </th>
    </tr>
    </thead>
    <tbody>
      {this.props.data ? this.props.data.map((user, index) => {
        return (<tr key={index}>
          <td>{user.id.toLocaleString()}</td>
          <td>{user.fullName}</td>
          <td>{user.country}</td>
          <td>{user.city}</td>
          <td style={{textAlign: "right"}}>{user.zip.toLocaleString()}</td>
          <td>{user.company}</td>
          <td>{user.isAvailable ? "isAvailable" : "Not available"}</td>
          <td style={{textAlign: "right"}}>{user.phone.toLocaleString()}</td>
        </tr>)
      }) : <div>Loading data</div>}
    </tbody>
  </table>
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
    previousSortField: state.previousSortField
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onClick: (sortField, data, initialData, sortingMethod, sorted, sortedCount, previousSortField) => dispatch(sortTable(sortField, data, initialData, sortingMethod, sorted, sortedCount, previousSortField)),
    onClickBoolean: (sortField, data, sortingMethod, sortedCount, sorted, previousSortField) => dispatch(sortTableBoolean(sortField, data, sortingMethod, sortedCount, sorted, previousSortField))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Table)