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

//object destructuring:e serial doesn't matter,key martch korlei o/p pabe otherwise undefined pabe

const {nam,boyos} = {nam:'sohel',boyos:33,isMarried:true};
console.log(nam);
console.log(boyos);

const employee = {
    id :11,
    designation : "jr developer",
    language :['html','css','js'],
    specification :{
        height :66,
        weight : 67,
        address : 'ctg',
        watch :{
            color :'black',
            price :500,
            // brand :'casio'
            brand :'casio'
        }
    }
    
}
const {id,specification} = employee;
console.log(id)
console.log(specification)



const {weight,address} = employee.specification;
console.log(weight)
console.log(address)

const {brand} = employee?.specification?.watch;
console.log(brand);