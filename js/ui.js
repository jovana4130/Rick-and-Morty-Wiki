const mainContent = document.querySelector('#main-content')
const searchDropdownEl = document.querySelector('#search-dropdown');

export const renderHomePage = (characters) => {
    let html = `
            <div id="character-list">
        `;
    characters.forEach((character) => {
      html += `
             <div class="character-item" id="${character.id}">
                 <img src="${character.image}" alt="show cover image" id="gateway"/>
                <p>${character.name}</p>
                <button id='like' class="like"><i class="fa-solid fa-thumbs-up like"> Like</i> </button>
             </div>
            `;
    });
    html += `</div>`;
    mainContent.innerHTML = html;
  }

export const renderSingleCharacterPage = (character) => {
    const finalHtml = `
    <div class="detail-wrapper">
        <h1>${character.name}</h1>
        <img src="${character.image}" alt="character image" class="single-page-image"/>
        <div class="bio">
            <h2>Biographical Information</h2>
            <div class="bio-extra">
            <h3 class="darkerBg">Gender</h3>
            <div class="ligherBg">${character.gender}</div>
            </div>
            <div class="bio-extra">
                <h3 class="darkerBg">Species</h3>
                <div class="ligherBg">${character.species}
                </div>
            </div>
            <div class="bio-extra">
                <h3 class="darkerBg">Place of origin</h3>
                <div class="ligherBg">${character.origin}
                </div>
            </div>
            <div class="bio-extra">
                <h3 class="darkerBg">Status</h3>
                <div class="ligherBg">${character.status}
                </div>
            </div>
        </div>
    </div>
    `;
    mainContent.innerHTML = finalHtml;
}

export const renderSearchDropdown = (character) => {
    let maxTenChar = character.slice(0,5);
    console.log(maxTenChar);
    if (maxTenChar.length > 0){
        maxTenChar.forEach((maxTenChar) => {
            const itemEl = document.createElement('div');
            itemEl.setAttribute('id', maxTenChar.id);
            itemEl.classList.add('search-item');
            itemEl.textContent = maxTenChar.name;
            searchDropdownEl.appendChild(itemEl);
          });
    }
    
  };

export const clearDropdown = () => {
searchDropdownEl.innerHTML = "";
console.log(searchDropdownEl.innerHTML);
};