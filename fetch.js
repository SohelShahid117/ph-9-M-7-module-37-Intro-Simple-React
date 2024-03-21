// 37-5 JSON, Fetch, Keys, Values, Array Add Or Remove Using Dots

const nayok = {
    name :'sakib khan',
    // naika : "mon mon"
    age :35,
    movies : ['dakar mastan',"golistaner gonda","balistaner tanda"]
}

const nayokJSON = JSON.stringify(nayok);
console.log(nayok)
console.log(nayokJSON);

const nayokJSONObj = JSON.parse(nayokJSON);
console.log(nayokJSONObj)

const url = 'https://jsonplaceholder.typicode.com/posts/1/comments';
fetch(url)
// .then((res)=>res.JSON()) //TypeError: res.JSON is not a function
.then((res)=>res.json())
.then((data)=>console.log(data)
    //     data.forEach((elemnt)=>{
    //     console.log(elemnt);
    // })
)
// data.forEach((elemnt)=>{
//     console.log(elemnt);
// })

const keysss = Object.keys(nayok)
console.log('keys are :',keysss)
const valusss = Object.values(nayok)
console.log('values are :',valusss)

const num = [12,32,34,76,65];
console.log(num)
num.forEach((n)=>{
    console.log(n*2);
});
num.map((n)=>{
    console.log(n+2)
})

//for of =>apply in array or array like object
//for in =>apply in object property



const  products = [                         //array of object
    {name:'laptop',price:32,brand:'hp'},
    {name:'camera',price:12,brand:'canon'},
    {name:'desktop',price:222,brand:'dell'},
    {name:'phone',price:18,brand:'iPhone'}
]
console.log(products)

const newPrdct = {name:'webcam',price:122,brand:'lal'}
const updateProduct = [...products,newPrdct];
console.log(updateProduct)

//create new array without camera & phone;
const prdctWithoutCameraAndPhone = updateProduct.filter((elemnt)=>elemnt.name !=='phone' && elemnt.name !=='camera');
console.log(prdctWithoutCameraAndPhone)