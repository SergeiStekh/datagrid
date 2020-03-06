const faker = require('faker');

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

  return { users }
}

let dataObj = JSON.parse(JSON.stringify(generateUsers()));

export default dataObj