import { useContext } from 'react'
import { useDrop } from 'react-dnd'
import { ApplicationContext } from '../../shared/context'
import { convertValueIntoCurrency } from '../../utils'
import { SnackCard } from '../index.js'

import {
   Box,
   Container,
   Content,
   Amount
} from './style.js'


export function PurchaseContainer({ handleAdd, handleRemove }) {

   const {
      board,
      amount,
   } = useContext(ApplicationContext)


   /** funcão para identificar quando arrasta um lanche para lista */
   const [{ isOver }, drop] = useDrop(() => ({
      accept: 'image',
      drop: (item) => handleAdd(item.id),
      collect: (monitor) => ({ isOver: !!monitor.isOver() })
   }))

   return (
      <Box>
         <Amount>Valor total: {convertValueIntoCurrency(amount)}</Amount>
         <Container ref={drop}>
            <Content >
               {board.map((snack) => (
                  <SnackCard
                     key={snack.id}
                     snack={snack}
                     isRemovable
                     isQuantifiable
                     itsOnBoard
                     handleClickOnRemove={(id) => handleRemove(id)}
                  />
               ))}
            </Content>
         </Container>
      </Box>
   )
}