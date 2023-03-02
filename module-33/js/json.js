const shop = {
  owner: 'Alia',
  address: {
    street: 'kochukhet voot er goli',
    city: 'ranbir',
    country: 'BD'
  },
product: ['laptop', 'mic', 'monitor', 'keyboard'],
revenue: 45000,
isOpen: true,
  isNew: false
};

console.log(shop);

const shopJSON = JSON.stringify(shop);
console.log(shopJSON);

const shopObj = JSON.parse(shopJSON);
console.log(shopObj)


// -------------------result-----------------------


// {
//   owner: 'Alia',
//   address: { street: 'kochukhet voot er goli', city: 'ranbir', country: 'BD' },
//   product: [ 'laptop', 'mic', 'monitor', 'keyboard' ],       
//   revenue: 45000,
//   isOpen: true,
//   isNew: false
// }


// {"owner":"Alia","address":{"street":"kochukhet voot er goli","city":"ranbir","country":"BD"},"product":["laptop","mic","monitor","keyboard"],"revenue":45000,"isOpen":true,"isNew":false}

// {
//     owner: 'Alia',
//     address: { street: 'kochukhet voot er goli', city: 'ranbir', country: 'BD' },
//     product: [ 'laptop', 'mic', 'monitor', 'keyboard' ],       
//     revenue: 45000,
//     isOpen: true,
//     isNew: false
//   }

// -------------------------------------------------------------------