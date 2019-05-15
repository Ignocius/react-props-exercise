import React from 'react';

const CommentDetail = ({ author, timeAgo, post, image}) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={image} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {author}
        </a>
        <div className="metadata">
          <span className="date">Today at {timeAgo}</span>
        </div>
        <div className="text">{post}</div>
      </div>
    </div>
  );
}

export default CommentDetail;