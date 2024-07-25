// Use a for loop to iterate over the array [1, 2, 3, 4, 5] and print the elements that are greater than the previous element.

let arr = [1, 2, 3, 4, 5];

for( let i = 0; i < arr.length; i++){
    if(arr[i] > arr[i - 1]){
        console.log(arr[i]);
    }
}