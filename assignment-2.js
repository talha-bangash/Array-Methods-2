// Use a for loop to iterate over the array [1, 2, 3, 4, 5] and print the indices(index) of the elements that are even numbers.

let arr = [1, 2, 3, 4, 5,];
for (let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
        console.log(arr.indexOf(arr[i]));
    }
}