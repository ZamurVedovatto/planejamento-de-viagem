import React from 'react'
import {CardWrapper} from './../styles/ComponentStyles'

const CustosGerais = () => {
  return (
    <CardWrapper>
      <div>Custos Gerais</div>
      <span>Este componente deve conter:</span>
      <ul>
        <li>valores de todo e qualquer custo (Brasil e Itália), realizados e não realizados, com margem de erro para possíveis valores que podem se alterar</li>
        <li>verificar necessidade desta página (pode ser utilizada somente a página Orçamento)</li>
      </ul>
    </CardWrapper>
  )
}

export default CustosGerais