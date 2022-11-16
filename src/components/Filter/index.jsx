import React from "react";

import * as S from "./styles";

const Filter = ({ description, value, handleFilter, active }) => {
  return (
    <S.Container onClick={handleFilter} active={active}>
      <h1>{description}</h1>
      <p>{value}</p>
    </S.Container>
  );
};

export default Filter;
