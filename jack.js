
// let firstcard = Math.floor((Math.random() * 10 +2)); 
// let secondcard = Math.floor((Math.random() * 10 +2)); 
// let sum = firstcard+secondcard;
let counter =0;
let sum=0;
let cardd=[0,1];
document.getElementById("message").textContent;
document.querySelector("#summ").textContent;
document.querySelector("#cardss").textContent;
document.getElementById("pla").textContent;
let details = {
    name: "Nayak",
    chips: 100
}
function getrandom(){
 let rand = Math.floor(Math.random() * 13) +1;
 if(rand==1){
    return 11;
 }
 else if(rand>10){
  return 10;
 }
 else{
  return rand;
 }
}
function game(){
    counter++;
    cardd[0] = getrandom();
    cardd[1] = getrandom();
 sum = cardd[0]+cardd[1];
 check();
 summ.textContent="Sum: "+sum;
cardss.textContent="Cards: "+cardd[0]+", "+cardd[1];
pla.textContent= details.name+": $"+details.chips;
}
function check(){
if(sum<21){
    message.textContent="Are you ready to draw new card?";
}
else if(sum===21){
    message.textContent="Congrats!!! You win👑";
    details.chips+=50;
    pla.textContent= details.name+": $"+details.chips;
}
else{
    message.textContent="Better Luck Next Time😭";
    sum=0;
    summ.textContent="Sum: ";
    cardss.textContent="Cards: ";
    counter=0;
    details.chips-=20;
    pla.textContent= details.name+": $"+details.chips;
}
}


function newcardd(){
    if(counter!=0){
    let newcard = getrandom();
    cardd.push(newcard);
    cardss.textContent+=", "+cardd[cardd.length-1];
    sum=sum+cardd[cardd.length-1];
    console.log(sum);
    summ.textContent="Sum: "+sum;
    check();}
}