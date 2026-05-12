//CAP that prints only prime number.
const num=15;
let isPrime=true;

if(num==1){
    console.log(num + " is neither prime nor composite.");
    return;
}
for(let i=2; i<=num/2; i++){//can also use Math.sqrt(num)
    if(num%i==0){
        isPrime=false;
        break;
    }
}
if (isPrime){
    console.log(num + " is a prime number.");
}
else{
    console.log(num + " is not a prime number.");
}