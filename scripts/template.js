
function getBookReview(bookIndex, comments) {
  return `<section class="book-review">
            <h2>${books[bookIndex].name}</h2>
            <img class="book-image" src="./assets/img/book.jpg" alt="">
            <div class="book-status">
                <p class="price-tag">${books[bookIndex].price.toFixed(2)}€</p>
                <div class="like-status">
                    <p class="like-count">${books[bookIndex].likes}</p>
                    <input class="liked" onclick="changeLikeCount(${bookIndex})" type="checkbox">
                </div>
            </div>
            <table class="bookinformation">
                <tbody>
                    <tr scope="row">
                        <th>Author:</th>
                        <td>${books[bookIndex].author}</td>
                    </tr>
                    <tr scope="row">
                        <th>Erscheinungsjahr:</th>
                        <td>${books[bookIndex].publishedYear}</td>
                    </tr>
                    <tr scope="row">
                        <th>Genre:</th>
                        <td>${books[bookIndex].genre}</td>
                    </tr>
                </tbody>
            </table>
            <div class="comment-section">
                <h3>Kommentare:</h3>
                <ul class="comments-wrapper">
                    ${comments}
                </ul>
            </div>
            <div class="comment-creation">
                    <input class="new-comment" type="text" placeholder="Schreibe hier etwas...">
                    <button onclick="addCommentToBookReview(${bookIndex})">Send</button>
            </div>
        </section>`;
}

function getComment(author, comment) {
  return `<li>
    <article class="book-comment">
      <span class="book-author">${author}</span>
      <p class="book-comment-text">
        ${comment}
      </p>
    </article>
  </li>`;
}
