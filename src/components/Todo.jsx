const Todo = ({title, description, done}) => {

    return (
        <>
            {done ? 
                <li>
                    <p>{title}</p>
                    <p>{description}</p>
                    <button>Markera som inte klar</button>
                    <button>Redigera</button>
                </li>
                : 
                <li>
                    <p>{title}</p>
                    <p>{description}</p>
                    <button>Markera som klar</button>
                    <button>Redigera</button>
                </li>
            }

        </>
    )
}

export default Todo;