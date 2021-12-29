
document.getElementById("btn-in").onclick = function () {
    let login = document.getElementById("login").value
    let password = document.getElementById("password").value

    if (login && password) {
        document.location.href = 'afterLogin.html';
        alert("Спасибо, а на этом все)")
    } else {
        confirm("Вы не ввели логин или пароль!")
    }
}