import { useContext, useState } from 'react'
import { ApplicationContext } from '../../shared/context/index.js'
// import { convertValueIntoCurrency } from '../../utils/index.js'
import { v4 as uuidv4 } from 'uuid'

import {
   Content, Title, Form, Label
} from './style.js'

export function SnackModal({ handleClickToClose, handleClickToSubmit }) {

   const [name, setName] = useState('')
   const [price, setPrice] = useState(0)
   const [image, setImage] = useState('')

   const {
      listSnacks, setListSnacks
   } = useContext(ApplicationContext)

   function handleSubmit(e) {
      e.preventDefault()

      const newSnack = {
         id: uuidv4(),
         name: name,
         price: price,
         qtd: 0,
         isChosen: true,
         image: image
      }

      setListSnacks([...listSnacks, newSnack])

      setName('')
      setPrice(0)
      setImage('')
   }

   return (
      <Content>
         <Title>Adicionar Lanche
            <button onClick={() => handleClickToClose()}>X</button>
         </Title>

         <Form onSubmit={(e) => { handleSubmit(e) }}>
            <Label>
               Nome
               <input
                  required
                  type="text"
                  onChange={(e) => { setName(e.target.value) }}
                  value={name}
               />
            </Label>

            <Label>
               Preço
               <input
                  required min={1} max={100}
                  type="number"
                  onChange={(e) => { setPrice(Number(e.target.value)) }}
                  value={price}
               />
            </Label>

            <Label>
               Imagem
               <input
                  required
                  type="text"
                  onChange={(e) => { setImage(e.target.value) }}
                  value={image}
               />
            </Label>

            <button type='submit' onClick={(e) => handleSubmit(e)}>Adicionar lanche</button>
         </Form>
      </Content>
   )
}