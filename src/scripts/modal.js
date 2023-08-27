export function movieModal(event, data) {
  const modal = document.querySelector(".modal");

  if (event.target === event) {
    modal.style.display = "block";
  }

  const movieDetails = document.getElementById('movie-details');
  movieDetails.innerHTML = '';

  const detailsList = document.createElement('ul');

  const image = createListItem('Image', '', data[0]);
  detailsList.appendChild(image);

  const title = createListItem('Title', data[1]);
  detailsList.appendChild(title);

  const year = createListItem('Year', data[2]);
  detailsList.appendChild(year);

  const rating = createListItem('Rating', data[3]);
  detailsList.appendChild(rating);

  const director = createListItem('Director', data[4]);
  detailsList.appendChild(director);

  const description = createListItem('Description', data[5]);
  detailsList.appendChild(description);

  movieDetails.appendChild(detailsList);
}

function createListItem(key, value, imgURL) {
  const listItem = document.createElement('li');

  const labelElement = document.createElement('span');
  labelElement.textContent = key + ': ';
  listItem.appendChild(labelElement);

  const valueElement = document.createElement('span');
  valueElement.textContent = value;
  listItem.appendChild(valueElement);

  if (imgURL) {
      const imgElement = document.createElement('img');
      imgElement.src = imgURL;
      listItem.appendChild(imgElement);
  }

  return listItem;
}
