export function movieModal(event, data) {
  const modal = document.querySelector(".modal");

  if (event.target === event) {
    modal.style.display = "block";
  }

  const movieDetails = document.getElementById('movie-details');
  movieDetails.innerHTML = '';

  const detailsList = document.createElement('ul');

  const image = createListItem('', '', 'key', 'image', data[0]);
  detailsList.appendChild(image);

  const title = createListItem('Title', data[1], 'key', 'value');
  detailsList.appendChild(title);

  const year = createListItem('Year', data[2], 'key', 'value');
  detailsList.appendChild(year);

  const rating = createListItem('Rating', data[3], 'key', 'value');
  detailsList.appendChild(rating);

  const description = createListItem('Description', data[4], 'key', 'value');
  detailsList.appendChild(description);

  movieDetails.appendChild(detailsList);
}

function createListItem(key, value, keyClass, valueClass, imgURL) {
  const listItem = document.createElement('li');

  if (imgURL) {
    const imgElement = document.createElement('img');
    imgElement.src = imgURL;
    imgElement.classList.add(valueClass); 
    listItem.appendChild(imgElement);
  } else {
    const labelElement = document.createElement('span');
    labelElement.textContent = key + ': ';
    labelElement.classList.add(keyClass); 
    listItem.appendChild(labelElement);

    const valueElement = document.createElement('span');
    valueElement.textContent = value;
    valueElement.classList.add(valueClass); 
    listItem.appendChild(valueElement);
  }

  return listItem;
}
