alert('Hi welcome to the jsss');


const squre=function(x){
    return x*x;
}

console.log(squre(8));

function greet(firstName,lastName){
     return firstName+ ' ' + lastName;
   // console.log('isuru');
}

console.log(greet('isuru','dilshan'));

(function(name){
    console.log('hello'+' '+name);
   
})('isuru');

const todo={
    add:function(){
        console.log('Add todo...');
    },

    delete:function(id){
        console.log(`delete ${id}`);
    }
}

todo.add();
todo.delete(10);