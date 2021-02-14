document.addEventListener("DOMContentLoaded", function() {
    let modal = document.querySelector(".r-modal");
    let modalBtn = document.querySelector("#modalBtn");
    let modalClose = document.querySelectorAll("#modalClose");

    modalBtn.addEventListener("click", function() {
        const ANIMATION_SPEED = 200;
        let closing = false;

        if (closing === false) {
            modal.classList.add("open");
            closing = true;
        }

        [].forEach.call(modalClose, function(el) {
            el.addEventListener("click", function() {
                if (closing === true) {
                    closing = false;
                    modal.classList.remove("open");
                    modal.classList.add("hide");
                    setTimeout(() => {
                        modal.classList.remove("hide");
                    }, ANIMATION_SPEED);
                }
            });
        });
    });
});