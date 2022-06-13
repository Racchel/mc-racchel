import { useContext, useState } from 'react'
import { Picture } from '../index.js'
import { convertValueIntoCurrency } from '../../utils/index.js'
import { ApplicationContext } from '../../shared/context/index.js'

import {
   Content,
   Button
} from './style.js'

export function SnackCard({ snack, isNameable, isQuantifiable, isRemovable, handleClick }) {
   const [qtd, setQtd] = useState(1)

   const {
      board, setBoard
   } = useContext(ApplicationContext)

   function UpdateQuantity(id, qtd) {
      const newListSnack = [...board]
      const snackIndex = newListSnack.findIndex(snack => id === snack.id)
      newListSnack[snackIndex].qtd = qtd
      setBoard(newListSnack)
      setQtd(qtd)
   }

   return (
      <Content>
         <Picture id={snack.id} image={snack.image} alt='' isChosen={snack.isChosen} />
         {isNameable && (snack.name)}
         <p>{convertValueIntoCurrency(snack.price)}</p>

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
            <Button onClick={() => handleClick(snack.id)}>X</Button>
         )
         }
      </Content >
   )
}