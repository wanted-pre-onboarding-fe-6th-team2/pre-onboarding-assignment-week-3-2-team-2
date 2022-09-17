import { ACTION_TYPE } from '@/constants/actionType';

const initialState = {
  comments: {
    isLoading: false,
    data: [],
    error: null,
  },
  comment: {
    isLoading: false,
    data: [],
    error: null,
  },
};

const commentReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ACTION_TYPE.GET_COMMENTS:
      return {
        ...state,
        comments: {
          isLoading: true,
          data: null,
          error: null,
        },
      };

    case ACTION_TYPE.GET_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: {
          isLoading: false,
          data: action.comments,
          error: null,
        },
      };

    case ACTION_TYPE.GET_COMMENTS_FAILURE:
      return {
        ...state,
        comments: {
          isLoading: false,
          data: null,
          error: action.error,
        },
      };

    case ACTION_TYPE.GET_COMMENT:
      return {
        ...state,
        comment: {
          isLoading: true,
          data: null,
          error: null,
        },
      };

    case ACTION_TYPE.GET_COMMENT_SUCCESS:
      return {
        ...state,
        comment: {
          isLoading: false,
          data: action.comment,
          error: null,
        },
      };

    case ACTION_TYPE.GET_COMMENT_FAILURE:
      return {
        ...state,
        comments: {
          isLoading: false,
          data: null,
          error: action.error,
        },
      };

    case ACTION_TYPE.ADD_COMMENT:
      return {
        ...state,
        comments: {
          isLoading: true,
          data: state.comments.data,
          error: null,
        },
      };

    case ACTION_TYPE.ADD_COMMENT_SUCCESS:
      return {
        ...state,
        comments: {
          isLoading: false,
          data: [action.comments, ...state.comments.data],
          error: null,
        },
      };

    case ACTION_TYPE.ADD_COMMENT_FAILURE:
      return {
        ...state,
        comments: {
          isLoading: false,
          data: state.comments.data,
          error: action.error,
        },
      };

    case ACTION_TYPE.DELETE_COMMENT:
      return {
        ...state,
        comments: {
          isLoading: true,
          data: state.comments.data,
          error: null,
        },
      };

    case ACTION_TYPE.DELETE_COMMENT_SUCCESS:
      return {
        ...state,
        comments: {
          isLoading: false,
          data: state.comments.data,
          error: null,
        },
      };

    case ACTION_TYPE.DELETE_COMMENT_FAILURE:
      return {
        ...state,
        comments: {
          isLoading: false,
          data: state.comments.data,
          error: action.error,
        },
      };

    case ACTION_TYPE.UPDATE_COMMENT:
      return {
        ...state,
        comments: {
          isLoading: true,
          data: state.comments.data,
          error: null,
        },
      };

    case ACTION_TYPE.UPDATE_COMMENT_SUCCESS:
      return {
        ...state,
        comments: {
          isLoading: false,
          data: state.comments.data,
          error: null,
        },
      };

    case ACTION_TYPE.UPDATE_COMMENT_FAILURE:
      return {
        ...state,
        comments: {
          isLoading: false,
          data: state.comments.data,
          error: action.error,
        },
      };

    default:
      return state;
  }
};

export default commentReducer;
