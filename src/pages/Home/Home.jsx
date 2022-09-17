import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CommentList from '@/components/home/CommentList/CommentList';
import Form from '@/components/home/Form/Form';
import PageList from '@/components/home/PageList/PageList';
import { getCommentsThunk } from '@/actions/comments';
import {
  getCommentThunk,
  addCommentThunk,
  updateCommentThunk,
  deleteCommentThunk,
} from '@/actions/comment';

const Home = () => {
  const isLoading = useSelector(state => state.comments.isLoading);
  const data = useSelector(state => state.comments.data);
  const error = useSelector(state => state.comments.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCommentsThunk());
  }, [dispatch]);

  const handleAddClick = () => {
    dispatch(
      addCommentThunk({
        profileUrl: 'https://picsum.photos/id/22/50/50',
        author: 'abc_22',
        content: 'REEEEEEEEEEEEEEEEEEEEEDUX',
        createdAt: '2022-03-22',
      })
    );
  };

  const handleGetClick = () => {
    dispatch(getCommentThunk(22));
  };

  const handleUpdateClick = () => {
    dispatch(
      updateCommentThunk({
        commentId: 1,
        comment: {
          profileUrl: 'https://picsum.photos/id/22/50/50',
          author: 'abc_22',
          content: 'REEEEEEEEEEEEEEEEEEEEEDUX',
          createdAt: '2022-03-22',
        },
      })
    );
  };

  const handleDeleteClick = () => {
    dispatch(deleteCommentThunk(22));
  };

  if (isLoading) return <h1>로딩 중입니다...</h1>;
  if (error) return <h1>{error.message}</h1>;
  if (!data) return null;

  return (
    <>
      <button type="button" onClick={handleAddClick}>
        추가 하기
      </button>
      <button type="button" onClick={handleGetClick}>
        하나 가져오기
      </button>
      <button type="button" onClick={handleUpdateClick}>
        하나 수정하기
      </button>
      <button type="button" onClick={handleDeleteClick}>
        삭제하기
      </button>
      <CommentList commentList={data} />
      <PageList />
      <Form />
    </>
  );
};

export default Home;
