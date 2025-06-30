import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

const TodoList = ({task}) => {
  return (
    <div className='TodoList'>
      <p>{task.task}</p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare}/>
        <FontAwesomeIcon icon={faTrashCan}/>
      </div>
    </div>
  )
}

export default TodoList
