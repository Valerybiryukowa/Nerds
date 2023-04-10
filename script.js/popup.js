
    const modalButton = document.querySelector(".modal-button");
    const popup = document.querySelector(".write-to-us");
    const close = document.querySelector(".write-close");
    const writeForm = popup.querySelector(".write-form");
    const writeName = popup.querySelector(".modal-icon-name");
    const writeEmail = popup.querySelector(".modal-icon-email");
    const writeText = popup.querySelector(".modal-icon-text");
   

    let isStorageSupport = true;
    let storage = "";
    
    
    try {
        storage = localStorage.getItem("name");
    } catch (err) {
        isStorageSupport = false;
    }

    modalButton.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.add("modal-show");

        if (storage) {
            writeName.value = storage;
            writeEmail.focus();
        } else {
            writeName.focus();
        }
    });

    close.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
    });

    writeForm.addEventListener("submit", function (evt) {
        if (!writeName.value || !writeEmail.value || !writeText.value) {
            evt.preventDefault();
            popup.classList.remove("modal-error");
            popup.offsetWidth = popup.offsetWidth;
            popup.classList.add("modal-error");
        } else {
            if (isStorageSupport) {
                localStorage.setItem("name", writeName.value);
        }
    }
    });

    window.addEventListener("keydown", function (evt) {
        if (evt.key === 'Esc' || evt.key === 'Escape') {
            if (popup.classList.contains("modal-show")) {
                evt.preventDefault();
                popup.classList.remove("modal-show");
                popup.classList.remove("modal-error");
            }
        }
    });
    