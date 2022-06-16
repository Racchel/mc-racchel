import { Container, Content } from './style.js'
import { SnackCard } from '../index.js'
import { useContext } from 'react'
import { ApplicationContext } from '../../shared/context'

export function SnackContainer({ handleClickOnAdd }) {
   const {
      listSnacksFiltered,
   } = useContext(ApplicationContext)

   return (
      <Container >
         <Content>
            {listSnacksFiltered.map((snack) => (
               <SnackCard key={snack.id}
                  snack={snack}
                  isNameable
                  isAdmin
                  handleClickOnAdd={(id) => handleClickOnAdd(id)}
               />
            ))}
         </Content>
      </Container >
   )
}