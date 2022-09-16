import * as Styled from './PageList.styled';

const PageList = () => {
  const pageArray = [];

  pageArray.push(
    // 임시로 페이지 하나만 설정했습니다.
    <Styled.Page key="1">1</Styled.Page>
  );

  return <Styled.PageListStyle>{pageArray}</Styled.PageListStyle>;
};

export default PageList;
