import _ from 'lodash'
const faker = require('faker');


function generateUsers() {

  let users = []

  for (let id=0; id <= 1005; id++) {

    let fullName = `${faker.name.firstName()} ${faker.name.lastName()}`;
    let country = faker.address.country();
    let city = faker.address.city();
    let zip = faker.address.zipCode();
    let company = faker.company.companyName();
    let phone = faker.phone.phoneNumber();
    let isAvailable = faker.random.boolean();

    users.push({
        "id": id,
        "fullName": fullName,
        "country": country,
        "city": city,
        "zip": zip,
        "company": company,
        "phone": phone,
        "isAvailable": isAvailable,
    });
  }

  return { users }
}

let dataObj = _.orderBy(JSON.parse(JSON.stringify(generateUsers())).users, 'id', "asc");

export default dataObj