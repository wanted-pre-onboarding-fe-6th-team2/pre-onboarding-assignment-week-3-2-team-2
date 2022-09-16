import { useState } from 'react';
import * as Styled from './Form.styled';

const Form = () => {
  const [inputs, setInputs] = useState({
    profileUrl: '',
    author: '',
    content: '',
    createdAt: '',
  });

  const { profileUrl, author, content, createdAt } = inputs;

  const onChange = e => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onSubmit = e => {
    e.preventDefault();
  };

  return (
    <Styled.FormStyle>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="profileUrl"
          placeholder="https://picsum.photos/id/1/50/50"
          value={profileUrl}
          onChange={onChange}
          required
        />
        <br />
        <input type="text" name="author" placeholder="작성자" value={author} onChange={onChange} />
        <br />
        <textarea name="content" placeholder="내용" value={content} onChange={onChange} required />
        <br />
        <input
          type="text"
          name="createdAt"
          placeholder="2020-05-30"
          value={createdAt}
          onChange={onChange}
          required
        />
        <br />
        <button type="submit">등록</button>
      </form>
    </Styled.FormStyle>
  );
};

export default Form;
