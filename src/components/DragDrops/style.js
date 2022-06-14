import styled from "styled-components";

import { colorPalette } from '../../shared/style/index.js'


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 90vh;
  padding: 20px;
`

export const SnackContainer = styled.div`
  width: 100%;
  height: 200px;
  position: absolute;
  top: 0;
  display: flex;
  overflow: auto;
`

export const SnackContent = styled.div`
  padding: 30px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  gap: 8px;
`

export const Amount = styled.h2`
  position: absolute;
  z-index: 2;
  left: 0;
`

export const PurchaseBox = styled.div`
  width: 100%;
  height: 280px;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  background: ${colorPalette.darkRed};
`

export const PurchaseContainer = styled.div`
  width: 80%;
  height: 250px;
  position: absolute;
  display: flex;
  justify-content: center;
  overflow: auto;
  bottom: 0;
`

export const PurchaseContent = styled.div`
  padding: 30px 20px 30px 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  gap: 8px;
`

export const CustomerContainer = styled.div`
  width: 150px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
`

export const CustomerContent = styled.div`

`
