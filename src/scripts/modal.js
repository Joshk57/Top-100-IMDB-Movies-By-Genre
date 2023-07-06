export function movieModal(event, data) {
    const modal = document.querySelector(".modal");
  
    if (event.target === event) {
      modal.style.display = "block";
    }
  
    const movieDetails = document.getElementById('movie-details');
    movieDetails.innerHTML = '';
  
    const detailsList = document.createElement('ul');
  
    const titleText = document.createElement('span')
    titleText.textContent = 'Title'
    titleText.style.color = 'blue'

    const yearText = document.createElement('span')
    yearText.textContent = 'Year'

    const imageItem = createListItem('Image', '', data[0]);
    const titleItem = createListItem(titleText.textContent, data[1]);
    const yearItem = createListItem(yearText.textContent, data[2]);
    const ratingItem = createListItem('Rating', data[3]);
    const descriptionItem = createListItem('Description', data[4]);

    detailsList.appendChild(imageItem)
    detailsList.appendChild(titleItem);
    detailsList.appendChild(yearItem);
    detailsList.appendChild(ratingItem);
    detailsList.appendChild(descriptionItem);

    movieDetails.appendChild(detailsList);
  }
  
function createListItem(label, value, imageURL) {
    const listItem = document.createElement('li');
    const labelElement = document.createElement('span');
    const valueElement = document.createElement('span');
    const imageElement = document.createElement('img');

    labelElement.textContent = label + ': ';
    valueElement.textContent = value;
    imageElement.src = imageURL;

    listItem.appendChild(labelElement);
    listItem.appendChild(valueElement);
    listItem.appendChild(imageElement);

    return listItem;
}
  
export function closeModal(event) {
    const modal = document.querySelector(".modal");

    if (event.target == modal) {
        modal.style.display = "none";
    };

}

