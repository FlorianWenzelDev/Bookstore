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

function changeLikeCount(bookIndex) {
  let likeCounts = document.getElementsByClassName("like-count");
  let likeCount = parseInt(likeCounts[bookIndex].innerText);
  let likeStatus = document.getElementsByClassName("liked");
  likeCounts[bookIndex].innerText = "";
  if (likeStatus[bookIndex].checked === true) {
    likeCount += 1;
  } else {
    likeCount -= 1;
  }
  likeCounts[bookIndex].innerText = likeCount;
}
