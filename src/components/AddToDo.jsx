import React from 'react'

import {useForm} from 'react-hook-form'

function AddToDo(props) {
  let {register,handleSubmit}=useForm()
  

  return (
    <div className='container'>
        <h1>AddTodo</h1>
        <form onSubmit={handleSubmit(props.Addnewtask)}>
           <div className='mb-3'>
            <label htmlFor='task'>Enter Your Task</label>
            <input  type ='text'  id='task'  className='form-control'  {...register("task")}></input>
           </div>
           <button type='submit' className='btn btn-success'>Add New Task</button>
        </form>
    </div>
  )
}

export default AddToDo;