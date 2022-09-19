import * as Styled from './PageList.styled';

const PageList = ({ totalCount, limit, currentPage, setCurrentPage }) => {
  const totalPaginate = Math.ceil(totalCount / limit);

  const handlePageChange = i => {
    setCurrentPage(i + 1);
    window.scrollTo(0, 0);
  };

  return (
    <Styled.PageListStyle>
      {Array(totalPaginate)
        .fill()
        .map((_, i) => (
          <Styled.Page
            key={i}
            onClick={() => handlePageChange(i)}
            aria-current={currentPage === i + 1 ? 'currentPage' : null}
          >
            {i + 1}
          </Styled.Page>
        ))}
    </Styled.PageListStyle>
  );
};

export default PageList;
