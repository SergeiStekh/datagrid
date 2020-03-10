import _ from 'lodash'
const faker = require('faker');


function generateUsers() {

  let users = []
  let politicViews = ["communist", "democrat", "republican"];

  for (let id=0; id <= 1005; id++) {

    let fullName = `${faker.name.firstName()} ${faker.name.lastName()}`;
    let country = faker.address.country();
    let city = faker.address.city();
    let zip = faker.address.zipCode();
    let company = faker.company.companyName();
    let phone = faker.phone.phoneNumber();
    let isAvailable = faker.random.boolean();
    let randomPoliticViews = politicViews[(Math.random() * politicViews.length).toFixed(0)] || politicViews[0];

    users.push({
        "id": id,
        "fullName": fullName,
        "country": country,
        "city": city,
        "zip": zip,
        "company": company,
        "phone": phone,
        "isAvailable": isAvailable,
        "politicViews": randomPoliticViews
    });
  }

  return { users }
}

let dataObj = _.orderBy(JSON.parse(JSON.stringify(generateUsers())).users, 'id', "asc");

export default dataObj