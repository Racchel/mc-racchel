import { useState } from 'react'
import { Container, Content, List, ListItem, Button } from './style.js'

export function CustomSelect({ state, setState, list }) {
   const [isOpen, setIsOpen] = useState(false)

   function handleSelectClick(e) {
      e.preventDefault()
      setIsOpen(!isOpen)
   }

   function handleButtonClick(e) {
      e.preventDefault()
      setIsOpen(false)
      alert('criando uma nova categoria')
   }

   return (
      <Container>
         <Content>
            <p>{state}</p>
            <button onClick={handleSelectClick}>⬇</button>
         </Content>
         <List display={isOpen ? 1 : 0}>
            {list.map((item) => (
               <ListItem key={item.id} onClick={() => setState(item.name)}>{item.name}</ListItem>
            ))}
            <ListItem><Button onClick={handleButtonClick}>new</Button></ListItem>
         </List>

      </Container>
   )
}
