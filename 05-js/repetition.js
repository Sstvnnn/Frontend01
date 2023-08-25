console.log('REPETITION')

// for, do-while, while
let input = 5

// (1x awal, setiap iterasi di awal, setiap iterasi di akhir)
for (let i = 0;i < input;i++){
    console.log("Hello World")
}
console.log("sesuatu")

// bikin garis
let inputgaris = 10
let garis = ''
for (let i = 0; i < inputgaris; i++){
    garis += '*'
}
console.log(garis)

// bikin kotak
let inputkotak = 5

for (let j = 0; j < inputkotak; j++){
    let barisan = ''
    for (let i = 0; i < inputkotak; i++){
    barisan += '*'
    }
    console.log(barisan)
}
