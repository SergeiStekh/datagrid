import React, {Component} from 'react'
import { connect } from 'react-redux'
import { sortTable } from '../actions/actions'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import './table.css'

class Table extends Component {

render() {
  let clsButtonUp = ['sort-buttons']
  let clsButtonDown = ['sort-buttons']
  
  if (this.props.sorted['id']) {
  if (this.props.sort === 'asc') {
    clsButtonDown.push('arrow-red')
  } else {
    clsButtonUp.push('arrow-red')
  }
  }

  return (
  <table className="table">
    <thead>
    <tr>
      <th onClick={() => this.props.onClick("id", this.props.data, this.props.initialData, this.props.sort, this.props.sorted, this.props.sortedCount)} style={{position: "relative"}}>ID
      <ArrowDropUpIcon style={{top: 5}} className={clsButtonUp.join(' ')}/> 
      <ArrowDropDownIcon style={{bottom: 5}} className={clsButtonDown.join(' ')}/>
      </th>
      <th onClick={() => this.props.onClick("fullName", this.props.data, this.props.initialData, this.props.sort, this.props.sorted, this.props.sortedCount)}>Full name</th>
      <th onClick={() => this.props.onClick("country", this.props.data, this.props.initialData, this.props.sort, this.props.sorted, this.props.sortedCount)}>Country</th>
      <th onClick={() => this.props.onClick("city", this.props.data, this.props.initialData, this.props.sort, this.props.sorted, this.props.sortedCount)}>City</th>
      <th onClick={() => this.props.onClick("zip", this.props.data, this.props.initialData, this.props.sort, this.props.sorted, this.props.sortedCount)}>ZIP</th>
      <th onClick={() => this.props.onClick("company", this.props.data, this.props.initialData, this.props.sort, this.props.sorted, this.props.sortedCount)}>Company</th>
      <th onClick={() => this.props.onClick("isAvailable", this.props.data, this.props.initialData, this.props.sort, this.props.sorted, this.props.sortedCount)}>isAvailable</th>
      <th onClick={() => this.props.onClick("phone", this.props.data, this.props.initialData, this.props.sort, this.props.sorted, this.props.sortedCount)}>Phone</th>
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
          <td>{user.isAvailable ? "Yes" : "No"}</td>
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
    initialData: state.initialData
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onClick: (sortField, data, initialData, sortingMethod, sorted, sortedCount) => dispatch(sortTable(sortField, data, initialData, sortingMethod, sorted, sortedCount))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Table)