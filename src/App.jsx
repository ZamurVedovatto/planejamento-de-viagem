import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'

import './App.css'

import {Link} from 'react-router-dom'

import Datas from './components/Datas'
import PeriodoDias from './components/PeriodoDias'
import Passagens from './components/Passagens'
import Hospedagens from './components/Hospedagens'
import CustosGerais from './components/CustosGerais'
import Alimentacao from './components/Alimentacao'
import Seguros from './components/Seguros'
import Orcamento from './components/Orcamento'
import TodoList from './components/TodoList'

import CardLink from './components/structure/CardLink'

import { PageTitle } from './components/PageTitle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PageTitle />
      <div className="page-container">
        <Routes>
          <Route path="/" element={<Datas />} />
        </Routes>

        {/* <Link to="/datas" component={CardLink} /> */}
        {/* <CardLink title={"DatasCardLink"} url={"/datas"} /> */}

        
        <PeriodoDias />
        <Passagens />
        <Hospedagens />
        <CustosGerais />
        <Alimentacao />
        <Seguros />
        <Orcamento />
        <TodoList />
      </div>
    </>
  )
}

export default App
