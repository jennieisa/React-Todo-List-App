import { useState } from "react";

const DoneTodo = ({todos}) => {
    const [showMore, setShowMore] = useState(false);

    return (
        <section>
            <button onClick={() => setShowMore(!showMore)}>{showMore ? "Dölj avklarade todos" : "Visa avklarade todos"}</button>
            {showMore && 
            <ul>
                {todos.map((todo, index) => {
                        if (todo.done === true) {
                            return (
                                <li key={index}>
                                    <p>{todo.title}</p>
                                    <p>{todo.description}</p>
                                    <button>Markera som inte klar</button>
                                </li>
                            )
                        } 
                    })}
            </ul>}
        </section>
    )
}

export default DoneTodo;