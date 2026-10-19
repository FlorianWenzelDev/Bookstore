let title = books[0].name;

console.log(title);

function renderBooksOnLoad() {
  let contentRef = document.getElementById("book-reviews");
  for (let index = 0; index < books.length; index++) {
    let comments = renderComments(index);
    contentRef.innerHTML += getBookReview(index, comments);
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

function renderComments(index) {
  let comments = books[index].comments;
  let commentHtml = "";
  for (let index = 0; index < comments.length; index++) {
    let commentAuthor = comments[index].name;
    let comment = comments[index].comment;
    commentHtml += getComment(commentAuthor, comment);
  }
  return commentHtml;
}

function addCommentToBookReview(bookIndex) {
  let comments = document.getElementsByClassName("new-comment");
  let newComment = comments[bookIndex].value;
  let commentSections = document.getElementsByClassName("comments-wrapper");
  if (newComment !== "") {
    commentSections[bookIndex].innerHTML = "";
    comments[bookIndex].value = "";
    books[bookIndex].comments.unshift({ name: "Flo", comment: `${newComment}` });
    commentSections[bookIndex].innerHTML = renderComments(bookIndex);
  }
}

