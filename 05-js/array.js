console.log('ARRAY AND OBJECT')

// array
let myarray = ['test', 5, 10]
console.log(myarray[0])

// function

// mengecek apakah genap (even) atau ganjil (odd)
function even (num) {
    if (num%2 === 0) {
        console.log("even")
    } else {
        console.log("odd")
    }
}
even(1)

function fullname(firstname, lastname){
    console.log(firstname + ' ' + lastname)
    console.log(firstname, lastname)
}
fullname("Steven", "Chowina")

// object (di c itu struct)
// seperti array
let person = {
    firstname: "Ahmad",
    age: 17,
    lastname: "Isnaini"
}

console.log(person.lastname)

// function untuk mencari angka terbesar di dalam suatu array
function maxvalue (numArray){
    let candidate = 0
    for (let i  = 0; i < numArray.length; i++){
        let current = numArray[i]
        if (current > candidate){
            candidate =  current
        }
    }
    console.log(candidate)
}
maxvalue([3 , 50 , 65 , 1])