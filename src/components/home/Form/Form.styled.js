import styled from '@emotion/styled';
import { css } from '@emotion/react';

const boxShadow = css`
  border-radius: 0.25rem;
  border: none;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const FormStyle = styled.div`
  & > form {
    display: flex;
    flex-direction: column;
    padding: 10px 10px;
    margin-bottom: 50px;
  }

  & > form > textarea {
    padding: 5px 1%;
    width: 98%;
    height: 60px;
    ${boxShadow}
  }
  & > form > input[type='text'] {
    padding: 5px 1%;
    width: 98%;
    height: 30px;
    ${boxShadow}
  }
  & > form > div > button {
    width: 70px;
    padding: 0.375rem 0.75rem;
    ${boxShadow}
    cursor: pointer;
  }
  & > form > div > #cancleBtn {
    margin-left: 12px;
  }
`;
