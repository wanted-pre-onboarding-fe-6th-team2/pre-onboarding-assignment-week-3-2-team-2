import styled from '@emotion/styled';

const PageListStyle = styled.div`
  margin: 20px 0 50px;
  text-align: center;
`;

const Page = styled.button`
  margin: 0 10px;
  font-size: 1rem;
  line-height: 30px;
  border: 0;
  border-bottom: 3px solid transparent;
  cursor: pointer;
  background: transparent;
  ${props => props['aria-current'] && `border-bottom:3px solid #000`}
`;

export { Page, PageListStyle };
