import React from 'react'
import {CardWrapper} from './../styles/ComponentStyles'

const Datas = () => {
  return (
    <CardWrapper>
      <div>Datas</div>
      <span>Este componente deve conter:</span>
      <ul>
        <li>possíveis datas de embarque e desembarque</li>
        <li>possíveis datas de check-in e check-out em hotéis, pousadas e airbnbs</li>
        <li>datas não confirmadas e confirmadas</li>
      </ul>
    </CardWrapper>
  )
}

export default Datas