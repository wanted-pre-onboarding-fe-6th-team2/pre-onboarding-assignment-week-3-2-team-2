import commentsApiService from '@/api/commentsApiService';

// 액션 타입
const GET_COMMENTS = 'GET_COMMENTS';
const GET_COMMENTS_SUCCESS = 'GET_COMMENTS_SUCCESS';
const GET_COMMENTS_ERROR = 'GET_COMMENTS_ERROR';

const ADD_COMMENT = 'ADD_COMMENT';
const UPDATE_COMMENT = 'UPDATE_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';

// 액션 생성 함수
export const getComments = () => async dispatch => {
  dispatch({ type: GET_COMMENTS });
  try {
    const comments = await commentsApiService.getComments();
    dispatch({ type: GET_COMMENTS_SUCCESS, comments });
  } catch (error) {
    dispatch({ type: GET_COMMENTS_ERROR, error });
  }
};
export const addComment = () => ({ type: ADD_COMMENT });
export const updateComment = () => ({ type: UPDATE_COMMENT });
export const deleteComment = () => ({ type: DELETE_COMMENT });

// 초기값
const initialState = {
  comments: {
    loading: false,
    data: null,
    error: null,
  },
};

const comment = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        comments: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case GET_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: {
          loading: false,
          data: action.comments,
          error: null,
        },
      };
    case GET_COMMENTS_ERROR:
      return {
        ...state,
        comments: {
          loading: false,
          data: null,
          error: action.error,
        },
      };
    default:
      return state;
  }
};

export default comment;
