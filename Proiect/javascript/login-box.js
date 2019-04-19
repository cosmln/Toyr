let modal-window = document.getElementById('open-modal');

window.onclick = function(event) {
    if (event.target === modal_window) {
        modal-window.style.display = "none";
    }
};
