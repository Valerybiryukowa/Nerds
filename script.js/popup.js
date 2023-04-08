<script>
    
    const basket = document.querySelector(".login-basket");
    const popup = document.querySelector(".write-to-us");
    const close = document.querySelector(".write-close");
    const form = popup.querySelector("form");
    const name = popup.querySelector("[name=surname]");
    const email = popup.querySelector("[name=email]");
    const text = popup.querySelector("[name=text]");
   

    const isStorageSupport = true;
    const storage = "";
    
    
    try {
        storage = localStorage.getItem("surname");
    } catch (err){
        isStorageSupport = false;
    }

    basket.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.add("modal-show");

        if (storage) {
            surname.value = storage;
            email.focus();
        } else {
            surname.focus();
        }
    });

    close.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
    });

    form.addEventListener("submit", function (evt) {
        if (!name.value || !email.value || !text.value) {
            evt.preventDefault();
            popup.classList.remove("modal-error");
            popup.offsetWidth = popup.offsetWidth;
            popup.classList.add("modal-error");
        } else {
            if (isStorageSupport) {
                localStorage.setItem("surname", surname.value);
        }
    }
    });

    window.addEventListener('keydown', function (evt) {
        if (evt.key === 'Esc' || evt.key === 'Escape') {
            if (popup.classList.contains("modal-show")) {
                evt.preventDefault();
                popup.classList.remove("modal-show");
                popup.classList.remove("modal-error");
            }
        }
    });

</script>