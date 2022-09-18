import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CommentList from '@/components/home/CommentList/CommentList';
import Form from '@/components/home/Form/Form';
import PageList from '@/components/home/PageList/PageList';
import { getCommentsThunk } from '@/store/comments';

const Home = () => {
  const isLoading = useSelector(state => state.comments.isLoading);
  const data = useSelector(state => state.comments.data);
  const error = useSelector(state => state.comments.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCommentsThunk());
  }, [dispatch]);

  if (isLoading) return <h1>로딩 중입니다...</h1>;
  if (error) return <h1>{error.message}</h1>;
  if (!data) return null;

  return (
    <>
      <CommentList commentList={data} />
      <PageList />
      <Form />
    </>
  );
};

export default Home;
