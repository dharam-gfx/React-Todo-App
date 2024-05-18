import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleComplete, updateTodoStatus } from '../features/todo/todoSlice'
const TodoItem = ({ value }) => {
  let { id, todo, completed } = value;
  const dispatch = useDispatch()

  const deleteTodoHandler = (id) => {
    console.log(id);
    dispatch(deleteTodo(id))

  }
  const toggleHandler = (id) => {
    dispatch(toggleComplete(id))
  }
  const updateTodoStatusHandler = (id) => {
    dispatch(updateTodoStatus({ id, todo }))
  }

  const getRandomColor = () => "#" + Math.floor(Math.random() * 16777216)
    .toString(16).padStart(6, "0");

  return (
    <div className='border-b border-orange-400 pb-1.5'>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className='flex'>
          <div className=" w-1.5 rounded-[4px]" style={{ backgroundColor: getRandomColor() }} ></div>
          <div className='py-1 px-2 w-full flex justify-between'>
            <div title={completed ? 'completed' : 'Make completed'} className=' flex gap-3 grow'>
              {
                completed ? <button type='button' onClick={() => toggleHandler(id)}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                    className="w-8 fill-green-500  hover:fill-green-600">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                  </svg>
                </button>
                  : <button type="button" onClick={() => toggleHandler(id)} className='px-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                      className=" w-6 border-2 rounded-full">
                    </svg>
                  </button>
              }
              <div className='mt-1 grow'>
                <p title='Your Todo' className={` ${completed ? "line-through" : ""} `}>{todo}</p>
              </div>
            </div>

            <div className=' flex gap-3'>

              <button title='Update Todo' type='button' onClick={() => updateTodoStatusHandler(id, todo)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="fill-teal-500 w-6 h-6">
                  <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                  <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                </svg>
              </button>


              <button type='button'
                title='Delete Todo'
                onClick={() => deleteTodoHandler(id)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                  className="w-8 fill-red-500 transition-all hover:fill-red-600">
                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
                </svg>
              </button>

            </div>

          </div>
        </div>

      </form>
    </div>
  )
}

export default TodoItem