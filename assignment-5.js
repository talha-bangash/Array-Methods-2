// Use the array method to find the index of the element 3 in the array [1, 2, 3, 4, 5]. Then, use the array method to remove all elements starting from that index. Finally, use a for loop to print the new array.


let arr = [1, 2, 3, 4, 5];
let x = arr.indexOf(3);
arr.splice(x,3)




for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}