let fruit = ["mango", "apple", "watermelon", "apple", "grape", "Apple"];
let count=0;
for(let i = 0; i < fruit.length; i++){
if(fruit[i].toLowerCase() === "apple"){
    count++;
}    
}
console.log("Apple quantity in cart is: ", count);
