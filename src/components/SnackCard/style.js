import styled from "styled-components";
import { colorPalette } from "../../shared/style";

export const Content = styled.div`
  width: 150px;
  height: 175px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${colorPalette.gray};
  background-color: ${colorPalette.white};
  background-color: ${colorPalette.lightYellow};

  :hover {
    cursor: move;
  }
`

export const Button = styled.button`
  width: 20px;
  height: 30px;
`

export const ContentButton = styled.div`
  width: 100%;
`

export const Title = styled.p`
  font-size: 12px;
  text-align: center;

  :hover {
    cursor: move;
  }
`

export const Price = styled.p`
  :hover {
    cursor: move;
  }
`