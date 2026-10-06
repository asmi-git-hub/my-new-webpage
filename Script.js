function showMessage() {

    const message = document.getElementById("message");

    message.innerHTML =
        "✅ CI/CD Pipeline Demo Started Successfully!";

}


const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {

        themeBtn.innerHTML = "☀️";

    } else {

        themeBtn.innerHTML = "🌙";

    }

});
