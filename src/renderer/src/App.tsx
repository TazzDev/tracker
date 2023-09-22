import React from "react";
import * as Styled from "./App.styled";

const App: React.FC = () => {
  return (
    <Styled.AppWrapper>
      App
      <Styled.CloseBtn
        onClick={() => {
          window.close()
          // e.preventDefault();
        }}
      >
        X
      </Styled.CloseBtn>
    </Styled.AppWrapper>
  );
};

export default App;
