import React from "react";

import * as S from "./styles";

const TextField = ({ label, error, ...otherProps }) => {
  return (
    <div>
      <S.Container hasError={error}>
        <S.ErrorText hasError={error}>{error}</S.ErrorText>
        <S.InputItem type="text" {...otherProps} />
      </S.Container>
    </div>
  );
};

export default TextField;
