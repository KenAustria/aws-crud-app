import React, { Component } from 'react';
import 'styles/comments/styles.css';
import { connect } from 'react-redux';

class CommentsList extends Component {
  renderComments() {
    return this.props.comments.map(comment => {
      return <li key={comment}>{comment}</li>;
    });
  }

  render() {
    return (
      <div>
        <ul>{this.renderComments()}</ul>

        <div className="tile is-ancestor">
          <div className="tile">
              <div className="tile is-parent is-3">
                <article className="tile is-child notification is-warning">
                  <p className="title">Hello</p>
                  <p className="subtitle">World</p>
                </article>
              </div>
              <div className="tile is-parent is-3">
                <article className="tile is-child notification is-info">
                  <p className="title">Hello</p>
                  <p className="subtitle">World</p>
                </article>
              </div>
              <div className="tile is-parent is-3">
                <article className="tile is-child notification is-warning">
                  <p className="title">Hello</p>
                  <p className="subtitle">World</p>
                </article>
              </div>
              <div className="tile is-parent is-3">
                <article className="tile is-child notification is-info">
                  <p className="title">Hello</p>
                  <p className="subtitle">World</p>
                </article>
              </div>
          </div>
        </div>

      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     comments: state.comments
//   }
// }

function mapStateToProps({ comments }) {
  return {
    comments,
  };
}

export default connect(mapStateToProps)(CommentsList);
