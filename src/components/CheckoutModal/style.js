import styled from "styled-components";
import { colorPalette } from "../../shared/style";

export const Content = styled.div`
   width: 380px;
   height: 400px;
   position: absolute;
   top: 50%;
   transform: translateY(-50%);
   overflow-x: hidden; 
   overflow-y: scroll; 
   white-space: nowrap;
   display: flex;
   flex-direction: column;
   align-items: center;
   border: 1px solid ${colorPalette.gray};
   background-color: ${colorPalette.lightWhite}
`

export const Title = styled.h2`
   width: 100%;
   text-transform: uppercase;
   background-color: ${colorPalette.darkRed};
   padding: 10px 8px;
   text-align: center;
`

export const Body = styled.div`
   width: 100%;
   padding: 10px 8px;
`

export const Amount = styled.p`
   text-align: center;
   padding: 5px 0;
   font-weight: bold;
`

export const Table = styled.table`
   width: 100%;
   margin: 20px 0;
   text-align: left;
   border-spacing: 5px;
   border-collapse: separate;
   border: 1px solid ${colorPalette.gray};
`

export const THeader = styled.tr``

export const Button = styled.button`
   text-transform: uppercase;
   padding: 5px;
`