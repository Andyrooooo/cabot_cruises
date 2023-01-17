const list = document.querySelector('.list')
const x = document.querySelector('.x')
const hamburger = document.querySelector('.hamburger')

const hamButton = document.querySelector('#hamburgerMenu')

const openList = function () {
    // remove the 'hidden' class from the HTML divider and you will see the list
    list.classList.toggle('hidden')
    x.classList.toggle('hidden')
    hamburger.classList.toggle('hidden')
}

hamButton.addEventListener('click', openList)