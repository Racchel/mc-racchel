import styled from "styled-components";

import { colorPalette } from '../../shared/style/index.js'

export const Amount = styled.h2`
  width: 100%;
  color: ${colorPalette.white};
  padding: 10px;
`

export const Box = styled.div`
  width: 100%;
  height: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('https://img.freepik.com/fotos-gratis/fundo-de-textura-de-madeira-velha-vintage_55716-1138.jpg?w=2000');
  background-repeat: no-repeat;
  background-size: cover;
`

export const Container = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: center;
  overflow: auto;
  border-radius: 20px 20px 0 0 ;
`

export const Content = styled.div`
  padding: 30px 20px 30px 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  gap: 8px;
`
