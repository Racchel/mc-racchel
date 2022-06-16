import { useContext } from 'react'
import { ApplicationContext } from '../../shared/context/index.js'

import {
   Container,
   Button
} from './style.js'

export function SnackFilter() {

   const {
      filter, setFilter,

      listCategories, setListCategories,
      listSnacks, setListSnacks,
      listSnacksFiltered, setListSnacksFiltered,
   } = useContext(ApplicationContext)


   function handleFilter() {
      let listSnacksRef = listSnacks

      if (filter !== 'all') {
         console.log('filter', filter)
         listSnacksRef = listSnacks.filter(snack => snack.category === filter)
         console.log('listSnacksRef', listSnacksRef)
         console.log('entrou no if')
      }

      setListSnacksFiltered(listSnacksRef)
   }

   return (
      <Container>
         <input type='text' placeholder='Pesquisar por nome' />
         <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
         >
            <option value='all'>sem filtro</option>
            {listCategories.map((categorie) => (
               <option key={categorie.id} value={categorie.name}>
                  {categorie.name}
               </option>
            ))}
         </select>

         <Button onClick={() => handleFilter()}>Filtrar</Button>
      </Container>
   )
}