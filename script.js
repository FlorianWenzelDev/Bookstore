let title = books[0].name;

console.log(title);

function renderBooksOnLoad() {
  let contentRef = document.getElementById("book-reviews");
  for (let index = 0; index < books.length; index++) {
    contentRef.innerHTML += getBookReview(index);
  }
  setLikeStatusOnLoad();
}

function setLikeStatusOnLoad() {
  let likeStatuses = document.getElementsByClassName("liked");
  for (let index = 0; index < books.length; index++) {
    if (books[index].liked === true) {
      likeStatuses[index].checked = true;
    }
  }
}


