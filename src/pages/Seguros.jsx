import React from 'react'
import {CardWrapper} from './../styles/ComponentStyles'

const Seguros = () => {
  return (
    <CardWrapper>
      <div>Seguros</div>
      <span>Este componente deve conter:</span>
      <ul>
        <li>seguros a serem comprados e já comprados</li>
        <li>valor e parcelamento das seguros (não comprados e comprados) - esta info vai para o orçamento geral</li>
      </ul>
    </CardWrapper>
  )
}

export default Seguros