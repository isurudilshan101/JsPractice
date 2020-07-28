// alert('Hi welcome to the jsss');




// const squre=function(x){
//     return x*x;
// }

// console.log(squre(8));

// function greet(firstName,lastName){
//      return firstName+ ' ' + lastName;
//    // console.log('isuru');
// }

// console.log(greet('isuru','dilshan'));


// //immidiately invokeble functions expressions
// (function(name){
//     console.log('hello'+' '+name);
   
// })('isuru');

// //property methods
// const todo={
//     add:function(){
//         console.log('Add todo...');
//     },

//     delete:function(id){
//         console.log(`delete ${id}`);
//     }
// }

// todo.add();
// todo.delete(10);

//prompt
// const input=prompt();
// alert(input);

// //confirm
// //Event bubbling

// document.querySelector('.card-title').addEventListener('click',
// function(){
//     console.log('card title');
// });

localStorage.setItem('name','John');
//sessionStorage.setItem('df','fg')
localStorage.setItem('age','30');

const name=localStorage.getItem('name');
const age=localStorage.getItem(age);
console.log(name,age);