//37-4 Array And Object Destructuring
const numbers = [32,45,65];
const [x,y,z] = numbers;
console.log(x);
console.log(y);
console.log(z);

const [a,...b] = numbers;
console.log(a)
console.log(b)

function boxify(a,...b){
    const nums = [a,...b];
    return nums
}
console.log(boxify(4,6,5,7,8,9));

const [p,q] = boxify(7,2,1,56,77,74,65);
console.log(p)
console.log(q)

const [fist,...others] = boxify(7,2,1,56,77,74,65);
console.log(fist)
console.log(others)

const nayok = {
    name :'sakib khan',
    // naika : "mon mon"
    age :35,
    movies : ['dakar mastan',"golistaner gonda","balistaner tanda"]
}

const [firstMvy,secondMvy,thirdMvy] = nayok.movies;
console.log(firstMvy)
console.log(secondMvy)
console.log(thirdMvy)

//object destructuring:7min