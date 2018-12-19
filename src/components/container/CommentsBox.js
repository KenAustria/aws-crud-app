import React, { Component } from 'react';
import 'styles.css';
import { connect } from 'react-redux';
// https://decembersoft.com/posts/whats-the-difference-between-action-and-action-creator-in-redux-js/
// import * as actionCreators from 'actions';
import { fetchComments, saveComment } from 'actions';
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
    console.log(comment);
    saveComment(comment);
    this.setState({ comment: '' });
  };

  render() {
    const { comment } = this.state;
    const { fetchComments, fetchCommentsLoading } = this.props;
    console.log(fetchCommentsLoading);
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

          <div className="field is-grouped is-fullwidth">
            {/* https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md */}
            <p className="control">
              <button className="button is-success is-outlined is-large buttons-spacing" type="submit">
                Submit
              </button>
            </p>
            <p className="control">
              {fetchCommentsLoading === true ? (
                <button
                  className="fetch-comments button is-warning is-outlined is-large is-loading buttons-spacing"
                  type="button"
                  disabled
                >
                  Fetch
                </button>
              ) : (
                <button
                  className="fetch-comments button is-info is-outlined is-large buttons-spacing"
                  type="button"
                  onClick={fetchComments}
                >
                  Fetch
                </button>
              )}
            </p>
          </div>
        </form>
      </div>
    );
  }
}

// https://reactjs.org/docs/typechecking-with-proptypes.html
CommentsBox.propTypes = {
  saveComment: PropTypes.func,
  fetchComments: PropTypes.func,
  fetchCommentsLoading: PropTypes.bool,
};

function mapStateToProps({ fetchCommentsLoading }) {
  console.log(fetchCommentsLoading);
  return {
    fetchCommentsLoading,
  };
}

// https://github.com/reduxjs/react-redux/blob/master/docs/api.md
export default connect(
  mapStateToProps,
  { fetchComments, saveComment },
)(CommentsBox);
// https://github.com/reduxjs/react-redux/blob/master/docs/api.md#inject-todos-and-all-action-creators
// export default connect(
//   mapStateToProps,
//   actionCreators
// )(CommentsBox);
