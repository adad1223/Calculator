let ae=[1,'+',3];
const d1=document.getElementById('g');
const d2=document.getElementById('2');
const d3=document.getElementById('3');
const d4=document.getElementById('4');
const d5=document.getElementById('5');
const d6=document.getElementById('6');
const d7=document.getElementById('7');
const d8=document.getElementById('8');
const d9=document.getElementById('9');
const dp=document.getElementById('+');
const ds=document.getElementById('-');
const dm=document.getElementById('*');
const dd=document.getElementById('/');
const de=document.getElementById('=');
const input=document.getElementById('in');
// console.log('hi');
d1.addEventListener("click", x);
d2.addEventListener('click',z);
d3.addEventListener('click',b);
d4.addEventListener('click',c);
d5.addEventListener('click',d);
d6.addEventListener('click',e);
d7.addEventListener('click',f);
d8.addEventListener('click',g);
d9.addEventListener('click',h);
dp.addEventListener('click',y);
ds.addEventListener('click',i);
dm.addEventListener('click',j);
dd.addEventListener('click',k);
de.addEventListener('click',a);
// console.log('hi');
function x(){
    input.value+=1;
    // x[0]=1;
}

function z(){
    input.value+=2;
    // x[2]=2;
}
function b(){
    input.value+=3;
    // x[2]=2;
}
function c(){
    input.value+=4;
    // x[2]=2;
}
function d(){
    input.value+=5;
    // x[2]=2;
}
function e(){
    input.value+=6;
    // x[2]=2;
}
function f(){
    input.value+=7;
    // x[2]=2;
}
function g(){
    input.value+=8;
    // x[2]=2;
}
function h(){
    input.value+=9;
    // x[2]=2;
}

function a(){
    let num=0;
    if (input.value.indexOf("+") !== -1){
        // input.value=parseInt(input.value);
        for(let i=input.value.indexOf("+")+1;i<input.value.length;i++){
            // let num=0;
             num+=input.value[i];

        }
        xx=parseInt(num);
        input.value=parseInt(input.value)+xx;

    }
    else if (input.value.indexOf("-") !== -1){
        // input.value=parseInt(input.value);
        for(let i=input.value.indexOf("-")+1;i<input.value.length;i++){
            // let num=0;
             num+=input.value[i];

        }
        xx=parseInt(num);
        input.value=parseInt(input.value)-xx;

    }
    else if (input.value.indexOf("*") !== -1){
        // input.value=parseInt(input.value);
        for(let i=input.value.indexOf("*")+1;i<input.value.length;i++){
            // let num=0;
             num+=input.value[i];

        }
        xx=parseInt(num);
        input.value=parseInt(input.value)*xx;

    }
    else if (input.value.indexOf("/") !== -1){
        // input.value=parseInt(input.value);
        for(let i=input.value.indexOf("/")+1;i<input.value.length;i++){
            // let num=0;
             num+=input.value[i];

        }
        xx=parseInt(num);
        input.value=parseInt(input.value)/xx;

    }
}

function y(){
    input.value+='+';
    // x[1]='+';
}
function i(){
    input.value+='-';
    // x[1]='+';
}
function j(){
    input.value+='*';
    // x[1]='+';
}
function k(){
    input.value+='/';
    // x[1]='+';
}