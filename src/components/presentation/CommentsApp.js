import React from 'react';
import 'styles.css';
import CommentsBox from 'components/container/CommentsBox';
import CommentsList from 'components/container/CommentsList';

const CommentsApp = () => (
  <div>
    <CommentsList />
    <CommentsBox />
  </div>
);

export default CommentsApp;
