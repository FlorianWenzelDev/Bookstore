
let data = {
  "bookData": [],
};

function renderBooksOnLoad() {
  getFromLocalStorage();
  let contentRef = document.getElementById("book-reviews");
  for (let index = 0; index < data.bookData.length; index++) {
    let comments = renderComments(index);
    contentRef.innerHTML += getBookReview(index, comments);
  }
  setLikeStatusOnLoad();
}

function setLikeStatusOnLoad() {
  let likeStatuses = document.getElementsByClassName("liked");
  for (let index = 0; index < data.bookData.length; index++) {
    if (data.bookData[index].liked === true) {
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
  let comments = data.bookData[index].comments;
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
    data.bookData[bookIndex].comments.unshift({ name: "Flo", comment: `${newComment}` });
    commentSections[bookIndex].innerHTML = renderComments(bookIndex);
  }
  saveToLocalStorage();
  
}

function saveToLocalStorage() {
  localStorage.setItem("bookData", JSON.stringify(data.bookData));
}

function getFromLocalStorage() {
  console.log(localStorage.getItem("bookData"));
  
  if(localStorage.getItem("bookData") === null){
    localStorage.setItem("bookData", JSON.stringify(data.bookData));
    data.bookData = books;
  }
  else{
    data.bookData = JSON.parse(localStorage.getItem("bookData"));
  }
}