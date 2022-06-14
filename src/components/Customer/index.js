import {
   Container,
   Content
} from './style.js'

export function Customer({ customer }) {
   return (
      <Container>
         <Content src={customer.image} alt="" />
         <p>{customer.name}</p>
      </Container>
   )
}