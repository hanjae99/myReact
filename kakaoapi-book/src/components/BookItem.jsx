import React from "react";

const BookItem = ({ book }) => {
  return (
    <div className="bookCard">
      <div className="bookThumbnail">
        <a href={book.url}>
          <img src={book.thumbnail} alt="thumbnail" />
        </a>
      </div>
      <div className="bookDescription">
        <a href={book.url}>{book.title}</a>
        <p>{book.contents}</p>
        <p>{book.authors.join(", ")}</p>
      </div>
    </div>
  );
};

export default BookItem;
