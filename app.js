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

// localStorage.setItem('name','isuru');
// //sessionStorage.setItem('df','fg')
// localStorage.setItem('age','39');

// const name=localStorage.getItem('name');
// const age=localStorage.getItem('age');
// console.log(name,age);

// document.getElementById()

// console.log(document.getElementById('task-title'));

// // Get things from the element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// const taskTitle = document.getElementById('task-title');

// // Change styling
// taskTitle.style.background = '#333';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '5px';
// // taskTitle.style.display = 'none';

// // Change content
// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'My Tasks';
// taskTitle.innerHTML = '<span style="color:red">Task List</span>';

// document.querySelector()

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';

document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(4)').textContent = 'Hello World';
document.querySelector('li:nth-child(odd)').style.background = '#ccc';
document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';






