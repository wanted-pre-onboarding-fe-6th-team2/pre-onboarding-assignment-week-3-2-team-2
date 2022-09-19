import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CommentList from '@/components/home/CommentList/CommentList';
import Form from '@/components/home/Form/Form';
import PageList from '@/components/home/PageList/PageList';
import { getCommentsThunk } from '@/store/comments';
import Loading from '@/components/common/Loading/Loading';

const Home = () => {
  const isLoading = useSelector(state => state.comments.isLoading);
  const error = useSelector(state => state.comments.error);
  const commentList = useSelector(state => state.comments.data.data);
  const totalCount = useSelector(state => state.comments.data.totalCount);
  const dispatch = useDispatch();

  const [selectedId, setSelectedId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10;

  useEffect(() => {
    dispatch(getCommentsThunk(currentPage, limit));
  }, [dispatch, currentPage, setCurrentPage]);

  if (isLoading) return <Loading />;
  if (error) return <h1>{error.message}</h1>;
  if (!commentList) return null;

  return (
    <>
      <CommentList
        commentList={commentList}
        setSelectedId={setSelectedId}
        setCurrentPage={setCurrentPage}
      />
      <PageList
        totalCount={totalCount}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        limit={limit}
      />
      <Form selectedId={selectedId} setSelectedId={setSelectedId} setCurrentPage={setCurrentPage} />
    </>
  );
};

export default Home;
