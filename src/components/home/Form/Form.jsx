import * as Styled from './Form.styled';

const Form = () => (
  <Styled.FormStyle>
    <form>
      <input
        type="text"
        name="profile_url"
        placeholder="https://picsum.photos/id/1/50/50"
        required
      />
      <br />
      <input type="text" name="author" placeholder="작성자" />
      <br />
      <textarea name="content" placeholder="내용" required />
      <br />
      <input type="text" name="createdAt" placeholder="2020-05-30" required />
      <br />
      <button type="submit">등록</button>
    </form>
  </Styled.FormStyle>
);

export default Form;
