import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
  const date = new Date().getUTCFullYear();
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail 
          author="Sam" 
          timeAgo={date}
          image={faker.image.avatar()}
          post="hurrdurr"
        />
      </ApprovalCard>
      <ApprovalCard> 
        <CommentDetail author="Adam" image={faker.image.avatar()}/>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Alex" image={faker.image.avatar()}/>
      </ApprovalCard>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
