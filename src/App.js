import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Todo from './components/Todo';
import { fetchdata, handleAdd, handleUpdate,handleDelete } from './utils/HandleApi';


function App() {

  const [todo, setTodo] = useState([])
  const [text, setText] = useState("")
  const [isUpdating, setisUpdate] = useState(false)
  const [id, setId] = useState('')


  useEffect(() => {
    fetchdata(setTodo)
  }, [])

  const updateModeTodo=(id,text)=>{
    setisUpdate(true)
    setText(text)
    setId(id)
  }

  


  return (
    <div className="App">
      <div className='container'>
        <h1>To do App</h1>
        <div className='top'>
          <input value={text} onChange={(e) => setText(e.target.value)} type='text' placeholder='Add to do here'></input>
          <button type='submit'
            onClick={() => isUpdating ? handleUpdate(text, id, setTodo, setText, setisUpdate)
              : handleAdd(text, setTodo, setText)}
            className='btn btn-dark '>{isUpdating ? 'Update' : 'Add'}
          </button>
        </div>

        <div className='list'>
          {todo.map(item => <Todo 
          text={item.todo}
           id={item._id} 
           updateMode={()=>updateModeTodo(item._id, item.todo)}
           deleteMode={()=>handleDelete(item.todo,setTodo)}
           />)}



        </div>
      </div>

    </div>
  );
}

export default App;
