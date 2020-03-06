import React, {Component} from 'react'
import { connect } from 'react-redux'

class Table extends Component {

render() {
  return (
  <table className="table">
    <thead>
    <tr>
      <th>ID</th>
      <th>Full name</th>
      <th>Country</th>
      <th>City</th>
      <th>ZIP</th>
      <th>Company</th>
      <th>isAvailable</th>
      <th>Phone</th>
    </tr>
    </thead>
    <tbody>
      {this.props.data.users.map((user, index) => {
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
    data: state.data
  }
}


export default connect(mapStateToProps, null)(Table)