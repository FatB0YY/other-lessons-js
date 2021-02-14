// /https://learn.javascript.ru/js-animation

document.addEventListener("DOMContentLoaded", function() {
    let moveButton = document.querySelector("#moveButton");
    moveButton.addEventListener("click", function() {
        let elem = document.querySelector("#myAnimation");
        let position = 0;
        let id = setInterval(frame, 10);

        function frame() {
            if (position == 350) {
                clearInterval(id);
            } else {
                position++;
                elem.style.top = position + "px";
                elem.style.left = position + "px";
            }
        }
    });
});