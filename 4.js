//CAP that prints only prime number.
const num1 = 2;
const num2 = 10;    
console.log("Prime numbers between " + num1 + " and " + num2 + " are:");    
for(let i=num1; i<=num2; i++){
    let isPrime = true;
    if(i<=1){
        isPrime = false;
    }
    for(let j=2; j<=Math.sqrt(i); j++){
        if(i%j==0){
            isPrime = false;
            break;
        }
    }
    if(isPrime){
        console.log(i);
    }
}