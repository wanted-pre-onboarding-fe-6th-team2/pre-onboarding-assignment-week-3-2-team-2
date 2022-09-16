import React, { useState, useEffect } from 'react';
import CommentList from '@/components/home/CommentList/CommentList';
import Form from '@/components/home/Form/Form';
import PageList from '@/components/home/PageList/PageList';
import commentsApiService from '@/api/commentsApiService';

const Home = () => {
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const commentsResponse = await commentsApiService.getComments();

        setCommentList(commentsResponse);
      } catch (error) {
        throw new Error(error);
      }
    };

    fetchComments();
  }, []);

  return (
    <>
      <CommentList commentList={commentList} />
      <PageList />
      <Form />
    </>
  );
};

export default Home;
