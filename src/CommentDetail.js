import React from 'react';
import faker from 'faker';

const CommentDetail = ({ name, time, post}) => {
  return (
    <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="cont ent">
          <a href="/" className="author">
            Sam
          </a>
          <div className="metadata">
            <span className="date">Today at 12.00 AM</span>
          </div>
          <div className="text">Nice blog post!</div>
        </div>
      </div>
  );
}

export default CommentDetail;