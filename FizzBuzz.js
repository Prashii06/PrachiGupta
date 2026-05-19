//FizzBuzz
//Print number from 1 to 100.
//if a number is divisible by 5 then print "Fizz".
//if a number is divisible by 3 then print "Buzz".
//if a number is divisible by both 3 and 5 then print "FizzBuzz".
//if a number is not divisible by any then print number.
console.log("FizzBuzz from 1 to 100:");
for(let i=1; i<=100; i++){
    if(i%3==0 && i%5==0){
        console.log("FizzBuzz");
    }else if(i%5==0){
        console.log("Fizz");
    }else if(i%3==0){
        console.log("Buzz");
    }else{
        console.log(i);
    }   
}