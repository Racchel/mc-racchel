import { useEffect, useState } from 'react'
import { convertValueIntoCurrency } from '../../utils/index.js'
import { CheckoutModal } from '../CheckoutModal/index.js'

import {
   Content,
   Table
} from './style.js'

export function Historic({ historic, handleClickToClose }) {
   const [modalIsOpen, setModalIsOpen] = useState(false)
   const [amount, setAmount] = useState(0)

   useEffect(() => {
      let value = 0
      historic.map(item => value += item.amount)
      setAmount(value)
   }, [historic])

   return (
      <Content>
         <h2>Histórico do dia</h2>
         <Table>
            <tr>
               <th>Nota</th>
               <th>Hora</th>
               <th>Valor total</th>
               <th>Cliente</th>
            </tr>
            {historic.map(item => (
               <>
                  <tr>
                     <td>
                        <button onClick={() => setModalIsOpen(!modalIsOpen)}>
                           {modalIsOpen ? 'Fechar' : 'Abrir'}
                        </button>
                     </td>
                     <td>{item.time}</td>
                     <td>{convertValueIntoCurrency(item.amount)}</td>
                     <td>{item.customer.name}</td>
                  </tr>


                  {modalIsOpen && (
                     <CheckoutModal
                        customer={item.customer}
                        amount={item.amount}
                        listSnacks={item.listSnacks}
                        handleClickToSubmit={() => setModalIsOpen(!modalIsOpen)}
                        handleClickToClose={() => handleClickToClose()}

                     />
                  )}
               </>
            ))}
         </Table>

         <h3>Valor total: {convertValueIntoCurrency(amount)}</h3>

      </Content>
   )
}