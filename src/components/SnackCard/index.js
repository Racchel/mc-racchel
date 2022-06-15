/*eslint no-restricted-globals: ["error", "event", "fdescribe"]*/

import { useDrag } from 'react-dnd'
import { useContext, useEffect, useRef, useState } from 'react'
import { Picture } from './Picture/index.js'
import { convertValueIntoCurrency } from '../../utils/index.js'
import { ApplicationContext } from '../../shared/context/index.js'

import {
   Title,
   Content,
   ContentButton,
   Price,
   Category,
   AddButton,
   Button
} from './style.js'

function EditAndDelete({ id, handleDelete, handleEdit }) {
   return (
      <ContentButton>
         <Button onClick={() => handleEdit(id)}>✏️</Button>
         <Button onClick={() => handleDelete(id)}>🗑️</Button>
      </ContentButton>
   )
}

function BoxSnackCard({ isChosen, itsOnBoard, id, children }) {

   const [{ isDragging }, drag] = useDrag(() => ({
      type: "image",
      item: { id: id },
      collect: (monitor) => ({
         isDragging: !!monitor.isDragging(),
      }),
   }));

   /** retornar um componente arrastável ou não */
   return isChosen ? (
      <Content ref={drag} isChosen={isChosen} isDragging={isDragging} itsOnBoard={itsOnBoard} >
         {children}
      </Content>
   ) : (
      <Content isChosen={isChosen} isDragging={isDragging} itsOnBoard={itsOnBoard} >
         {children}
      </Content>
   )
}

export function SnackCard({
   snack,
   itsOnBoard, isNameable, isQuantifiable, isRemovable, isAdmin,
   handleClickOnAdd, handleClickOnRemove
}) {
   const [qtd, setQtd] = useState(1)

   const {
      board, setBoard,
      listSnacks, setListSnacks,
      handleEditSnackModal
   } = useContext(ApplicationContext)

   /** usar uma referência porque a atualização do estado não é entendida na mesma hora */
   const listSnacksRef = useRef(listSnacks)

   useEffect(() => {
      listSnacksRef.current = listSnacks
   }, [listSnacks])


   /** função para atualizar a quantidade de items de um lanche escolhido */
   function UpdateQuantity(id, qtd) {
      const newListSnack = [...board]
      const snackIndex = newListSnack.findIndex(snack => id === snack.id)
      newListSnack[snackIndex].qtd = qtd
      setBoard(newListSnack)
      setQtd(qtd)
   }

   /** função para excluir um lanche da prateleira */
   function HandleDelete(id) {
      const snackConfirmBoard = board.find((snack) => id === snack.id)
      if (snackConfirmBoard) {
         return alert('Você não pode excluir um lanche escolhido por um cliente!')
      }

      const snackConfirm = listSnacksRef.current.find((snack) => id === snack.id)

      if (confirm(`Deseja mesmo exluir esse item: ${snackConfirm.name}?`)) {
         const snackRemove = listSnacksRef.current.filter((snack) => id !== snack.id)
         setListSnacks(snackRemove);
      }
   }

   function HandleEdit(id) {
      const snackConfirmBoard = board.find((snack) => id === snack.id)
      if (snackConfirmBoard) {
         return alert('Você não pode editar um lanche escolhido por um cliente!')
      }

      const editSnack = listSnacksRef.current.find((snack) => id === snack.id)
      handleEditSnackModal(editSnack)
   }

   return (
      <BoxSnackCard isChosen={snack.isChosen} itsOnBoard={itsOnBoard} id={snack.id}>
         <Category>{snack.category}</Category>
         {isAdmin && (
            <EditAndDelete
               handleEdit={() => (HandleEdit(snack.id))}
               handleDelete={() => (HandleDelete(snack.id))}
            />
         )}

         <Picture id={snack.id} image={snack.image} alt='' isChosen={snack.isChosen} isAdmin />
         <Title>{isNameable && (snack.name)}</Title>
         <Price>{convertValueIntoCurrency(snack.price)}</Price>

         {
            isQuantifiable && (
               <input
                  required
                  min={1} max={10}
                  type='number'
                  value={qtd}
                  onChange={(e) => UpdateQuantity(snack.id, e.target.value)}
               />
            )
         }

         {isRemovable && (
            <Button onClick={() => handleClickOnRemove(snack.id)}>X</Button>
         )}

         {!isRemovable && (
            <AddButton onClick={() => handleClickOnAdd(snack.id)} disabled={!snack.isChosen}>
               {snack.isChosen ? '+' : 'V'}
            </AddButton>
         )}

      </BoxSnackCard >
   )
}