import styled from '@emotion/styled';

const Comment = styled.div`
  padding: 15px 15px 0;
  text-align: left;
  & > img {
    vertical-align: middle;
    margin-right: 10px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
  &:first-of-type {
    margin-top: 20px;
  }
`;

const CreatedAt = styled.div`
  float: right;
  vertical-align: middle;
`;

const Content = styled.div`
  margin: 15px 0;
`;

const Button = styled.div`
  text-align: right;
  margin: 10px 0;
  & > button {
    & + button {
      margin-left: 10px;
    }
    min-width: 60px;
    line-height: 30px;
    border: 1px solid #666;
    background: #fff;
    cursor: pointer;
  }
`;

export { Comment, Button, Content, CreatedAt };
