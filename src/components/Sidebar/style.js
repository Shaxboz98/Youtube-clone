import styled, { css } from "styled-components";

const common=css`
display: flex;
align-items: center;
`

const Container = styled.div`
width: 240px;
height: calc(100vh - 56px);
background: #212121;
`
const Items=styled.ul`
display: flex;
flex-direction: column;
padding: 0;
border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`
const Item = styled.li`
width: 100%;
height: 40px;
${common};
padding: 0 27px;
gap: 28px;
color: white;
:hover{
  background-color: rgba(255,255,255,0.2);
}

`
const Icon=styled.img`

`

const Title=styled.h4`
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 20px;
`
const Text=styled.h4`
font-size: 14px;
padding: 0 27px;
margin: 0;
`
export {Container,Items,Item,Icon,Title,Text}