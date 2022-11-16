import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 1.5vh 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  min-height: 95vh;
  overflow-x: hidden;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 95vw;
  max-width: 600px;
  min-height: 92vh;
  border-radius: 1.8rem;
  background: #262626;
  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.15);
`;

export const Header = styled.section`
  background: #262626;
  border-radius: 1.5rem 1.5rem 0 0;
  color: #fff;
  width: 100%;
`;

export const Title = styled.div`
  display: grid;
  grid-template-columns: 1fr 5rem;
  width: 97.5%;
  padding: 2rem 0;

  h1 {
    width: 100%;
    padding-left: 15%;
    text-align: center;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fc540c;
  }
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 5rem;
  width: 95%;
  padding: 2rem 0;
  margin-bottom: 2rem;
  border-bottom: 0.1rem solid #fc540c;
`;

export const SubmitButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 3rem;
  color: #fc540c;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #008000;
    transform: scale(1.2);
  }
`;

export const Content = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 95%;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  gap: 2rem;
  padding: 0 0 2rem 0;
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  padding-top: 2rem;
`;
