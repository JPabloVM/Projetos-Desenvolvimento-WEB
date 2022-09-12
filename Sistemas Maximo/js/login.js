/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function logar() {
    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;

    if (login === "admin" && senha === "admin") {
        location.href = "home.html";
    } else {
        alert('Usuário ou senha incorretos');

    }
}