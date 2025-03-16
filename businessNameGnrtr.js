console.log("The generated name is:")

let first, second, third;

//to generate first word
let random1 = Math.random()
if (random1 < 0.33) {
    first = "Crazy";
}
else if (random1 > 0.33 && random1 < 0.66) {
    first = "Amazing";
}
else {
    first = "Fire";
}

//to generate second word
let random2 = Math.random()
if (random2 < 0.33) {
    second = "Engine"
}
else if (random2 > 0.33 && random2 < 0.66) {
    second = "Food"
}
else {
    second = "Garments"
}
//to generate third word
let random3 = Math.random()
if (random3 < 0.33) {
    third = "Bros"
}
else if (random3 > 0.33 && random3 < 0.66) {
    third = "Limited"
}
else {
    third = "Hub"
}
console.log(`${first} ${second} ${third}`)