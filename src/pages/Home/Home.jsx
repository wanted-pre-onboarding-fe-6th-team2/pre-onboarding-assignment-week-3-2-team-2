import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CommentList from '@/components/home/CommentList/CommentList';
import Form from '@/components/home/Form/Form';
import PageList from '@/components/home/PageList/PageList';
import { getCommentsThunk } from '@/store/comments';

const Home = () => {
  const isLoading = useSelector(state => state.comments.isLoading);
  const error = useSelector(state => state.comments.error);
  const commentList = useSelector(state => state.comments.data.data);
  const totalCount = useSelector(state => state.comments.data.totalCount);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10;

  useEffect(() => {
    dispatch(getCommentsThunk(currentPage, limit));
  }, [dispatch, currentPage, setCurrentPage]);

  if (isLoading) return <h1>로딩 중입니다...</h1>;
  if (error) return <h1>{error.message}</h1>;
  if (!commentList) return null;

  return (
    <>
      <CommentList commentList={commentList} />
      <PageList
        totalCount={totalCount}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        limit={limit}
      />
      <Form />
    </>
  );
};

export default Home;
