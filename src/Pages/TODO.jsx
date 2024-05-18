import React, { useEffect, useState } from 'react'
import AddTodo from '../Components/AddTodo'
import { TodoItems } from '../Components/TodoItems'
const TODO = () => {

 
  // const [todos, setTodos] = useState( JSON.parse( localStorage.getItem( 'todos' ) ) || [] );


  // useEffect( () => {
  //   let items = JSON.parse( localStorage.getItem( 'todos' ) );
  //   items && items.length > 0 && setTodos( items )
  // }, [] );

  // useEffect( () => {
  //   localStorage.setItem( 'todos', JSON.stringify( todos ) );
  // }, [todos] )


  return (

      <div className='dark:bg-gray-900 dark:text-white'>
        <div>
          <h1 className='text-center font-bold py-2 text-orange-400 text-2xl'>My Todo</h1>
        </div>
        <div className='max-w-2xl mx-auto  p-2'>
          <AddTodo />
          <div className='mt-2'>
            <TodoItems ></TodoItems>
          </div>
        </div>
      </div>

  )
}

export default TODO