import React from "react";
import { BsCheckCircle, BsCircle } from "react-icons/bs";

import * as S from "./styles";

const ListItem = ({
  checked,
  description,
  handleDeleteItem,
  handleCheckItem,
  handleEditItem,
}) => {
  return (
    <>
      <S.ListItem>
        <S.ListItemButton onClick={handleCheckItem}>
          {checked ? <BsCheckCircle color="#008000" /> : <BsCircle />}
        </S.ListItemButton>
        <S.ListItemText
          suppressContentEditableWarning
          contentEditable={!checked}
          onBlur={(e) => handleEditItem(e.target.innerText)}
          checked={checked}
        >
          {description}
        </S.ListItemText>
        <S.ListItemButton onClick={handleDeleteItem}>
          <S.DeleteIcon />
        </S.ListItemButton>
      </S.ListItem>
    </>
  );
};

export default ListItem;
