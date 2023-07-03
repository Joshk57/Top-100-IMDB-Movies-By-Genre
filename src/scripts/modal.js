export function movieModal(event, data) {
    // clear()
    const modal = document.querySelector(".modal")

    if (event.target === event) {
    modal.style.display = "block";
    }
    const el = document.createElement("span")
    const text = document.createTextNode(data)
    const modalContent = document.querySelector(".modal-content")
    const movieDetails = document.getElementById('movie-details');
    el.appendChild(text)
    movieDetails.innerHTML = '';
    movieDetails.append(el)
}

export function closeModal(event) {
    const modal = document.querySelector(".modal");

    if (event.target == modal) {
        modal.style.display = "none";
    };

}

