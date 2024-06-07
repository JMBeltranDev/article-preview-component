"use strict";

const shareLink = document.querySelector(".share-icon");
const showMsg = document.querySelector(".share-social-links");

shareLink.addEventListener("click", function () {
  showMsg.classList.toggle("hidden");
});
