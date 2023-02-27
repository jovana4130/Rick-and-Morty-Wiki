import { getApiResult } from "./data.js";
import { resetResult, showOnPage } from "./ui.js";

const $buttPrevious = document.querySelector("#previous");
const $buttOne = document.querySelector("#one");
const $buttTwo = document.querySelector("#two");
const $buttThree = document.querySelector("#three");
const $buttNext = document.querySelector("#next");

document.addEventListener("DOMContentLoaded", function () {
  onLoad();
  $buttNext.addEventListener("click", onLoad);
  $buttPrevious.addEventListener('click', previous);

});