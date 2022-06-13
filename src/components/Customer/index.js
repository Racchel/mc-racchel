import {
   Content
} from './style.js'

export function Customer({ customer }) {
   return (
      <>
         <Content src={customer.image} alt="" />
         <p>{customer.name}</p>
      </>
   )
}