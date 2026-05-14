//CAP that ptints only prime number between num 1 and num 2
// function isPrime(num){
//     if(num<=1){ 
//         return false;
//     }       
//     for(let i=2; i<=Math.sqrt(num); i++){
//         if(num%i==0){
//             return false;
//         }   
//     }
//     return true;
// }
// const num1 = 10;
// const num2 = 50;
// console.log("Prime numbers between " + num1 + " and " + num2 + ":");    
// for(let i=num1; i<=num2; i++){
//     if(isPrime(i)){
//         console.log(i);
//         }
//     }

function printPrime(num1, num2) {
    for (let num = num1; num <= num2; num++) {
        let isPrime = true;

        if (num <= 1) {
            isPrime = false;
        }

        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            console.log(num);
        }
    }
}

const num1 = 10;
const num2 = 50;
console.log("Prime numbers between " + num1 + " and " + num2 + ":");  
printPrime(num1,num2);
