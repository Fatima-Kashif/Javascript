const increasebtn=document.getElementById("increase");
const decreasebtn=document.getElementById("decrease");
const resetbtn=document.getElementById("reset");
const countLabel=document.getElementById("count");
let count=0;
increasebtn.onclick=function(){
    count++;
    countLabel.textContent=count;
}
decreasebtn.onclick=function(){
    count--;
    countLabel.textContent=count;
}
resetbtn.onclick=function(){
   count=0;
   countLabel.textContent=count;
}