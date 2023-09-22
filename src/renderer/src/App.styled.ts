import styled from "styled-components";

export const AppWrapper = styled.div`
background: grey;
border-radius: 50%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
-webkit-app-region: drag;
`

export const CloseBtn = styled.div`
z-index: 9999999;
cursor: pointer;
background: red;
display: flex;
justify-content: center;
align-items: center;
width: 20px;
height: 20px;
border-radius: 6px;
position: absolute;
top: 0;
right: 10%;
`