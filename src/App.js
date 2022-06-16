import { useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { GlobalStyle } from './style.js'
import { DragDrops } from './components/index.js'
import { ApplicationContext } from './shared/context/index.js'
import { CustomersList, SnackList, CategoriesList } from './shared/data/index.js'

function App() {
  const [amount, setAmount] = useState(0)
  const [count, setCount] = useState(0)
  const [filter, setFilter] = useState('all')


  /** Listas */
  const [listCategories, setListCategories] = useState(CategoriesList)
  const [listSnacks, setListSnacks] = useState(SnackList)
  const [listSnacksFiltered, setListSnacksFiltered] = useState(SnackList)
  const [listCustomers, setListCustomers] = useState(CustomersList)
  const [board, setBoard] = useState([])
  const [historic, setHistoric] = useState([])
  const [customer, setCustomer] = useState(CustomersList[0])

  /** Modal */
  const [checkoutModalIsOpen, setCheckoutModalIsOpen] = useState(false)
  const [historicModalIsOpen, setHistoricModalIsOpen] = useState(false)
  const [addSnackModalIsOpen, setAddSnackModalIsOpen] = useState(false)
  const [editSnackModalIsOpen, setEditSnackModalIsOpen] = useState(false)
  const [editSnack, setEditSnack] = useState({})

  function handleEditSnackModal(editSnack) {
    setEditSnackModalIsOpen(!editSnackModalIsOpen)

    editSnack
      ? setEditSnack(editSnack)
      : setEditSnack({})
  }

  return (
    <ApplicationContext.Provider value={{
      amount, setAmount,
      count, setCount,
      filter, setFilter,

      listCategories, setListCategories,
      listSnacks, setListSnacks,
      listSnacksFiltered, setListSnacksFiltered,
      listCustomers, setListCustomers,
      board, setBoard,
      historic, setHistoric,
      customer, setCustomer,

      checkoutModalIsOpen, setCheckoutModalIsOpen,
      historicModalIsOpen, setHistoricModalIsOpen,
      addSnackModalIsOpen, setAddSnackModalIsOpen,
      editSnackModalIsOpen, setEditSnackModalIsOpen, handleEditSnackModal,
      editSnack, setEditSnack
    }}>
      <DndProvider backend={HTML5Backend}>
        <GlobalStyle />
        <DragDrops />
      </DndProvider>
    </ApplicationContext.Provider>
  );
}

export default App;
