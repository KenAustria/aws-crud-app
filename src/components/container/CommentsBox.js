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
    const { comment } = this.state; // Not keeping with DRY but not sure what else to do about this...
    saveComment(comment);
    this.setState({ comment: '' });
  };

  render() {
    const { comment } = this.state;
    const { fetchComments } = this.props;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="control">
            <textarea
              className="textarea"
              placeholder="Add a comment"
              onChange={this.handleChange}
              value={comment}
            />
          </div>
          <div>
            {/* https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md */}
            <button
              className="button is-success is-outlined is-fullwidth buttons-spacing"
              type="button"
            >
              Submit
            </button>
          </div>
        </form>
        <button
          className="fetch-comments button is-info is-outlined is-fullwidth buttons-spacing"
          type="button"
          onClick={fetchComments}
        >
          Fetch
        </button>
      </div>
    );
  }
}

// https://reactjs.org/docs/typechecking-with-proptypes.html
CommentsBox.propTypes = {
  saveComment: PropTypes.func,
  fetchComments: PropTypes.func,
};

export default connect(
  null,
  actions,
)(CommentsBox);
