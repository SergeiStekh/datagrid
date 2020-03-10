import React, {Component} from 'react'
import Table from './components/table'
import _ from 'lodash'

export default class App extends Component {

render() {
  return (
    <div className="container">
      <a href="https://app.rs.school/course/score?course=react-2020-Q1">
        <img style={{height: 30, margin: 20}} src='https://app.rs.school/static/images/logo-rsschool3.png'></img>
      </a>
      <Table />
    </div>
)
}
}
