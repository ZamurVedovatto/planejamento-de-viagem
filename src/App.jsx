import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'

import './App.css'

import Dashboard from './Pages/Dashboard'
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
import { NavLink } from './components/NavLink'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PageTitle />
      
      <div className="page-container">
        <nav className="cards-nav">
          <NavLink url={"/"} title={"Home"} />
          <NavLink url={"/datas"} title={"Datas"} />
          <NavLink url={"/periodo-dias"} title={"PeriodoDias"} />

          <NavLink url={"/passagens"} title={"Passagens"} />
          <NavLink url={"/hospedagens"} title={"Hospedagens"} />
          <NavLink url={"/custos-gerais"} title={"Custos Gerais"} />
          <NavLink url={"/alimentacao"} title={"Alimentação"} />
          <NavLink url={"/seguros"} title={"Seguros"} />
          <NavLink url={"/orcamento"} title={"Orçamento"} />
          <NavLink url={"/todo-list"} title={"Todo List"} />
          <NavLink url={"/trajeto-delineado"} title={"Trajeto Delineado"} />
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/datas" element={<Datas />} />
        <Route path="/periodo-dias" element={<PeriodoDias />} />
        <Route path="/passagens" element={<Passagens />} />
        <Route path="/hospedagens" element={<Hospedagens />} />
        <Route path="/custos-gerais" element={<CustosGerais />} />
        <Route path="/alimentacao" element={<Alimentacao />} />
        <Route path="/seguros" element={<Seguros />} />
        <Route path="/orcamento" element={<Orcamento />} />
        <Route path="/todo-list" element={<TodoList />} />
        <Route path="/trajeto-delineado" element={<TrajetoDelineado />} />
      </Routes>
    </>
  )
}

export default App
