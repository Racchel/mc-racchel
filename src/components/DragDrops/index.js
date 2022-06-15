import { useContext, useEffect, useRef } from 'react'
import { ApplicationContext } from '../../shared/context/index.js'

/** components */
import { SnackContainer, CenterContainer, PurchaseContainer } from '../index.js'
import { CheckoutModal, SnackModal, HistoricModal } from '../Modal/index.js'

/** style */
import { Container } from './style.js'

export const DragDrops = () => {
   const {
      listSnacks, setListSnacks,
      listCustomers,
      board, setBoard,
      historic, setHistoric,
      amount, setAmount,
      count, setCount,
      customer, setCustomer,

      checkoutModalIsOpen, setCheckoutModalIsOpen,
      historicModalIsOpen, setHistoricModalIsOpen,
      addSnackModalIsOpen, setAddSnackModalIsOpen,
      editSnackModalIsOpen, setEditSnackModalIsOpen
   } = useContext(ApplicationContext)

   /** usar uma referência porque a atualização do estado não é entendida na mesma hora */
   const listSnacksRef = useRef(listSnacks)

   /** verifica se foram adicionados novos lanches na lista e atualiza preço total */
   useEffect(() => {
      let value = 0
      board.map(snack => value += snack.qtd * snack.price)
      setAmount(value)
      listSnacksRef.current = listSnacks
   }, [board, setAmount, listSnacks])


   /** funcão para adicionar lanches na lista ao arrastar */
   function AddSnackToBoard(id) {
      const newListSnack = listSnacksRef.current
      const snackIndex = newListSnack.findIndex(snack => id === snack.id)

      /** considera a quantidade mínima do pedido como 1 item */
      newListSnack[snackIndex].qtd = 1

      /** impede que esse lancha seja escolhido novamente */
      newListSnack[snackIndex].isChosen = false

      setListSnacks(newListSnack)

      /** adiciona esse lanche a bancada */
      setBoard(prevState => [...prevState, newListSnack[snackIndex]]);
   }

   /** funcão para remover lanches na lista ao clicar no botão */
   function RemoveSnackToBoard(id) {
      const newListSnack = listSnacksRef.current
      const snackIndex = newListSnack.findIndex(snack => id === snack.id)

      /** disponibiliza o lanche para escolha novamente */
      newListSnack[snackIndex].isChosen = true
      setListSnacks(newListSnack)

      /** remove o lanche da bancada */
      const snackRemove = board.filter((snack) => id !== snack.id)
      setBoard(snackRemove);
   }

   /** Finalizar compra */
   function FinalizePurchase() {
      /** Se valor total da compra for zero, não finalizar a compra */
      if (amount === 0) return

      alert(`Sua compra foi finalizada! Muito obrigad@ pela preferência <3`)

      /** fechar o modal da notinha */
      setCheckoutModalIsOpen(!checkoutModalIsOpen)

      /** adicionar +1 ao contador que chama o prox cliente no array de clientes */
      setCount(prevState => prevState >= listCustomers.length - 1 ? 0 : prevState + 1)

      /** chamar o próximo cliente */
      setCustomer(listCustomers[count])

      /** esvaziar bancada para próximo cliente */
      setBoard([])

      /** Adicionar os dados dessa compra ao histórico do dia */
      const newHistoric = {
         time: new Date().getHours() + ':' + new Date().getMinutes(),
         amount: amount,
         customer: { name: customer.name, cpf: customer.cpf },
         listSnacks: board
      }
      setHistoric(prevState => [...prevState, newHistoric])

      /** Deixar os lanches disponiveis para escolha novamente */
      const newListSnack = [...listSnacks]
      newListSnack.map(snack => snack.isChosen = true)
      setListSnacks(newListSnack)
   }


   return (
      <Container >
         <SnackContainer handleClickOnAdd={AddSnackToBoard} />
         <CenterContainer />
         <PurchaseContainer
            handleAdd={AddSnackToBoard}
            handleRemove={RemoveSnackToBoard}
         />


         {/** Modal da notinha da compra */}
         {checkoutModalIsOpen && (
            <CheckoutModal
               customer={customer}
               amount={amount}
               listSnacks={board}
               handleClickToClose={() => setCheckoutModalIsOpen(!checkoutModalIsOpen)}
               handleClickToSubmit={() => FinalizePurchase()}
               itsPurchase
            />
         )}

         {/** Modal do histórico da compra */}
         {historicModalIsOpen && (
            <HistoricModal
               historic={historic}
               handleClickToClose={() => setHistoricModalIsOpen(!historicModalIsOpen)}
            />
         )}

         {/** Modal de adicionar lanche */}
         {addSnackModalIsOpen && (
            <SnackModal handleClickToClose={() => setAddSnackModalIsOpen(!addSnackModalIsOpen)} />
         )}

         {/** Modal de editar lanche */}
         {editSnackModalIsOpen && (
            <SnackModal handleClickToClose={() => setEditSnackModalIsOpen(!editSnackModalIsOpen)} />
         )}
      </Container>
   )
}