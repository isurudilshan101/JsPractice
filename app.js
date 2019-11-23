// let val;
// val=document.all[4];
// val=document.all.length;
// val=document.domain;
// val=document.URL;
// val=document.characterSet;
// val=document.forms;
// val=document.forms[0];
// val=document.forms[0].id;
// val=document.forms[0].method;
// val=document.forms[0].action;

// val=document.links;
// val=document.links[0];
// val=document.links[0].id;
// val=document.links[0].className;

// val=document.images;

// val=document.scripts;
// val=document.scripts[2].getAttribute('src');

// // let scripts=document.scripts;

// // let scriptsArr=Array.from(scripts);
// // scriptsArr.forEach(function(script)
// // {
// //     console.log(script.getAttribute('src'));
// // });


// console.log(val)


 ////selection
 //document.getelementById()

//  console.log(document.getElementById('task-title'));

//  //get thigs from the element

//  console.log(document.getElementById('task-title').id);

////changing Styling

//  const taskTitle=document.getElementById('task-title');

// document.getElementById('task-title').style.background='#333';
// document.getElementById('task-title').style.color='#fff';
//  document.getElementById('task-title').style.padding='5px';

//  //change the content
//  document.getElementById('task-title').textContent='Task List';
//  document.getElementById('task-title').innerText='My Tasks';
//  taskTitle.innerHTML='<span style="color:blue">Task List</span>';


////document.querySelector()

// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));

// document.querySelector('li').style.color='red';
// document.querySelector('ul li').style.color='blue';

// document.querySelector('li:last-child').style.color='yello';
// document.querySelector('li:nth-child(3)').style.color='red';
// document.querySelector('li:nth-child(4)').textContent='hello world';
// document.querySelector('li:nth-child(odd)').style.background='#ccc';


////document.getElimentByClassName

const items=document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[0]);
items[0].style.color='red';
items[3].textContent='helo';

///////////////////////////////const listItems=document.querySelector('ul').getElementsByClassName('collection-item');
console.log(listItems);