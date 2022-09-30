import React from 'react'
import {CardWrapper} from './../styles/ComponentStyles'

const Passagens = () => {
  return (
    <CardWrapper>
      <div>Passagens (datas e custos)</div>
      <span>Este componente deve conter:</span>
      <ul>
        <li>passagens a serem compradas e já compradas</li>
        <li>valor e parcelamento das passagens (não compradas e compradas) - esta info vai para o orçamento geral</li>
      </ul>
    </CardWrapper>
  )
}

export default Passagens