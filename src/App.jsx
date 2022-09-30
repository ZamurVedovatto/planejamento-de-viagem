import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'

import './App.css'

import {Link} from 'react-router-dom'

import Datas from './Pages/Datas'
import PeriodoDias from './Pages/PeriodoDias'
import Passagens from './Pages/Passagens'
import Hospedagens from './Pages/Hospedagens'
import CustosGerais from './Pages/CustosGerais'
import Alimentacao from './Pages/Alimentacao'
import Seguros from './Pages/Seguros'
import Orcamento from './Pages/Orcamento'
import TodoList from './Pages/TodoList'
import TrajetoDelineado from './Pages/TrajetoDelineado'

import { PageTitle } from './components/PageTitle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PageTitle />
      <div className="page-container">
        <Routes>
          <Route path="/datas" element={<Datas />} />
          <Route path="/datas" element={<PeriodoDias />} />
          <Route path="/datas" element={<Passagens />} />
          <Route path="/datas" element={<Hospedagens />} />
          <Route path="/datas" element={<CustosGerais />} />
          <Route path="/datas" element={<Alimentacao />} />
          <Route path="/datas" element={<Seguros />} />
          <Route path="/datas" element={<Orcamento />} />
          <Route path="/datas" element={<TodoList />} />
          <Route path="/datas" element={<TrajetoDelineado />} />
        </Routes>

        {/* <Datas />
        <PeriodoDias />
        <Passagens />
        <Hospedagens />
        <CustosGerais />
        <Alimentacao />
        <Seguros />
        <Orcamento />
        <TodoList />
        <TrajetoDelineado /> */}
      </div>
    </>
  )
}

export default App
