console.log("SELECTION")

// ngitung THR
// kalo misalkan karyawan udh kerja > 6 bulan, baru bisa terima thr

// kodingan static kecuali monthsworking

let monthsworking = 24

// if (monthsworking > 12){
//     console.log("Terima THR Full")
// } else if (monthsworking > 6 && monthsworking <= 12 ){
//     console.log("Tidak terima THR Partial")
// } else{
//     console.log("Tidak terima THR")
// }

// kalo misalkan kerja nya pas kelipatan 1 tahun, print work anniv
if (monthsworking % 12 == 0){
    console.log("Congrats, ini anniv lu")
}

//beda nya == dan === itu (===  mengecek data type), !=, !==
let a = '0'
if (a == 0){
    console.log('sama')
}

//  TRUTHY AND FALSY
let data = ""
if (data){
    console.log("truthy")
} else{
    console.log("falsy")
}

// "test" "0" "asaddad" 123123 [] => true
// 0, undefined, null, " " => false