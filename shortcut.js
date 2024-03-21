//37-6 (Advanced) Truthy, Falsy, Ternary Operator, Shortcut And Or
//truthy : [],{},'hi',5
//falsy :'',0,false,null,undefined

let money = 0;
console.log(!!money)

if(!money){
    console.log('drinks khao')
}
let taka = 100;
// let taka = 0;
if(taka){
    console.log(`tomar kache ${taka} taka ache`);
}

let food = taka>80 ? `biriani kaho` : `cha-biscuit khao`;
console.log(food);

let drinks = (taka>50 && money >100)? `cocke khao` : 'mineral water khao';
console.log(drinks);
// 8 min

//num to string
const num1 = 44;
console.log(typeof num1,num1)
const num1String = 44 + '';
console.log(typeof num1String,num1String)

const strNum = '65';
console.log(typeof strNum,strNum)
// const strToNum = parseFloat('65');
const strToNum = +'65';
console.log(typeof strToNum,strToNum)


let isActive = true;
// const isActive = false;
const showUser = () =>{
    console.log('show user ')
}
const hideUser = () =>{
    console.log('hide user ')
}
isActive?showUser():hideUser();

isActive && showUser(); //left true takle right execute hobe
isActive || showUser(); //left false takle right execute hobe

//toggle boolean
isActive = !isActive;
console.log(isActive)