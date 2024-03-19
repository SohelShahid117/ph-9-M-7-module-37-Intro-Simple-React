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


