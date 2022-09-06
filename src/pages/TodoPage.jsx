//Functionality
import { useState } from 'react';
import { FaBeer } from 'react-icons/fa'

//Under components
import Header from '../components/Header.jsx';
import AddTodoForm from '../components/AddTodoForm.jsx';
import DoneTodo from '../components/DoneTodo.jsx';
import UnDoneTodo from '../components/UnDoneTodo.jsx';

const TodoPage = () => {
    const [todos, setTodos] = useState([
        {
            title: "Städa",
            description: "Damsuga, damma, plocka",
            done: false
        },
        {
            title: "Diska",
            description: "",
            done: true
        },
    ]);

    const addTodo = (title, description) => {
        let newTodo = {
            title, 
            description,
            done: false
        }
        console.log(title, description)
        setTodos([...todos, newTodo]);
    }

    return (
        <>
            <Header heading={'Todo-lista'} />
            <main>
                <FaBeer/>
                <AddTodoForm addTodo={addTodo}/>
                <UnDoneTodo todos={todos}/>
                <DoneTodo todos={todos}/>
            </main>
        </>
    )
}

export default TodoPage;