
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = arr1;
// let copyArr = [...arr1];

// if(arr1 === arr2){
//     console.log("Both arrays are the same");
// }else{
//     console.log("Both arrays are different");
// }

// if(arr1 === copyArr){
//     console.log("Both arrays are the same");
// }else{
//     console.log("Both arrays are different");
// }

// console.log(arr1);
// console.log(arr2);
// console.log(copyArr);
// console.log();
// arr1[4] = 9;
// copyArr[4] = 6;
// console.log(arr1);
// console.log(arr2);
// console.log(copyArr);

const celsiusToFahrenheit = (tempCelsius) => {
    const tempFahrenheit = (tempCelsius * 9/5) + 32;
    return tempFahrenheit;
}

console.log(celsiusToFahrenheit(25)); // Output: 77

let temparray = [25, 20, 15, 10, 5];


for(temp of temparray){
    console.log(celsiusToFahrenheit(temp));
}