import React from 'react'
import {CardWrapper} from './../styles/ComponentStyles'

const Orcamento = () => {
  return (
    <CardWrapper>
      <div>Plano de Orcamento Geral (quanto guardar por mês/orcamento atual com margem de erro (valores não fechados))</div>
      <span>Este componente deve conter:</span>
      <ul>
        <li>todos os valores lançados nos demais componentes (passagens, seguros, hospedagens, alimentação, etc)</li>
        <li>cálculo de margem de erro para valores não fechados</li>
        <li>cálculo com custos que são divididos por mais de uma pessoa</li>
      </ul>
    </CardWrapper>
  )
}

export default Orcamento