import { useContext, useState, useEffect } from 'react'
import { ApplicationContext } from '../../../shared/context/index.js'
// import { convertValueIntoCurrency } from '../../utils/index.js'
import { v4 as uuidv4 } from 'uuid'

import {
   Content, Title, Form, Label
} from './style.js'

export function SnackModal({ handleClickToClose, handleClickToSubmit }) {
   const {
      listCategories, setListCategories,
      listSnacks, setListSnacks,
      editSnack, setEditSnack,
      setEditSnackModalIsOpen
   } = useContext(ApplicationContext)

   const [id, setId] = useState(0)
   const [name, setName] = useState('')
   const [price, setPrice] = useState(0)
   const [image, setImage] = useState('')
   const [category, setCategory] = useState(listCategories[0].name)

   useEffect(() => {
      if (editSnack.id) {
         setId(editSnack.id)
         setName(editSnack.name)
         setPrice(editSnack.price)
         setImage(editSnack.image)
         setCategory(editSnack?.category)
      }
   }, [editSnack])


   function handleSubmit(e) {

      e.preventDefault()

      if (!name || !price || !image) return alert('Preencha todos os campos!')

      if (id) {

         const newSnack = {
            id: id,
            name: name,
            price: price,
            qtd: 0,
            isChosen: true,
            image: image,
            category: category
         }
         const newListSnack = [...listSnacks]
         const snackIndex = newListSnack.findIndex(snack => id === snack.id)
         newListSnack[snackIndex] = newSnack
         setListSnacks(newListSnack)
         setEditSnackModalIsOpen(false)
      } else {

         const newSnack = {
            id: uuidv4(),
            name: name,
            price: price,
            qtd: 0,
            isChosen: true,
            image: image,
            category: category
         }
         setListSnacks(prevState => [...prevState, newSnack])
      }

      setName('')
      setPrice(0)
      setImage('')
      setEditSnack({})
   }

   return (
      <Content>
         <Title>{id ? 'Editar lanche' : 'Adicionar Lanche'}
            <button onClick={() => {
               setEditSnack({})
               handleClickToClose()
            }}>X</button>
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

            <Label>
               <select
                  required
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
               >
                  {listCategories.map((categorie) => (
                     <option key={categorie.id} value={categorie.name}>
                        {categorie.name}
                     </option>
                  ))}
               </select>
            </Label>

            <button type='submit' onClick={(e) => handleSubmit(e)}>{id ? 'Salvar alterações' : 'Adicionar'}</button>
         </Form>
      </Content>
   )
}