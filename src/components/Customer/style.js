import styled from "styled-components";

export const Container = styled.div`
  height: 190px;
  position: absolute;
  z-index: 2;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const Content = styled.img`
  width: 100px;
  height: 150px;
`

export const Name = styled.h3`
  text-transform: uppercase;
`