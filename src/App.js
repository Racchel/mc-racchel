import { useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { GlobalStyle } from './style.js'
import { DragDrops } from './components/index.js'
import { ApplicationContext } from './shared/context/index.js'
import { CustomersList, SnackList } from './shared/index.js'

function App() {
  const [amount, setAmount] = useState(0)
  const [customer, setCustomer] = useState(CustomersList[0])
  const [count, setCount] = useState(0)
  const [board, setBoard] = useState([])
  const [historic, setHistoric] = useState([])
  const [listSnacks, setListSnacks] = useState(SnackList)
  const [listCustomers, setListCustomers] = useState(CustomersList)

  return (
    <ApplicationContext.Provider value={{
      listSnacks, setListSnacks,
      listCustomers, setListCustomers,
      board, setBoard,
      historic, setHistoric,
      amount, setAmount,
      count, setCount,
      customer, setCustomer,
    }}>
      <DndProvider backend={HTML5Backend}>
        <GlobalStyle />
        <DragDrops />
      </DndProvider>
    </ApplicationContext.Provider>
  );
}

export default App;
