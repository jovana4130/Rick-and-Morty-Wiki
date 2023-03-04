const homeButtonEl = document.querySelector("#home-button")
const mainContentWrapper = document.querySelector("#main-content");
const searchInput = document.querySelector("#search-input")
const searchDropdownEl = document.querySelector("#search-dropdown")

import {getCharacters} from './data.js'
import {getSingleCharacter} from './data.js'
import  {searchCharacter} from './data.js'

import {renderHomePage} from './ui.js'
import {renderSingleCharacterPage} from './ui.js'
import {renderSearchDropdown} from './ui.js'
import {clearDropdown} from './ui.js'


const onSearch = (e) => {
    const term = e.target.value;
    searchCharacter(term).then((character) => {  
    clearDropdown();
    renderSearchDropdown(character);
    });
  };

const onSearchDropdownClick = (e) => {
    if (e.target.getAttribute('class') !== 'search-item'){
      return;
    }
    const id = e.target.getAttribute("id");
    clearDropdown();
    getSingleCharacter(id).then((character) => {
      renderSingleCharacterPage(character)
    }); 
  }


const onClickHomeButtonHandler = () => {
    getCharacters().then((character) => {
      renderHomePage(character);
    })
  }

const onSingleCharacterClick = (e) => {
    const target = e.target
    const targetEl = e.target.parentElement;
    if (targetEl.getAttribute('class') !== 'character-item'){
        return;
    }
    if(target.getAttribute('id') === 'gateway' ){
        const id = targetEl.getAttribute('id');
        getSingleCharacter(id).then((character) =>{
            renderSingleCharacterPage(character);
        })
    }
}

const toggleLikeButtonColor = (e) => {
  const likeButton = e.target;
  if (!likeButton.classList.contains('like')) {
    return;
  }
  likeButton.classList.toggle('clicked');
};

  
onClickHomeButtonHandler();
homeButtonEl.addEventListener('click',onClickHomeButtonHandler);
mainContentWrapper.addEventListener('click', onSingleCharacterClick);
mainContentWrapper.addEventListener('click',toggleLikeButtonColor);
searchInput.addEventListener('keyup', onSearch);
searchDropdownEl.addEventListener('click', onSearchDropdownClick);