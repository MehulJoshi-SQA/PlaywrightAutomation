const { faker } = require('@faker-js/faker');

function generateRandomUser() {

    const firstName = `Test_${faker.person.firstName()}`;
    const lastName = `Test_${faker.person.lastName()}`;

    const email = faker.internet.email(firstName, lastName);
    const phoneNumber = faker.phone.number({style: 'international'});
    
    const password =  faker.internet.password(10, false, /[a-zA-Z0-9!@#$%^&*()_+]/);
 
    return {
        firstName, lastName, email, phoneNumber, password
    };
}

module.exports = { generateRandomUser };