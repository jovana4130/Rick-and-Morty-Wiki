import { renderHomePage, renderCharPage } from "./ui.js";
import { getCharacters, getCharCard, state, getPageItems } from "./data.js";

const mainContentEl = document.querySelector("#main-content");
const homeEl = document.querySelector("#home");

const onHomeClick = () => {
    getCharacters().then((chars) => {
        state.allCharacters = chars;
        const paginateItems = getPageItems(state.curentPage, state.allCharacters);
        renderHomePage(paginateItems);
    });
};
    
const onCharCardClick = (event) => {
    const targetEl = event.target.parentElement.parentElement;
    if (targetEl.getAttribute("class") !== "char-item") {
        return;
    }
    console.log(targetEl, event.target);
    const id = targetEl.getAttribute("id");
    getCharCard(id)
    .then((char) => {
        renderCharPage(char);
    });
};

const onLikeButtonClick = (event) => {
    if (event.target.getAttribute("class") !== "btn") {
        return;
    }
    event.target.classList.toggle("liked");
};

onHomeClick();

mainContentEl.addEventListener("click", onCharCardClick);
homeEl.addEventListener("click", onHomeClick);
mainContentEl.addEventListener("click", onLikeButtonClick);