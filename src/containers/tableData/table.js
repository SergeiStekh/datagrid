import React, {Component} from 'react'
const faker = require('faker');

export default class Table extends Component {

render() {
  function generateUsers() {

    let users = []
  
    for (let id=0; id <= 1000; id++) {
  
      let fullName = `${faker.name.firstName()} ${faker.name.lastName()}`;
      let country = faker.address.country();
      let city = faker.address.city();
      let zip = faker.address.zipCode();
      let company = faker.company.companyName();
      let isAvailable = faker.random.boolean();
      let phone = faker.phone.phoneNumber();
  
      users.push({
          "id": id,
          "fullName": fullName,
          "country": country,
          "city": city,
          "zip": zip,
          "company": company,
          "isAvailable": isAvailable,
          "phone": phone
      });
    }
  
    return { "data": users }
  }
  
  let dataObj = JSON.parse(JSON.stringify(generateUsers()));
  
  console.log(dataObj.data)
  

  if (dataObj) {
  return (
  <table>
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
      {dataObj.data.map((user, index) => {
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
} else {
  return <h1>Loading</h1>
}
}
}
