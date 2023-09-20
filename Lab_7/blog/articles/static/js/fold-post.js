const foldBtns = document.querySelectorAll(".fold-button");

foldBtns.forEach((button) => {
  button.addEventListener("click", function (event) {
    // if (event.target.className === "fold-button folded btn btn-outline") {
    //   event.target.innerHTML = "свернуть";
    //   event.target.className = "fold-button btn btn-outline";
    //   var displayState = "block";
    // } else {
    //   event.target.innerHTML = "развернуть";
    //   event.target.className = "fold-button folded btn btn-outline";
    //   var displayState = "none";
    // }

    // event.target.parentElement.parentElement.getElementsByClassName(
    //   "article-info"
    // )[0].style.display = displayState;
    // event.target.parentElement.parentElement.getElementsByClassName(
    //   "article-text"
    // )[0].style.display = displayState;

    event.target.innerHTML =
      event.target.innerHTML === "Свернуть" ? "Развернуть" : "Свернуть";
    event.target.parentElement.parentElement.classList.toggle("article_hidden");
  });
});
