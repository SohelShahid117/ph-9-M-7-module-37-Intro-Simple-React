// 37-2 Template String, Arrow Function, Spread Operator
// 1.template string 

const num = [10,22,34,55];
const nayok = {
    name :'sakib khan',
    // naika : "mon mon"
    age :35,
    movies : ['dakar mastan',"golistaner gonda","balistaner tanda"]
}

const moviesLength = nayok.movies.length;

const aboutNayok = `my name is ${nayok.name}.my age is ${nayok.age}.my last movie is ${nayok.movies[moviesLength - 1]}`
console.log(aboutNayok);

// 2.arrow function 

const getFifty = () => 50;
// console.log(getFifty)
console.log(getFifty())

const getSixtyPlus = (x) =>x + 60
console.log(getSixtyPlus(20))

const isEven = (x) => x%2===0;
console.log(isEven(5))
console.log(isEven(8))

const addThree=(x,y,z)=>x+y+z;
console.log(addThree(5,6,7));

const addNum = (a,b) =>{
    const sum = a+b;
    return sum
}
console.log(addNum(6,7));

const newNumbers = num;
console.log(num)
console.log(newNumbers)

num.push(66);
console.log(num)
console.log(newNumbers)


const sprdNewNumber = [...num];
console.log(num)
console.log(sprdNewNumber)

num.push(69);
console.log(num)
console.log(sprdNewNumber)


const newSprdNumber = [...num,99,89,79];
console.log(num);
console.log(newSprdNumber)

num.push(854)
console.log(num);
console.log(newSprdNumber)


const  products = [
    {name:'laptop',price:32,brand:'hp'},
    {name:'camera',price:12,brand:'canon'},
    {name:'desktop',price:222,brand:'dell'},
    {name:'phone',price:18,brand:'iPhone'}
]
console.log(products)

const brands = products.map((prdct)=>prdct.brand); //map------>noton akti array dibe
console.log(brands)

// protiti object alada pete chaile forEach use koron
products.forEach(prdct =>console.log(prdct))
products.forEach(prdct =>console.log(prdct.name))

products.forEach(p=>{
    let x = p.price;
    console.log(x)
})

//filter:condition fulfil kore new array return korbe
const sostaProduct = products.filter(prdct => prdct.price<20);
console.log(sostaProduct)

//find:condition fulfil kore new array return korbe--only prothom element t dibe
const firstSostaProduct = products.find(prdct => prdct.price<20);
console.log(firstSostaProduct)

const pCharecter = products.filter(prdct => prdct.name.includes('p'));
console.log(pCharecter)


