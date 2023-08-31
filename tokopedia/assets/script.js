'use strict'
// membuat js memasuki mode script contoh nya tidak boleh pakai variable yg belum declare (undeclared variable)

// let  num = 5
// numb = 10
// console.log(num + numb)

console.log("script connected")

// satu elemen di satu website bs menggunakan id
// const logo = document.getElementById('logo')
// logo.style.background = "red" 

// contoh menggunakan class jika 1 elemen
// harus akses index ke 0 [0]
// const logoClass = document.getElementsByClassName("logo")[0]

// console.log(logo,logoClass)

const productList = document.getElementById("product-list")
// productList.innerHTML = semua isi dari div product list yg diformat dalam bentuk string
// innerhtml adalah attribute (logo Balok), addEventListener adalah function (Kubus)
// productList.innerHTML = product.innerHTML + "asasa"
// productList.innerHTML += "asasa"

// promise => asynchronous programming (hasil tidak instan, nunggu)
// then and catch
// async and await => cara lebih baru
// fetch itu untuk request menggunakan javascript

async function getData(page, search) {
  // harus dimasukkan ke function
  console.log("start get data")

  const limit = 5
  const skip = (page - 1)* limit
  // 1 => 0
  // 2 => 5
  // 3 => 10

  let apiUrl = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
  if (search) {
    apiUrl = `https://dummyjson.com/products/search?q=${search}`
  }
  const response = await fetch(apiUrl)
  const data = await response.json()
  const products = data.products
  console.log(products)

  productList.innerHTML = ''
  for (let i = 0; i < products.length; i++){
    const currentProduct = products[i]
    productList.innerHTML +=  `<div class="product">
<!-- HEART BUTTON -->
<button class="heart-button">
  <span class="material-symbols-outlined">favorite</span>
</button>

<!-- IMAGE -->
<div class="product-image-cover">
  <img
    src="${currentProduct.thumbnail}"
    alt=""
  />
</div>
<div class="product-image-contain">
  <img
    src= "${currentProduct.thumbnail}"
    alt=""
  />
</div>

<!-- PRODUCT DETAIL -->
<div class="product-detail">
  <span>${currentProduct.title}</span>
  <span>$${currentProduct.price}</span>
  <div class="product-info">
    <div class="product-rating">
      <span class="material-symbols-outlined"> star </span>
      <span>${currentProduct.rating}</span>
    </div>
    <span>${currentProduct.stock}</span>
  </div>
</div>
</div>`
}

// class itu element(s) yg meng expect ada banyak heart button di html kita
const heartButtons = document.getElementsByClassName('heart-button')
console.log(heartButtons)

for (let i = 0; i < heartButtons.length; i++){
    const button = heartButtons[i]
    function handleClick () {
        console.log("toggling")
        button.classList.toggle("active")
    }
    // listen ( "event click", function)
    button.addEventListener("click", handleClick)
  }
// kalo pake kurung [handleclick()] parsing return function
console.log(data)
// kalo di console.log(response) akan menghasilkan promise}
}
console.log("above get data")
let currentPage = 1
getData(currentPage)
console.log("below get data")

const prevBtn = document.getElementById("prev-button")
const nextBtn = document.getElementById("next-button")

// anonymous function = tidak ada nama
// function onNextBtnClick(){
//   console.log("next button click")
// }
nextBtn.addEventListener('click',function () {
  currentPage++
  getData(currentPage)
})
prevBtn.addEventListener('click',function () {
  currentPage--
  getData(currentPage)
})

const searchInput = document.getElementById('search')
searchInput.addEventListener('keypress', function(event) {
  // searchInput.value = sesuai yg dienter
  if (event.key == 'Enter') {
    getData(currentPage, searchInput.value)
  }
})

// const data = [
//     {
//         name: "iPhone 1",
//         image: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
//         price: "Rp 80.000",
//         rating: 4.5,
//         stok: 90,
//     },
//     {
//         name: "iPhone 10",
//         image: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
//         price: "Rp 6.000.000",
//         rating: 5,
//         stok: 3,
//     }
// ]

// f(x) = x + 5
// function sum (a,b) {
//     return a + b
   // kalo tidak mereturn akan undefined
// }
// let summedValue = sum (5,1555)
// console.log(summedValue)

// penjelasan function di call vs tidak di call
// console.log("click", sum (5,1555))
// print hasil return value
// console.log("click", sum)
// print function nya