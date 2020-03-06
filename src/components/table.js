import React, {Component} from 'react'
import { connect } from 'react-redux'
import sort, { sortTable } from '../actions/actions'

class Table extends Component {

render() {
  console.log(this.props)
  return (
  <table className="table">
    <thead>
    <tr>
      <th onClick={() => this.props.onClick("id", this.props.data, this.props.sort)}>ID</th>
      <th onClick={() => this.props.onClick("fullName",this.props.data, this.props.sort)}>Full name</th>
      <th onClick={() => this.props.onClick("country",this.props.data, this.props.sort)}>Country</th>
      <th onClick={() => this.props.onClick("city",this.props.data, this.props.sort)}>City</th>
      <th onClick={() => this.props.onClick("zip",this.props.data, this.props.sort)}>ZIP</th>
      <th onClick={() => this.props.onClick("company",this.props.data, this.props.sort)}>Company</th>
      <th onClick={() => this.props.onClick("isAvailable",this.props.data, this.props.sort)}>isAvailable</th>
      <th onClick={() => this.props.onClick("phone",this.props.data, this.props.sort)}>Phone</th>
    </tr>
    </thead>
    <tbody>
      {this.props.data.map((user, index) => {
        return (<tr key={index}>
          <td>{user.id}</td>
          <td>{user.fullName}</td>
          <td>{user.country}</td>
          <td>{user.city}</td>
          <td>{user.zip}</td>
          <td>{user.company}</td>
          <td>{user.isAvailable}</td>
          <td>{user.phone}</td>
        </tr>)
      })}
    </tbody>
  </table>
)
} 
}


function mapStateToProps(state) {
  return {
    data: state.data,
    sort: state.sort,
    sortField: state.sortField
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onClick: (sortField, data, sortingMethod) => dispatch(sortTable(sortField, data, sortingMethod))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Table)