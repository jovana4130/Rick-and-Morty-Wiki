const mainContentEl = document.querySelector("#main-content");

export const renderHomePage = (char) => {
  let html = `
    <ul class="pagination justify-content-center pt-4">
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Previous" style="background-color: rgb(95, 184, 211);">
          <span aria-hidden="true">&laquo;</span>            
          <span class="sr-only"></span>
        </a>
      </li>
      <li class="page-item"><a class="page-link" href="#">1</a></li>
      <li class="page-item"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link" href="#">3</a></li>
      <li class="page-item"><a class="page-link" href="#">4</a></li>
      <li class="page-item"><a class="page-link" href="#">5</a></li>
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Next" style="background-color: rgb(95, 184, 211);">
          <span aria-hidden="true">&raquo;</span>
          <span class="sr-only"></span>
        </a>
      </li>
    </ul>
    <div class="char-list row gy-3 p-5 d-flex justify-content-center">
  `;
  char.forEach((char) => {
    html += `
      <div class="char-item" id="${char.id}">
        <div class="card" style="width: 15vw;">
          <img src="${char.image}" class="card-img-top" alt="Character image">
          <h5 class="card-title px-3 pt-3 m-0">${char.name}</h5>
          <div class="button d-flex justify-content-center p-3">
            <button class="btn"> Like </button>
          </div>
        </div>
      </div>
    `;
  });
  html += `
    </div>
  `;
  mainContentEl.innerHTML = html;
};

export const renderCharPage = (char) => {
  let html = `
    <br>
    <div class="card">
      <img src="${char.image}" alt="Character image" class="char-image img-fluid">
      <div class="card-body">
        <h4 class="card-title" style="color: rgb(95, 184, 211);"> ${char.name} </h4>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"> Gender: ${char.gender} </li>
          <li class="list-group-item"> Species: ${char.species} </li>
          <li class="list-group-item"> Status: ${char.status} </li>
          <li class="list-group-item"> Place of origin: ${char.origin} </li>
          <li class="list-group-item"> Location: ${char.location} </li>
        </ul>
      </div>
    </div>
  `;
  mainContentEl.innerHTML = html;
};