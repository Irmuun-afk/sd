// function -> dahij ashiglah bolomjtoi kodnii tsugluulga
// define/uusged -> function funcName () {}
// argument/parametr-> func-iin zaaval avah utga
function hello(name,age,g) {
    console.log("hello "+name);
    console.log("I am "+age+"years old");
    console.log("bi "+g+"")
}
// call/duudaj ajluulah
hello("bat ",12,"huu");
hello("suvd",13,"ohin");
function too(too1,too2){
    console.log(too1+too2);
}
too(10,6);
too(20,151332);
function k(k1){
    console.log(k1*k1);
}
k(12);
function nas(nas1){
    if(nas1>18){
        console.log("nasand hursen");
    }else{
        console.log("huregu");
    }
}
nas(15);
// DOM->document -> html deer bga bvh code
console.log(document);
var a = document.getElementsByTagName('h1')[0];
console.log(a);
// varName.style.styleName = "value";
a.style.color="red"
// varName.innerText = "word";
a.innerText = "hello world";
var d = document.getElementsByTagName('h1')[1];
console.log(d);
d.style.color="blue"
d.innerText ="hi";
var h2 = document.getElementsByTagName('h2')[0];
function c(){
   h2.style.color="green";
   h2.innerText="changed";
}
var input = document.getElementsByTagName('input')[0];
var p = document.getElementsByTagName('p')[0];
var p1 = document.getElementsByTagName('p1')[0];
console.log(p);
console.log(input);
function findYear (){
    // .value -> input deer bichsen utga
    // alert(input.value);
    var year = 2024-input.value;
    p.innerText="year birth year:"+year;
    var ten = parseInt(input.value) + 10;
    if(input.value>120){
        p.style.color="red";
        p.innerText="aztai bn";
    }else if(input.value<0){
        p.innerText="ta azgu bn";
    }else{
        p.innerText="Your birth year:"+year;
    }
}