import { useContext, useEffect } from 'react'
import { ApplicationContext } from '../../shared/context/index.js'

import {
   Container,
   Button
} from './style.js'

export function SnackFilter() {

   const {
      filter, setFilter,
      search, setSearch,

      listCategories, setListCategories,
      listSnacks, setListSnacks,
      listSnacksFiltered, setListSnacksFiltered,
   } = useContext(ApplicationContext)

   useEffect(() => {
      let listSnacksRef = listSnacks

      filter !== 'all'
         ? listSnacksRef = listSnacks.filter(snack => snack.category === filter && snack.name?.toLowerCase().includes(search?.toLowerCase()))
         : listSnacksRef = listSnacks.filter(snack => snack.name?.toLowerCase().includes(search?.toLowerCase()))

      setListSnacksFiltered(listSnacksRef)

   }, [listSnacks, search, filter, setListSnacksFiltered])

   return (
      <Container>
         <input
            type='text'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Pesquisar por nome'
         />

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

      </Container>
   )
}