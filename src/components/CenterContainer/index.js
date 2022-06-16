import { useContext } from 'react'
import { useDrop } from 'react-dnd'
import { Customer, SnackFilter } from '../index.js'
import { ApplicationContext } from '../../shared/context/index.js'

import {
   Container,
   Content,
   CustomerContainer
} from './style.js'

export function CenterContainer({ handleRemove }) {

   const {
      customer,

      checkoutModalIsOpen, setCheckoutModalIsOpen,
      historicModalIsOpen, setHistoricModalIsOpen,
      addSnackModalIsOpen, setAddSnackModalIsOpen
   } = useContext(ApplicationContext)

   const [{ isOver }, drop] = useDrop(() => ({
      accept: 'image',
      drop: (item) => handleRemove(item.id),
      collect: (monitor) => ({ isOver: !!monitor.isOver() })
   }))

   return (
      <Container ref={drop}>
         <Content>
            <SnackFilter />
            <Customer customer={customer} />

            {/** Cliente da vez */}
            <CustomerContainer>
               <button onClick={() => setHistoricModalIsOpen(!historicModalIsOpen)}>
                  {historicModalIsOpen ? 'Fechar histórico' : 'Abrir histórico'}
               </button>

               <button onClick={() => setAddSnackModalIsOpen(!addSnackModalIsOpen)}>
                  {addSnackModalIsOpen ? 'Fechar modal' : 'Adicionar produto'}
               </button>

               <button onClick={() => setCheckoutModalIsOpen(!checkoutModalIsOpen)}>
                  {checkoutModalIsOpen ? 'Fechar a notinha' : 'Abrir a notinha'}
               </button>
            </CustomerContainer>
         </Content>
      </Container>
   )
}