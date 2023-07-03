export function movieModal(event) {
    const modal = document.querySelector(".modal")

    if (event.target === event) {
    modal.style.display = "block";
    }

}

export function closeModal(event) {
    const modal = document.querySelector(".modal");

    if (event.target == modal) {
        modal.style.display = "none";
    };

}
