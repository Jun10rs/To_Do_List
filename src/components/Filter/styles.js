import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ active }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    border-top: 0.1rem solid #fc540c;
    padding: 1rem;
    width: 100%;
    cursor: pointer;
    gap: 1rem;
    background-color: ${active && "#303030"};

    &:hover {
      background-color: rgba(0, 0, 0, 0.4);
    }

    h1 {
      font-size: 1.8rem;
    }

    p {
      font-size: 1.6rem;
    }
  `}
`;
