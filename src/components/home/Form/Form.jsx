import { useCallback, useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addCommentThunk, getCommentThunk, updateCommentThunk } from '@/store/comment';
import * as Styled from './Form.styled';

const initialValue = {
  profileUrl: '',
  author: '',
  content: '',
  createdAt: '',
};

const Form = ({ selectedId, setSelectedId, setCurrentPage }) => {
  const dispatch = useDispatch();
  const focusRef = useRef();
  const [inputs, setInputs] = useState(initialValue);

  const { profileUrl, author, content, createdAt } = inputs;

  const fetchComment = useCallback(
    async id => {
      const response = await dispatch(getCommentThunk(id));
      setInputs({
        profileUrl: response.payload.profileUrl,
        author: response.payload.author,
        content: response.payload.content,
        createdAt: response.payload.createdAt,
      });
    },
    [dispatch]
  );

  useEffect(() => {
    if (selectedId) {
      fetchComment(selectedId);
      focusRef.current.focus();
    }
  }, [selectedId, fetchComment]);

  const onChange = e => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (!selectedId) {
      dispatch(addCommentThunk(inputs));
      setCurrentPage(1);
    } else {
      dispatch(updateCommentThunk({ commentId: selectedId, comment: { ...inputs } }));
    }
    setSelectedId(null);
    setInputs(initialValue);
  };

  const cancleConfig = () => {
    if (selectedId) setSelectedId(null);
    setInputs(initialValue);
  };

  return (
    <Styled.FormStyle>
      <form onSubmit={onSubmit}>
        <input
          ref={focusRef}
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
        <div>
          <button type="submit">{selectedId ? '수정' : '등록'}</button>
          <button id="cancleBtn" type="button" onClick={cancleConfig}>
            취소
          </button>
        </div>
      </form>
    </Styled.FormStyle>
  );
};

export default Form;
