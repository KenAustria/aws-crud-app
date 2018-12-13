import React, { Component } from 'react';
import 'styles.css';
import { connect } from 'react-redux';
import * as actions from 'actions';
import PropTypes from 'prop-types';

class CommentsBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
    };
  }

  handleChange = event => {
    this.setState({ comment: event.target.value });
    const { comment } = this.state;
    console.log(comment);
  };

  handleSubmit = event => {
    event.preventDefault();
    // Prevents page reload
    const { saveComment } = this.props;
    const { comment } = this.state;
    saveComment(comment);
    this.setState({ comment: '' });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="control">
            <textarea
              className="textarea"
              placeholder="Add a comment"
              onChange={this.handleChange}
              value={this.state.comment}
            />
          </div>
          <div>
            <button className="button is-success is-outlined is-fullwidth buttons-spacing">
              Submit
            </button>
          </div>
        </form>
        <button
          className="fetch-comments button is-info is-outlined is-fullwidth buttons-spacing"
          onClick={this.props.fetchComments}
        >
          Fetch
        </button>
      </div>
    );
  }
}

CommentsBox.propTypes = {
  saveComment: PropTypes.func
};

export default connect(
  null,
  actions,
)(CommentsBox);
