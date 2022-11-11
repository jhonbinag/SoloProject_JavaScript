let home_zero = 0
let guest_zero = 0

let home_one = document.getElementById('home_one').addEventListener('click', homeOne)
let home_two = document.getElementById('home_two').addEventListener('click', homeTwo)
let home_three = document.getElementById('home_three').addEventListener('click', homeThree)

let guest_one = document.getElementById('guest_one').addEventListener('click', guestOne)
let guest_two = document.getElementById('guest_two').addEventListener('click', guestTwo)
let guest_three = document.getElementById('guest_three').addEventListener('click', guestThree)

function homeOne(){
    home_zero += 1
    document.getElementById('home_score').textContent = home_zero   
}

function homeTwo(){
    home_zero += 2
    document.getElementById('home_score').textContent = home_zero   
}

function homeThree(){
    home_zero += 3
    document.getElementById('home_score').textContent = home_zero   
}

function guestOne(){
    guest_zero += 1
    document.getElementById('guest_score').textContent = guest_zero   
}

function guestTwo(){
    guest_zero += 2
    document.getElementById('guest_score').textContent = guest_zero   
}

function guestThree(){
    guest_zero += 3
    document.getElementById('guest_score').textContent = guest_zero   
}