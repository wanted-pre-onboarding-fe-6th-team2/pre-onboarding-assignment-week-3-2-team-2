import { useDispatch } from 'react-redux';
import * as Styled from './CommentList.styled';
import { deleteCommentThunk } from '@/store/comment';

const CommentList = ({ setSelectedId, commentList, setCurrentPage }) => {
  const dispatch = useDispatch();

  const handleDelete = (e, id) => {
    e.preventDefault();
    dispatch(deleteCommentThunk(id));
    setCurrentPage(1);
  };

  return commentList.map((comment, key) => (
    <Styled.Comment key={key}>
      <img src={comment.profileUrl} alt="" />
      {comment.author}
      <Styled.CreatedAt>{comment.createdAt}</Styled.CreatedAt>
      <Styled.Content>{comment.content}</Styled.Content>
      <Styled.Button>
        <button onClick={() => setSelectedId(comment.id)} type="button">
          수정
        </button>
        <button onClick={e => handleDelete(e, comment.id)} type="button">
          삭제
        </button>
      </Styled.Button>

      <hr />
    </Styled.Comment>
  ));
};
export default CommentList;
