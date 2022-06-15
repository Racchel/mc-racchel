import styled from "styled-components";

import { colorPalette } from '../../shared/style/index.js'


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const SnackContainer = styled.div`
  width: 100%;
  height: 200px;
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

export const CenterBox = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-top: 20px;
`

export const CenterContent = styled.div`
  width: 350px;
  height: 85%;
  /* border: 5px solid ${colorPalette.gray}; */
  border-bottom: none;
  border-radius: 50% 50% 0 0;
`

export const Amount = styled.h2`
  width: 100%;
  color: ${colorPalette.white};
  padding: 10px;
`

export const PurchaseBox = styled.div`
  width: 100%;
  height: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('https://img.freepik.com/fotos-gratis/fundo-de-textura-de-madeira-velha-vintage_55716-1138.jpg?w=2000');
  background-repeat: no-repeat;
  background-size: cover;
`

export const PurchaseContainer = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: center;
  overflow: auto;
  border-radius: 20px 20px 0 0 ;
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
  background-color: green;
`

export const CustomerContent = styled.div`

`

export const Filter = styled.button`
  position: absolute;
  top: 10px;
  right: 20px;
`