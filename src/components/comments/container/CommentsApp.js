import React from 'react';
import '../../../styles/comments/styles.css';
import CommentsList from './CommentsList.js';
import CommentsBox from './CommentsBox.js';

const CommentsApp = () => (
  <div className="comments-app-component">
    <h2>CommentsApp Component</h2>
    <CommentsList />
    <CommentsBox />
  </div>
);

export default CommentsApp;
