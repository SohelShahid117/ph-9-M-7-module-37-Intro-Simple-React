//37-7 Explore Localstorage And Session Storage With JSON
// localStorage.setItem('userId',0902117)

const addToStorage=()=>{
    // alert('hi')
    const storageId = document.getElementById('storage-id');
    // console.log(storageId)
    const id = storageId.value;
    // console.log(id);
    const storageValue = document.getElementById('storage-value');
    // console.log(storageValue);
    const valooo = storageValue.value;

    localStorage.setItem(id,valooo);
    storageId.value = '';
    storageValue.value = '';
}

const pen = [5,7,12];
localStorage.setItem('pen',JSON.stringify(pen));
const std = {
    name :'sohel',
    id : 117
}
localStorage.setItem('std',JSON.stringify(std));
// const strdItem = localStorage.getItem(std);
// console.log(strdItem)

// JSON.stringify();--->string akare data rakbo
// JSON.parse()----->string data k object korbo