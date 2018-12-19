// https://decembersoft.com/posts/whats-the-difference-between-action-and-action-creator-in-redux-js/
// An action type is a string that simply describes the type of an action. They're commonly stored as constants or collected in enumerations to help reduce typos and because programmers love organization.

export const SAVE_COMMENT = 'SAVE_COMMENT';
// export const FETCH_COMMENTS = 'FETCH_COMMENTS';
// ^ We don't need to describe the type of action for FETCH_COMMENTS because we are not using it's action creator to return an action. We are using it's action creator to return a function instead of an action, and the function we are return using the fetchComments action creator is dispatch as part of Redux-Thunk.
export const FETCH_COMMENTS_LOADING = 'FETCH_COMMENTS_LOADING';
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const FETCH_COMMENTS_ERRORED = 'FETCH_COMMENTS_ERRORED';
