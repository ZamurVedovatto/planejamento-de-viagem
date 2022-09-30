import React from 'react'
import {CardWrapper} from './../styles/ComponentStyles'

const Hospedagens = () => {
  return (
    <CardWrapper>
      <div>Hospedagens (datas e custos)</div>
      <span>Este componente deve conter:</span>
      <ul>
        <li>hospedagens a serem reservadas, pagas e já reservadas/pagas</li>
        <li>valor e parcelamento das hospedagens (não compradas e compradas) - esta info vai para o orçamento geral</li>
      </ul>
    </CardWrapper>
  )
}

export default Hospedagens