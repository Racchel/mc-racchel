import { Customer, SnackFilter } from '../index.js'
import { useContext } from 'react'
import { ApplicationContext } from '../../shared/context/index.js'

import {
   Container,
   Content,
   CustomerContainer
} from './style.js'

export function CenterContainer() {

   const {
      customer,

      checkoutModalIsOpen, setCheckoutModalIsOpen,
      historicModalIsOpen, setHistoricModalIsOpen,
      addSnackModalIsOpen, setAddSnackModalIsOpen
   } = useContext(ApplicationContext)


   return (
      <Container>
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