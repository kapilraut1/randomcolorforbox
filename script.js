let boxes=document.getElementsByClassName("box");

function RandomColor(){
    let v1= Math.ceil(0 + Math.random()*255);
    let v2= Math.ceil(0 + Math.random()*255);
    let v3= Math.ceil(0 + Math.random()*255);
    return (`rgb(${v1}, ${v2}, ${v3})`);
}
function ran(){
    let v1= Math.floor(0 + Math.random()*255);
    let v2= Math.floor(0 + Math.random()*255);
    let v3= Math.floor(0 + Math.random()*255);
    return (`rgb(${v1}, ${v2}, ${v3})`);
}
Array.from(boxes).forEach((e)=>{
    e.style.backgroundColor= RandomColor();
    e.style.color= ran();
})