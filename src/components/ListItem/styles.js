import { BsTrashFill } from "react-icons/bs";
import styled, { css } from "styled-components";

export const ListItem = styled.li`
  display: grid;
  grid-template-columns: 50px 1fr 50px;
  transition: all 0.3s;
  width: 100%;
  color: #303030;
`;

const listItemTextModifiers = {
  checked: () => css`
    text-decoration: line-through;
    font-style: italic;
    opacity: 0.7;
    color: #fc540c;
  `,
};

export const ListItemText = styled.p`
  ${({ checked }) => css`
    background: ${(props) => (props.checked ? "#303030" : "#fc540c")};
    border-radius: 1rem;
    padding: 1rem;
    font-size: 1.8rem;
    ${checked && listItemTextModifiers.checked()}

    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
  `}
`;

export const ListItemButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffff;
`;

export const DeleteIcon = styled(BsTrashFill)`
  &:hover {
    color: #f00;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  padding-top: 2rem;
`;
