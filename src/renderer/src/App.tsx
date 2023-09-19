import React from "react";
import * as Styled from "./App.styled";

const App: React.FC = () => {
  return (
    <Styled.AppWrapper>
      App
      <Styled.CloseBtn
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        X
      </Styled.CloseBtn>
    </Styled.AppWrapper>
  );
};

export default App;
