import React from 'react';
import CommentList from '@/components/home/CommentList/CommentList';
import Form from '@/components/home/Form/Form';
import PageList from '@/components/home/PageList/PageList';

const Home = () => {
  const dummyCommentList = [
    {
      id: 1,
      profile_url: 'https://picsum.photos/id/1/50/50',
      author: 'abc_1',
      content: 'UI 테스트는 어떻게 진행하나요',
      createdAt: '2020-05-01',
    },
  ];
  return (
    <>
      <CommentList commentList={dummyCommentList} />
      <PageList />
      <Form />
    </>
  );
};

export default Home;
