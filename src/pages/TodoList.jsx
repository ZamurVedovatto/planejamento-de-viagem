import React from 'react'
import {CardWrapper} from './../styles/ComponentStyles'

const TodoList = () => {
  return (
    <CardWrapper>
      <div>TodoList/Checklist</div>
      <span>Este componente deve conter:</span>
      <ul>
        <li>lista com etapas a se concluir antes, durante e depois da viagem, em ordem de prioridade</li>
        <li>status de obrigatoriedade e urgência</li>
      </ul>
    </CardWrapper>
  )
}

export default TodoList