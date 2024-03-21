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