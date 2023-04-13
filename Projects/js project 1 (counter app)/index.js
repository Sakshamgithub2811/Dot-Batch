const countValue = document.querySelector('#counter');
console.log(countValue);

const increment = () =>{
    let value = parseInt(countValue.innerText);
    value = value+1;
    countValue.innerText = value;

};

const decrement = () =>{
    let value = parseInt(countValue.innerText);
    value = value-1;
    countValue.innerText = value;

};