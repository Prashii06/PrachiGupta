//To find the largest number in Array.
const arr = [1,7,6,6,5,4,3,21,20];
let largest = arr[0];   
for(let i=1; i<arr.length; i++){
    if(arr[i] > largest){
        largest = arr[i];
    }
}
console.log("The largest number in the array is: " + largest);