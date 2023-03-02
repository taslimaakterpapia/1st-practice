
const fish = {
name: 'king Hilsa',
address: 'chandpur',
color:'silver',
phone: '01478522369',
price: 4000


}

// const phone = fish.phone;
// const color = fish.color;
// const price = fish.price;

const {phone}= fish;

console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);



const {address} = fish;
console.log(address);







const {age, name} = {name: 'Alam', age: 56, profession: 'makeup artist'}
console.log(age);

// array destructuring

const [ ] = [44, 99, 88, 456];
console.log(first, another);

// -------------------------------
const nayok = ['sakib', 'bappi', 'raj' ];
const [king, lost, notun] = nayok;
console.log(notun);

// ------------------------------

function getname(){
    return['alim', 'halim' ];

}

const [baba, kaka] = getname();
console.log(baba, kaka);