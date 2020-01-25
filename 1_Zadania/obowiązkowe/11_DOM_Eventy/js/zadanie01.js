//zadanie 1

/*var menu = document.querySelector("#menu");
    var paragraf = document.querySelector("p");
    
    menu.classList.add("menu");
    paragraf.innerHTML = "A to jest paragraf w zadaniu 1";*/

/*1. Skrypt jest szybciej łądowany od elementów tworzonych przez html-a, przez co nie wykrywa
document.querySelector("#menu") i przypisuje do zmiennej menu wartość null, kiedy program
poszukuje diva o id = menu*/

document.addEventListener("DOMContentLoaded", function () {


    var menu = document.querySelector("#menu");
    var paragraf = document.querySelector("p");
    
    menu.classList.add("menu");
    paragraf.innerHTML = "A to jest paragraf w zadaniu 1";
    
});

// 2. Jest różnica,  dokument załądował się z kodu html, a później dopiero
//został pobrany js

// 3.Po przeniesieniu z powrotem na koniec pliku tagu do js, nic sie nie zmieniło, a przynajmniej ja nic nie widzę