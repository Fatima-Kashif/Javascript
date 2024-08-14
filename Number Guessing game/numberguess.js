const min=1;
const max=100;
let answer= Math.floor(Math.random()*(max-min+1)+min)
let attempt=0;
flag=true
while(flag){
   let  guess= window.prompt(`Guess the number between ${min} - ${max} `)
   guess=Number(guess)
   console.log(typeof guess,guess);
   if (isNaN(guess)){
    window.alert(`Enter a valid number`);
   }
   else if(guess>max){
    window.alert(`Enter a number in the range of ${min} - ${max} `);
   }
   else {
    attempt++;
    if (guess>answer){
        window.alert(`number is too HIGH!! Try again`);
    }
    else if (guess<answer) {
        window.alert(`number is too LOW!! Try again`);
    }
    else{
        window.alert(`You got it!!! You guess the correct number in ${attempt} attempts`);
        flag=false;
    }
   }

}
