import { convertValueIntoCurrency } from '../../../utils/index.js'

import { Content, Title, Body, Amount, Table, THeader, Button } from './style.js'

export function CheckoutModal({
   customer, amount, listSnacks, itsPurchase,
   handleClickToSubmit,
   handleClickToClose
}) {
   return (
      <Content>
         <Title>{itsPurchase ? 'Aqui sua notinha!' : `Notinha do(a) ${customer.name}`}
            {itsPurchase && <button onClick={() => handleClickToClose()}>X</button>}
         </Title>

         <Body>
            <Table>
               <tr>
                  <th>Nome</th>
                  <th>CPF</th>
               </tr>
               <tr>
                  <td>{customer.name}</td>
                  <td>{customer.cpf}</td>
               </tr>
            </Table>

            <Table>
               <THeader>
                  <th>Qtd</th>
                  <th>Nome</th>
                  <th>Valor Unit</th>
               </THeader>

               {listSnacks.map(snack => (
                  <tr>
                     <td>{snack.qtd}</td>
                     <td>{snack.name}</td>
                     <td>{convertValueIntoCurrency(snack.price)}</td>
                  </tr>
               ))}
            </Table>

            <Amount>Valor total {convertValueIntoCurrency(amount)}</Amount>

         </Body>
         <Button onClick={() => handleClickToSubmit()}>{itsPurchase ? 'Finalizar compra' : 'Fechar nota'}</Button>
      </Content>
   )
}