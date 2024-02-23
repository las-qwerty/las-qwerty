const buttonYes = document.getElementById("btnYes");
const buttonNo = document.getElementById("btnNo");
const question = document.getElementById("question");

buttonYes.addEventListener('click', function () {
    question.innerText = 'Ynna loves Lawrence SO MUCHHHHHHHHHHH! 😍😍😍😍😍😍';
});

buttonNo.addEventListener('mouseover', function () {
    buttonNo.style.display = 'none';
});