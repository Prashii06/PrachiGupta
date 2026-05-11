//CAP that only prints multiple of a number between num1 and num2.
const num1 = 10;
const num2 = 25;    
const number = 4;
console.log("Multiple of " + number + " between " + num1 + " and " + num2 + " are:");   
for(let i=num1; i<=num2; i++){
    if(i%number==0){
        console.log(i);
    }   
}       
