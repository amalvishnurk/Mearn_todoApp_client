import axios from 'axios';
import React from 'react'
import { AiFillDelete } from 'react-icons/ai';
import { BiEdit } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom'
import { handleUpdate } from '../utils/HandleApi';



function Todo({ text, updateMode, deleteMode }) {

    return (

        <div className='todo'>
            <div className='text'>{text}</div>
            <div className='icons'>
                <div className='icon'>
                    <BiEdit className='icon' onClick={updateMode} />
                    <AiFillDelete className='icon' onClick={deleteMode} />
                </div>
            </div>
        </div>

    )
}

export default Todo