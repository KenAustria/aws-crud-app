import React, { Component } from 'react';
import 'styles.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class CommentsList extends Component {
  constructor() {
    super();
    this.bulmaColorClasses = [
      'is-black',
      'is-light',
      'is-dark',
      'is-link',
      'is-info',
      'is-success',
      'is-warning',
      'is-danger',
      'is-primary',
      'is-white',
    ];
  }

  randomizeBulmaColorClasses() {
    return this.bulmaColorClasses[Math.floor(Math.random() * this.bulmaColorClasses.length)];
  }

  renderComments(comments) {
    let i = 0;

    return (
      <div className="tile is-ancestor">
        <div className="tile flex-wrap">
          {comments.map(comment => {
            i++;
            return (
              <div key={i} className="tile is-parent is-3">
                <article
                  className={`tile is-child notification ${this.randomizeBulmaColorClasses()}`}
                >
                  <p className="subtitle">{comment}</p>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  render() {
    const { comments } = this.props;

    return <div className="comments-list-wrapper">{this.renderComments(comments)}</div>;
  }
}

// https://reactjs.org/docs/typechecking-with-proptypes.html
CommentsList.propTypes = {
  comments: PropTypes.array,
};

function mapStateToProps({ comments }) {
  return {
    comments,
  };
}

export default connect(mapStateToProps)(CommentsList);
