import styled from "styled-components";
import { colorPalette } from "../../shared/style";

export const Content = styled.div`
  width: 150px;
  height: 175px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${colorPalette.gray};
  background-color: ${props => props.isDragging
    ? colorPalette.darkYellow
    : props.isChosen
      ? colorPalette.white
      : props.itsOnBoard
        ? colorPalette.white
        : colorPalette.lightYellow
  };
  position: relative;
  :hover {
    cursor: move;
  }
`

export const Button = styled.button`
  width: 20px;
  height: 30px;
`

export const AddButton = styled.button`
  width: 20px;
  height: 20px;
  position: absolute;
  bottom: 0;
  right: 0;
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

export const Category = styled.span`
  background-color: ${colorPalette.darkYellow};
  color: ${colorPalette.black};
  padding: 5px;
  position: absolute;
  right: 0;
`