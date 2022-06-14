import styled from "styled-components";
import { colorPalette } from "../../shared/style";

export const Content = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid ${colorPalette.gray};
  position: absolute;
  right: 20px;
  padding: 20px;
  background-color: ${colorPalette.lightWhite};
`

export const Table = styled.table`
   width: 100%;
   margin: 20px 0;
   text-align: left;
   border-spacing: 5px;
   border-collapse: separate;
   border: 1px solid ${colorPalette.gray};
`
