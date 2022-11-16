import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  border: 0.1rem solid #ccc;
  padding: 1rem;
  border-radius: 0.5rem;
  position: relative;
  width: 100%;
`;

export const InputItem = styled.input`
  border: none;
  outline: none;
  font-size: 2rem;
  line-height: 2.1rem;
  width: 100%;
  background: transparent;
  padding-left: 1rem;
  color: #fc540c;

  &::placeholder {
    color: #fc540c;
  }
`;

export const ErrorText = styled.p`
  ${({ hasError }) => css`
    display: ${hasError ? "block" : "none"};
    position: absolute;
    top: 0;
    left: 1.5rem;
    transform: translatey(-50%);
    background-color: #fafafa;
    padding: 0 0.5rem;
    color: #f00;
    font-size: 1.6rem;
  `}
`;
