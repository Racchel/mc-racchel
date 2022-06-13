import styled from "styled-components";

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
   border: 1px solid black;
   background-color: rgba(248,248,255);
`

export const Title = styled.h2`
   width: 100%;
   text-transform: uppercase;
   background-color: rgba(255,99,71);
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
   border: 1px solid gray;
`

export const THeader = styled.tr``

export const Button = styled.button`
   text-transform: uppercase;
   padding: 5px;
`