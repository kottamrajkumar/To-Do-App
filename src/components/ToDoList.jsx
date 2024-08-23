import React from 'react'

function ToDoList(props) {
  return (
    <div>
        <h1>TodoList</h1>
        {
          props.tasks.map((task,index)=><h3 className='text-warning bg-dark' key='index'>{task}</h3>)
        }
    </div>
  )
}

export default ToDoList;