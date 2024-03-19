// 37-1 Six JavaScript Fundamentals That You Need To Know
// 1.let,const,var
// 2.condition
// 3.if-else if - else
// 4.array 
// 5.array index

const num = [10,22,34,55];
console.log(num);
num[0] = 43;
console.log(num)

// 6.for loop
for(let i =0 ; i<num.length;i++){
    console.log(num[i]);
}

// 7.function
// 8.object


function mul(a,b){
    const mull = a*b;
    return mull;
}
const gonfol = mul(4,5);
console.log(gonfol)

const nayok = {
    name :'sakib khan',
    // naika : "mon mon"
    age :35,
    movies : ['dakar mastan',"golistaner gonda","balistaner tanda"]
}
console.log(nayok)
console.log(nayok.name)
// console.log(nayok[name])
console.log(nayok['name'])
// console.log(nayok[age])
console.log(nayok['age'])