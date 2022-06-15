import styled from "styled-components";

import { colorPalette } from '../../shared/style/index.js'

export const Container = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  overflow: auto;
`

export const Content = styled.div`
  padding: 30px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  gap: 8px;
`