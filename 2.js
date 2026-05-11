//Create a Program that prints only even number between num1 and num2.
const num1 = 10;
const num2 = 50;    
console.log("Even numbers between " + num1 + " and " + num2 + " are:");
for(let i=num1; i<=num2; i++){
    if(i%2==0){
        console.log(i);
    }   
}