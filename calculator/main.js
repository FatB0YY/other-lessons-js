document.addEventListener("DOMContentLoaded", function() {
    let btnPlus = document.querySelector("#btnPlus");
    btnPlus.addEventListener("click", function() {
        let num1 = document.querySelector("#n1").value;
        let num2 = document.querySelector("#n2").value;
        let result = 0;

        num1 = parseInt(num1);
        num2 = parseInt(num2);

        result = num1 + num2;

        let out = (document.querySelector("#out").innerHTML = result);
    });

    let btnMinus = document.querySelector("#btnMinus");
    btnMinus.addEventListener("click", function() {
        let num1 = document.querySelector("#n1").value;
        let num2 = document.querySelector("#n2").value;
        let result = 0;

        num1 = parseInt(num1);
        num2 = parseInt(num2);

        result = num1 - num2;

        let out = (document.querySelector("#out").innerHTML = result);
    });
});