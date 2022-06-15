import styled from "styled-components";
import { colorPalette } from '../../shared/style/index.js'


export const Container = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-top: 20px;
`

export const Content = styled.div`
  width: 350px;
  height: 85%;
  /* border: 5px solid ${colorPalette.gray}; */
  border-bottom: none;
  border-radius: 50% 50% 0 0;
`

export const CustomerContainer = styled.div`
  width: 150px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  background-color: green;
`

export const FilterContent = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
`

export const Filter = styled.button`
`