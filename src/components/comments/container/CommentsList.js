import React, { Component } from 'react';
import 'styles/comments/styles.css';
import { connect } from 'react-redux';

class CommentsList extends Component {
  constructor() {
    super()
    this.bulmaColorClasses = [ "is-black", "is-light", "is-dark", "is-link", "is-info", "is-success", "is-warning", "is-danger", "is-primary", "is-white" ];
  }

  randomizeBulmaColorClasses() {
    return this.bulmaColorClasses[Math.floor(Math.random() * (this.bulmaColorClasses.length))]
  }

  renderComments() {
    console.log(this.props.comments.length);
    let i = 0;
    return (
      <div className="tile is-ancestor">
        <div className="tile flex-wrap">
          {this.props.comments.map(comment => {
            i++;
              return (
                <div className="tile is-parent is-3">
                  <article className={`tile is-child notification ${this.randomizeBulmaColorClasses()}`}>
                    <p className="subtitle">{comment}</p>
                  </article>
                </div>
              )
          })}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="comments-list-wrapper">
        {this.renderComments()}
      </div>
    );
  }
}

function mapStateToProps({ comments }) {
  return {
    comments,
  };
}

export default connect(mapStateToProps)(CommentsList);
