import React from 'react';
import 'styles/comments/styles.css';
import CommentsBox from 'components/comments/container/CommentsBox';
import CommentsList from 'components/comments/container/CommentsList';

const CommentsApp = () => (
  <div className="comments-components">
    <h2>CommentsApp Component</h2>
    <CommentsList />
    <CommentsBox />
  </div>
);

export default CommentsApp;
