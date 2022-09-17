import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getComments } from '@/store/comment';
import CommentList from '@/components/home/CommentList/CommentList';
import Form from '@/components/home/Form/Form';
import PageList from '@/components/home/PageList/PageList';

const Home = () => {
  const { loading, data, error } = useSelector(state => state.comment.comments);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getComments());
  }, [dispatch]);

  if (loading) return <div>loading...</div>;
  if (error) return <div>error.. </div>;
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
