import { Customer } from '../index.js'
import { useContext } from 'react'
import { ApplicationContext } from '../../shared/context/index.js'

import {
   Container,
   Content,
   CustomerContainer,
   FilterContent,
   Filter
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
            <FilterContent>
               <input type='text' placeholder='Pesquisar por nome' />
               <select name=' id='>
                  <option value='lanche'>sem filtro</option>
                  <option value='lanche'>lanche</option>
                  <option value='doce'>doce</option>
                  <option value='bebida'>bebida</option>
                  <option value='outro'>outro</option>
               </select>
               <Filter>Filtrar</Filter>
            </FilterContent>

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