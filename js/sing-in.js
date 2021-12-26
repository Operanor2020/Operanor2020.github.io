
document.getElementById("btn-in").onclick = function () {
    let login = document.getElementById("login").value
    let password = document.getElementById("password").value

    if (login && password) {
        document.location.href = 'afterLogin.html';
    } else {
        confirm("Вы не ввели логин или пароль!")
    }
}