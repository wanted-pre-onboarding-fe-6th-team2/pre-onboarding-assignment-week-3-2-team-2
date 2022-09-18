import React, { useState, useEffect } from 'react';
import CommentList from '@/components/home/CommentList/CommentList';
import Form from '@/components/home/Form/Form';
import PageList from '@/components/home/PageList/PageList';
import commentsApiService from '@/api/commentsApiService';

const Home = () => {
  const [commentList, setCommentList] = useState([]);
  const [totalComments, setTotalComments] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10;

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const commentsResponse = await commentsApiService.getComments({
          page: currentPage,
          limit,
        });
        setCommentList(commentsResponse.data);
        setTotalComments(commentsResponse.headers['x-total-count']);
      } catch (error) {
        throw new Error(error);
      }
    };
    fetchComments();
  }, [currentPage, setCurrentPage]);

  return (
    <>
      <CommentList commentList={commentList} />
      <PageList
        totalComments={totalComments}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        limit={limit}
      />
      <Form />
    </>
  );
};

export default Home;
