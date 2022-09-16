import BaseApiService from '@/api/core';

class CommentsApiService extends BaseApiService {
  constructor() {
    super('comments');
  }

  getComments = ({ page = 1, limit = 10 } = {}) =>
    this.http
      .get(`?_page=${page}&_limit=${limit}`)
      .then(BaseApiService.handleResponse)
      .catch(BaseApiService.handleError);

  getComment = ({ commentId } = {}) =>
    this.http
      .get(`/${commentId}`)
      .then(BaseApiService.handleResponse)
      .catch(BaseApiService.handleError);

  createComment = ({ comment: { profileUrl, author, content, createdAt } } = { comment: {} }) =>
    this.http
      .post('', { profileUrl, author, content, createdAt })
      .then(BaseApiService.handleResponse)
      .catch(BaseApiService.handleError);

  updateComment = ({ commentId, comment } = {}) => {
    const { profileUrl, author, content, createdAt } = comment;
    return this.http
      .put(`/${commentId}`, { profileUrl, author, content, createdAt })
      .then(BaseApiService.handleResponse)
      .catch(BaseApiService.handleError);
  };

  deleteComment = ({ commentId } = {}) =>
    this.http
      .delete(`/${commentId}`)
      .then(BaseApiService.handleResponse)
      .catch(BaseApiService.handleError);
}

export default new CommentsApiService();
