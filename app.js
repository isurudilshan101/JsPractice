let val;
val=document.all[4];
val=document.all.length;
val=document.domain;
val=document.URL;
val=document.characterSet;
val=document.forms;
val=document.forms[0];
val=document.forms[0].id;
val=document.forms[0].method;
val=document.forms[0].action;

val=document.links;
val=document.links[0];
val=document.links[0].id;
val=document.links[0].className;

val=document.images;

val=document.scripts;
val=document.scripts[2].getAttribute('src');

let scripts=document.scripts;

let scriptsArr=Array.from(scripts);
scriptsArr.forEach(function(script)
{
    console.log(script);
});

console.log(val)


 

 