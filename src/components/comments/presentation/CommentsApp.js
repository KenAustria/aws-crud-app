import React from 'react';
import 'styles/comments/styles.css';
import CommentsBox from 'components/comments/container/CommentsBox';
import CommentsList from 'components/comments/container/CommentsList';

const CommentsApp = () => (
  <div>
    <CommentsList />
    <CommentsBox />
  </div>
);

export default CommentsApp;
