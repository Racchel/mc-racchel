import styled from "styled-components";

export const Content = styled.div`
   width: 380px;
   height: 400px;
   position: absolute;
   top: 50%;
   transform: translateY(-50%);
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

export const Form = styled.form`
   width: 100%;
   height: 100%;
   padding: 20px;
`

export const Label = styled.label`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`