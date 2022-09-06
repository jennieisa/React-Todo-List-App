import { useState } from "react";

const UnDoneTodo = ({todos}) => {
    const [showMore, setShowMore] = useState(false);
    return (
        <section>
            <button onClick={() => setShowMore(!showMore)}>{showMore ? "Dölj todos" : "Visa todos"}</button>
            {showMore &&             
                <ul>
                    {todos.map((todo, index) => {
                        if (todo.done === false) {
                            return (
                                <li key={index}>
                                    <p>{todo.title}</p>
                                    <p>{todo.description}</p>
                                    <button>Klart</button>
                                    <button>Redigera</button>
                                </li>
                            )
                        }
                    })} 
                </ul>
            }
        </section>
    )
}

export default UnDoneTodo;