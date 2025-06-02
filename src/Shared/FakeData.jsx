import {faker} from '@faker-js/faker'

// This function creates a random list of items with the given length
// Each item has a name, description, location, condition, category and price

const condition=[
    'New',
    'Like New',
    'Used',
    'Good',
    'Fair',
]

const location=[
    'North York',
    'Brampton',
    'Mississauga',
    'Scarborough',
    'Etobicoke'
]

function createRandomList() {
    return {
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        location: location[Math.floor(Math.random() * location.length)],
        condition: condition[Math.floor(Math.random() * condition.length)],
        category: faker.commerce.department(),
        price: faker.commerce.price(100, 500, 0),
        image:'./placeholder.jpg'
    };
}

const List = faker.helpers.multiple(createRandomList, {
    count: 10
})
export default {List}
