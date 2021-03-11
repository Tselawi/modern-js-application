import "regenerator-runtime/runtime"; // to fix the `regeneratorRuntime`
import { postsList, outPut, renderPosts, url } from "./sripts/helper.js";
import { imgValue, image, convertImage } from "./sripts/image.js";

const nameValue = document.querySelector("#name-value");
const shortValue = document.querySelector("#short-value");
const descValue = document.querySelector("#body-value");
const addPostForm = document.querySelector(".add-post-form");
const modalNewBg = document.querySelector(".modalNew-bg");
const modalBtn = document.querySelector(".newBtn");
const modalClose = document.querySelector(".modalNew-close");
const modalMoreBg = document.querySelector(".modalMore-bg");
const modalMoreClose = document.querySelector(".modalMore-close");

modalBtn.addEventListener("click", () => {
  modalNewBg.classList.add("modal-active");
});
modalClose.addEventListener("click", () => {
  modalNewBg.classList.remove("modal-active");
});
modalMoreClose.addEventListener("click", () => {
  modalMoreBg.classList.remove("modal-active");
});

postsList.innerHTML = outPut;

addPostForm.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: nameValue.value,
      shortDescription: shortValue.value,
      image: image,
      description: descValue.value,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      const dataArr = [];
      dataArr.push(data);
      renderPosts(dataArr);
    });

  // RESET input field to empty after submit
  nameValue.value = "";
  shortValue.value = "";
  imgValue.value = "";
  descValue.value = "";
});
convertImage();
