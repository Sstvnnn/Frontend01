'use strict'

const header = document.getElementById('header')
const userList = document.getElementById('user-list')

async function getData (page,search) {
  const limit = 10
  const skip = (page - 1) * limit
  let apiUrl = `https://dummyjson.com/users?limit=${limit}&skip=${skip}`
  if (search) {
    apiUrl = `https://dummyjson.com/users/search?q=${search}`
  }

  const response = await fetch(apiUrl)
  const data = await response.json()
  const usersData = data.users
  console.log(usersData)

  userList.innerHTML = '';
  for (let i = 0; i < usersData.length; i++) {
    const currentUser = usersData[i];
    let genderMaterialSpan = ` <span class="material-symbols-outlined gender-male"> male </span>`
    if (currentUser.gender === 'female') {
      genderMaterialSpan =  ` <span class="material-symbols-outlined gender-female"> female </span>`
    }
    userList.innerHTML += `
    <div class="user">
      <button class="user-button"></button>
      <!-- IMAGE -->
      <div class="user-image">
        <img src="${currentUser.image}" alt="" />
      </div>
      <!-- USER PROFILE -->
      <div class="user-profile">
        <div class="user-name-gender">
          <span class="user-name">${currentUser.firstName} ${currentUser.lastName}</span>
          ${genderMaterialSpan}
        </div>
        <div class="user-email">
          <span>${currentUser.email}</span>
        </div>
      </div>
      <div class="arrow-sign">
        <span class="material-symbols-outlined chevron">
          chevron_right
        </span>
      </div>
    </div>`
  }
}

let currentPage = 1
getData(currentPage)

const prevButton = document.getElementById('prev-button')
const nextButton = document.getElementById('next-button')

nextButton.addEventListener('click', function () {
  currentPage++
  getData(currentPage)
})

prevButton.addEventListener('click', function () {
  currentPage--
  getData(currentPage)
})

const searchInput = document.getElementById('search')
searchInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    getData(currentPage, searchInput.value)
  }
}) 
getData(1,'')