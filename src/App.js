import React from 'react';

//Задание 1
const array = [22, 0, -45, 1001, 8, -6, -0.1, 101, 2.5, -55555];
const positive = array.filter((item)=>{
    return item > 0
})


//Задание 2
const messages = [
    {message: 'hello', error: true},
    {message: 'javascript', error: false},
    {message: 'intocode', error: true},
    {message: 'react', error: true},
    {message: 'angular', error: false},
    {message: 'es6', error: false},
];

const resultMes = messages.filter((item)=>{
    return item.error === false
})
console.log(resultMes)

//Задание 3
const words = ['intocode', 'js', 'react', 'css', 'angular', 'bootstrap', 'html'];
const resultWords = words.map((item)=>{
    if (item.length < 5){
        return "*"
    }else {
        return item
    }
});
console.log(resultWords)


//Задание 4


//Задание 4.1
// function sendMessage(message) {
//     /*
//     * тут какой-то большой код для отправки сообщения
//     */
// }

let sendMessage = ((message) =>{
    return "Тут какой-то код!"

})


//Задание 4.2
// function half(number) {
//     return number / 2;
// }

let half = number => number / 2;

console.log(half(20));

//Задание 4.3
// function showConsole() {
//     console.log('intocode');
// }

let showConsole = (()=> console.log('intocode'));
showConsole()

//Задание 4.4
// function concatWords(first, second) {
//     return first + second;
// }
let concatWords = (first, second)=> first + second;
console.log(concatWords(12, 190));

//Задание 5

//Задание 5.1
//const justText = () => 'intocode';
function justText(){
    return 'intocode'
}




//Задание 5.2
//const logging = text => console.log(text);
function logging(text){
    console.log(text)
}

//Задание 5.3
// const add = (x,y) => {
//     const z = 3;
//
//     return z * x * y;
// }

function add(x,y){
    const z = 3
    return z * x * y
}

console.log(add(20, 10))

//Задание 5.4
const onlyPositive = (number) => {
    if(number < 0) {
        return false;
    }

    return true;
}

function App(props) {
    return (
        <div>
            {positive}
        </div>
    );
}


export default App;