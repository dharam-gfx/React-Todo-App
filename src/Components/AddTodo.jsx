import React, { useEffect, useState } from 'react'
import { addTodo, updateTodo } from '../features/todo/todoSlice';
import { useDispatch, useSelector } from 'react-redux';
const AddTodo = () => {
  const [todo, setTodo] = useState("")
  const dispatch = useDispatch();
  const todoInputs = useSelector((state) => {
    return state.todoUpdateInput
  })

  const addTodoHandler = (todo) => {
    if (!todo.trim()) return;
    dispatch(addTodo(todo));
    setTodo("")
  }
  const updateTodoHandler = (id, todo) => {
    if (!todo.trim()) return;
    dispatch(updateTodo({ id, todo }));
  }

  useEffect(() => {
    setTodo(todoInputs?.todo);
  }, [todoInputs?.isUpdated])

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()} >
        <div className="p-4 flex gap-4 dark:bg-gray-700 rounded-[10px] dark:border-0 border border-orange-500">
          <div className="relative w-full min-w-[150px] h-10">
            <input
              onChange={(e) => setTodo(e.target.value)}
              value={todo}
              name='todo'
              className="peer w-full h-full bg-transparent text-orange-400 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-orange-500 placeholder-shown:border-t-orange-500 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-orange-500 focus:border-orange-500"
              placeholder="" />
            <label
              className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-orange-500 peer-focus:text-orange-400 before:border-orange-500 peer-focus:before:!border-orange-500 after:border-orange-500 peer-focus:after:!border-orange-500 font-medium">Todo Name
            </label>
          </div>
          <div>
            {
              !todoInputs?.isUpdated ?
                <button
                  title='Add Todo'
                  onClick={() => addTodoHandler(todo)}
                  className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none px-4 h-10 max-h-[40px] rounded-lg text-xs bg-orange-500 text-white shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                  type="submit">
                  <span className='whitespace-nowrap'>Add</span>
                </button>
                :
                <button
                  title='Update Todo'
                  onClick={() => updateTodoHandler(todoInputs?.id, todo)}
                  className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none px-4 h-10 max-h-[40px] rounded-lg text-xs bg-green-500 text-white shadow-md shadow-green-500/20 hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                  type="submit">
                  <span className='whitespace-nowrap'>Update</span>
                </button>
            }

          </div>
        </div>
      </form>
    </div>
  )
}

export default AddTodo