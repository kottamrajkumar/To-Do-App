import React from 'react'

function ToDoCount(props) {
  return (
    <div>
        <h1>TodoCount</h1>
        <p className='display-3 text-primary bg-dark'>{props.tasks.length}</p>
    </div>
  )
}

export default ToDoCount;