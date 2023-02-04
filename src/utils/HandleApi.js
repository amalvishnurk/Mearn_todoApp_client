import axios from "axios";

const baseurl = 'http://localhost:3000'

// get todo function
const fetchdata = (setTodo) => {
    axios.get(`${baseurl}`)
        .then(result => {
            setTodo(result.data.message)
            // console.log(result.data.message);
            // console.log(todo);
        })

}


// add todo function
const handleAdd = (text, setTodo, setText) => {
    // e.preventDefault()
    console.log(text);
    axios.post(`${baseurl}/addTodo`, { text })
        .then(result => {
            console.log(result);
            // if (result.data.message != 'todo added') {
            //     alert(result.data.message)
            // }

            // clearing text
            setText("")
            // fetching all todo
            fetchdata(setTodo)
        })
        .catch(err => console.log(err))
}

// update todo function
const handleUpdate = (text, id, setTodo, setText, setisUpdate) => {
    axios.put(`${baseurl}/updateTodo`, { id, text })
        .then(result => {
            setText('')
            fetchdata(setTodo)
            setisUpdate(false)
        })
        .catch(err => console.log(err))
}

// update todo function
const handleDelete = (text, setTodo) => {
    console.log(text);
    axios.post(`${baseurl}/deleteTodo`, { text })
        .then(result => {
            // alert(result.data.message)
            fetchdata(setTodo)

        })
        .catch(err => console.log(err))
}




export {
    fetchdata,
    handleAdd,
    handleUpdate,
    handleDelete
}