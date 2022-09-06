//Functionality
import { useState } from 'react';

//Under components
import Header from '../components/Header.jsx';
import AddTodoForm from '../components/AddTodoForm.jsx';
import DoneTodo from '../components/DoneTodo.jsx';
import UnDoneTodo from '../components/UnDoneTodo.jsx';

const TodoPage = () => {
    const [todos, setTodos] = useState({});

    return (
        <>
            <Header heading={'Todo-lista'} />
            <main>
                <AddTodoForm />
                <UnDoneTodo />
                <DoneTodo />
            </main>
        </>
    )
}

export default TodoPage;