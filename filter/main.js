document.addEventListener("DOMContentLoaded", function() {
    let myInput = document.querySelector("#myInput");
    myInput.addEventListener("keyup", function() {
        let input, filter, ul, li, a;
        input = document.querySelector("#myInput");
        filter = input.value.toUpperCase();
        ul = document.querySelector("#myUl");
        li = ul.getElementsByTagName("li");

        for (let i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];

            if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    });
});