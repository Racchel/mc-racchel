import { v4 as uuidv4 } from 'uuid'

export const SnackList = [
   {
      id: uuidv4(),
      name: 'X suprassumo da delícia',
      price: 30.00,
      qtd: 0,
      isChosen: true,
      image: 'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kzXCTbnv/200/200/original?country=br'
   },
   {
      id: uuidv4(),
      name: 'Lanche ridículamente gostoso',
      price: 10.00,
      qtd: 0,
      isChosen: true,
      image: 'https://vejario.abril.com.br/wp-content/uploads/2018/02/duplotasty.png'
   },
   {
      id: uuidv4(),
      name: 'Perfeição e perfeito',
      price: 20.00,
      qtd: 0,
      isChosen: true,
      image: 'https://achatadasdietas.blogfolha.uol.com.br/files/2016/01/Grand_Big_Tasty.png'
   },
   {
      id: uuidv4(),
      name: 'O matador da fome',
      price: 15.00,
      qtd: 0,
      isChosen: true,
      image: 'https://vejasp.abril.com.br/wp-content/uploads/2016/11/14321_big-mac-jpg.jpeg'
   }
]