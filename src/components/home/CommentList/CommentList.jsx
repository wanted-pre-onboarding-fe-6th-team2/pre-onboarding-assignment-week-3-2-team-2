import * as Styled from './CommentList.styled';

const CommentList = ({ commentList }) =>
  commentList.map((comment, key) => (
    <Styled.Comment key={key}>
      <img src={comment.profile_url} alt="" />
      {comment.author}
      <Styled.CreatedAt>{comment.createdAt}</Styled.CreatedAt>
      <Styled.Content>{comment.content}</Styled.Content>
      <Styled.Button>
        <button type="button">수정</button>
        <button type="button">삭제</button>
      </Styled.Button>
      <hr />
    </Styled.Comment>
  ));

export default CommentList;
