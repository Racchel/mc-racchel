import {
   Container,
   Content,
   Name
} from './style.js'

export function Customer({ customer }) {
   return (
      <Container>
         <Name>{customer.name}</Name>
         <Content src={customer.image} alt="" />
      </Container>
   )
}