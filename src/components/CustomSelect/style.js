import styled from "styled-components";
import { colorPalette } from "../../shared/style";

export const Container = styled.div`
   width: 80%;
   border: 1px solid ${colorPalette.gray};
`
export const Content = styled.div`
   display: flex;
   justify-content: space-between;
`

export const List = styled.ul`
   display: ${props => props.display === 1 ? 'block' : 'none'};
`

export const ListItem = styled.li`
   border: 1px solid ${colorPalette.gray};
   list-style: none;

   :hover {
      background-color: ${colorPalette.lightRed};
      cursor: pointer;
   }
`

export const Button = styled.button`
   width: 100%;
`