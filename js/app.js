document.addEventListener('DOMContentLoaded', () => {
    const newFilmDetails = document.querySelector('#new-film-details');
    newFilmDetails.addEventListener('sumbit', handleNewFilmDetailsSubmit);

    // const deleteAllButton = document.querySelector('#delete-all');
    // deleteAllButton.addEventListener('click', handleDeleteAllButton);
})

const handleNewFilmDetailsSubmit = function (event) {
    event.preventDefault();
    console.log(event)

    const filmListItem = creatFilmListItem(event.target);
    console.log(event.target)
    const filmList = document.querySelector('#film-list');
    filmList.appendChild(filmListItem);

    event.target.reset();
}

const creatFilmListItem = function (form) {
    const filmListItem = document.createElement('li');
    filmListItem.classList.add('film-list-item');

    const title = document.createElement('h2');
    title.textContent = form.title.value;
    filmListItem.appendChild(title);

    const year = document.createElement('h3');
    year.textContent = form.year.value;
    filmListItem.appendChild(year);

    const director = document.createElement('h3');
    director.textContent = form.director.value;
    filmListItem.appendChild(director);

    const genre = document.createElement('h3');
    genre.textContent = form.genre.value;
    filmListItem.appendChild(genre);

    const synopsis = document.createElement('h3');
    synopsis.textContent = form.synopsis.value;
    filmListItem.appendChild(synopsis);

    return filmListItem;
}

// const handleDeleteAllButton = function(event) {
//     const filmList = document.querySelector('#film-list');
//     filmList.innerHTML = '';
// }